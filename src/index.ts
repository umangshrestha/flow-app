import { PORT, IP, LOG_NAME } from "@config/settings";
import app from "./app";
import logger from "@logger";

app.listen(PORT, IP, () => logger.debug(LOG_NAME, `http://${IP}:${PORT}`));