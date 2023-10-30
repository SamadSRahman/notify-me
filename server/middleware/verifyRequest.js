import sessionHandler from "../utils/sessionHandler.js";
import shopify from "../utils/shopifyConfig.js";

const TEST_QUERY = `
{
  shop {
    name
  }
}`;

const verifyRequest = async (req, res, next) => {
  try {
    let { shop } = req.query;

    const sessionId = await shopify.session.getCurrentId({
      isOnline: true,
      rawRequest: req,
      rawResponse: res,
    });

    const session = await sessionHandler.loadSession(sessionId);
    
    if(session && session?.shop)
    {
      req.query.shop = session?.shop
    }

    console.log(session, "hii from session");
    console.log(session?.shop);
    console.log(req.query.shop);

    // console.log(new Date(session?.expires) > new Date());
    console.log(`exired token is ${new Date(session?.expires)}`)
    if (new Date(session?.expires) > new Date()) {
      const client = new shopify.clients.Graphql({ session });
      await client.query({ data: TEST_QUERY });
      console.log("inside session");
      res.setHeader(
        "Content-Security-Policy",
        `frame-ancestors https://${session.shop} https://admin.shopify.com;`
      );
      return next();
    }
    console.log("outside");
    console.log(req?.headers?.authorization)
    const authBearer = req.headers.authorization?.match(/Bearer (.*)/);
    if (authBearer) {
      if (!shop) {
        console.log(shop)
        if (session) {
          console.log("Enter INSIDE sHOP StateMemt")
          shop = session?.shop || "renergii.myshopify.com";
          // shop = session.shop;
        } else if (shopify.config.isEmbeddedApp || true) {
          console.log("Enter Inside embeed ")
          if (authBearer) {
            const payload = await shopify.session.decodeSessionToken(
              authBearer[1]
            );
            shop = payload.dest.replace("https://", "")
          }
        }
      }
      res.status(403);
      res.header("X-Shopify-API-Request-Failure-Reauthorize", "1");
      res.header(
        "X-Shopify-API-Request-Failure-Reauthorize-Url",
        `/exitframe/${shop}`
      );
      console.log("Reaches to the end the what to do")
      res.end();
    } else {
      res.redirect(`/exitframe/${shop}`);
    }
  } catch (e) {
    console.error(e);
    return res.status(401).send({ error: "Nah I ain't serving this request" });
  }
};

export default verifyRequest;
