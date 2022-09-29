import { PORT, IP, NAME, TAG, isDevelopment } from "@config/settings";
import { TOPICS_LIST } from "@config/topics";
import app from "./app";

app.listen(PORT, IP, () => {
  const debugMsg = `${NAME}@${TAG}: http://${IP}:${PORT}`;
  isDevelopment() && console.log(debugMsg);
})