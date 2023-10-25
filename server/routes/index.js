import { Router } from "express";
import {sendNotification , updateServerKey , getServerKey } from "../controllers/firebaseController.js"
import {getAllSegment , getProduct} from "../controllers/shopifyApiCotroller.js"

const router = Router();

router.get("/api", (req, res) => {
  const sendData = { text: "This is coming from /apps/api route." };
  return res.status(200).json(sendData);
});


router.get("/api/getSegment", getAllSegment)

router.get("/api/getServerkey",getServerKey)

router.get("/api/getProduct", getProduct)

router.post("/api/sendNotificatication", sendNotification)

router.post("/api/updateServerKey",updateServerKey)


export default router;
