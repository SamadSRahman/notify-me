import { Loading, useAppBridge } from "@shopify/app-bridge-react";
import { Redirect } from "@shopify/app-bridge/actions";
import { useEffect } from "react";

const ExitFrame = (props) => {

    // Use the `useAppBridge` hook to access the Shopify App Bridge
  const app = useAppBridge();

  useEffect(() => {

    // Create a new instance of URLSearchParams to parse the query parameters from the current URL
    const params = new URLSearchParams(window.location.href);

    // Get the value of the "redirectUri" parameter from the query string
    let redirectUri = params.get("redirectUri");

    // If the component received a "shop" prop, construct the redirect URI with the shop parameter
    if (props.shop) {
      redirectUri = `https://${appOrigin}/auth?shop=${props.shop}`;
    }

    //Create a new Redirect object using the Shopify App Bridge
    const redirect = Redirect.create(app);

    redirect.dispatch(Redirect.Action.REMOTE, decodeURIComponent(redirectUri));
  }, [app]);//The effect runs only when the `app` object changes

  // Render a Loading component while the redirect is being processed
  return <Loading />;
};

export default ExitFrame;
