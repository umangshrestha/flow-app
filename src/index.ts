
import express from "express"
import cors from "cors";

import greet from "./api/greet";
import * as S from "./config/settings";
import { CORS_OPTIONS } from "./config/cors";

const app = express();
app.use(cors<express.Request>(CORS_OPTIONS));

app.use('/greet', greet);

app.listen(S.PORT, S.IP, () => {
  const debugMsg = `${S.NAME}@${S.TAG}: http://${S.IP}:${S.PORT}`;
  (S.NODE_ENV === "development") && console.log(debugMsg)
})