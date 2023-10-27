import React, { useState } from "react";
import styles from "./Templates.module.css";
import { Page, Text, Tooltip } from "@shopify/polaris";
import { useSetRecoilState } from "recoil";
import { templateAtom } from "../recoilStore/store";
import { useNavigate } from "raviger";

export default function Templates() {
  const setTemplate = useSetRecoilState(templateAtom);
  const navigate = useNavigate();
       
        const helperTextBasic =  "Choose the 'Basic Notification' option to send a simple yet effective message to your customers. When clicked, this notification will direct users to your app's inviting landing page, providing them with a seamless experience to explore everything your app has to offer.";
  const helperTextProduct = "Opt for the 'Product-Specific Notification' to deliver targeted messages about specific products. This option enables you to provide personalized experiences for your customers. When clicked, this notification will take users directly to the detailed page of the mentioned product within your app, enhancing their engagement and encouraging swift actions.";
  const handleTemplateSelect = (temp) => {
    setTemplate(temp);
    navigate("/createNotification");
  };
  const handleMouseOver = (temp) => {
    // if (temp == "basic")
    //   setHelperText(
    //   );
    // else {
    //   setHelperText(
        
    //   );
    // }
  };
  return (
    <div>
      <Page>
        <div className={styles.container}>
          <div className={styles.head}>
            <Text as="h1" variant="headingXl">
              Template
            </Text>
            <Text variant="headingMd" id="subHeading">
              Please select a template for your notification
            </Text>
          </div>
          <div className={styles.body}>
          <Tooltip  content={helperTextBasic} width="wide" >
            <div
              className={styles.cardBasic}
              onClick={() => handleTemplateSelect("basic notification")}
              onMouseOver={() => handleMouseOver("basic")}
            >
            
              <Text fontWeight="bold" as="h1" variant="headingXl">
          Basic Notification
        </Text>
              <div className={styles.arrow}></div>
            </div>
            </Tooltip>
            <Tooltip  content={helperTextProduct} width="wide" >
            <div
              className={styles.cardProduct}
              onClick={() => handleTemplateSelect("product notification")}
              onMouseOver={() => handleMouseOver("product")}
              
            >
             <Text fontWeight="bold" as="h1" variant="headingXl"> Notification for a specific product</Text>

            </div>
            </Tooltip>

          </div>
        </div>
      </Page>
    </div>
  );
}
