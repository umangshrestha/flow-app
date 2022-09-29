
import express from "express"
import cors from "cors";

import urls from "./urls";

import { CORS_OPTIONS } from "@config/cors";
import { URL_ENCODED_OPTIONS } from "./config/urlencoded";
import * as S from "@config/settings";
import debug from "@middleware/debug";
import errorhandler from "@middleware/errorhandler";

const app = express()
  .use(express.json())
  .use(express.urlencoded(URL_ENCODED_OPTIONS))
  .use(cors<express.Request>(CORS_OPTIONS));


// adding for debug middlerwares;
app.use(debug(S.IS_DEVELOPMENT));



app.use(urls); // addding routers
app.use(errorhandler);


app.listen(S.PORT, S.IP, () => {
  const debugMsg = `${S.NAME}@${S.TAG}: http://${S.IP}:${S.PORT}`;
  S.IS_DEVELOPMENT && console.log(debugMsg);
})