
import express from "express"
import cors from "cors";

import urls from "./urls";
import { CORS_OPTIONS } from "@config/cors";
import { URL_ENCODED_OPTIONS } from "./config/urlencoded";
import { isDevelopment } from "@config/settings";
import debug from "@middleware/debug";
import errorhandler from "@middleware/errorhandler";

const app = express()
    .use(express.json())
    .use(express.urlencoded(URL_ENCODED_OPTIONS))
    .use(cors<express.Request>(CORS_OPTIONS));

// adding for debugging middlwares;
isDevelopment() && app.use(debug);
// addding routers
app.use(urls);
// handling errors
app.use(errorhandler);


export default app;