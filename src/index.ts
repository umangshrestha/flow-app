
import express from "express"
import cors from "cors";

import hello from "@api/hello";
import topic from "@api/topic";

import { CORS_OPTIONS } from "@config/cors";
import * as S from "@config/settings";


const app = express()
  .use(express.json())
  .use(express.urlencoded())
  .use(cors<express.Request>(CORS_OPTIONS));

app.use('/hello', hello)
  .use('/topic', topic);

app.listen(S.PORT, S.IP, () => {
  const debugMsg = `${S.NAME}@${S.TAG}: http://${S.IP}:${S.PORT}`;
  (S.NODE_ENV === "development") && console.log(debugMsg)
})