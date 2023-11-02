//Routes.jsx

import React from "react";
import ExitFrame from "./ExitFrame";
import BillingAPI from "./pages/debug/Billing";
import GetData from "./pages/debug/Data";
import ActiveWebhooks from "./pages/debug/Webhooks";
import CreateNotification from './pages/CreateNotification'
import SettingsPage from './pages/SettingsPage'
import Templates from "./pages/Templates";

const routes = {
  "/": () => <GetData/>,
  "/exitframe": () => <ExitFrame />,
  "/exitframe/:shop": ({ shop }) => <ExitFrame shop={shop} />,
  "/debug/webhooks": () => <ActiveWebhooks />,
  "/debug/billing": () => <BillingAPI />,
  "/createnotification":()=><CreateNotification/>,
  '/settings':()=><SettingsPage/>,
  '/templates':()=><Templates/>
};

export default routes;
