
import express from 'express'
import { IP, NAME, TAG, PORT, NODE_ENV } from './config/settings';

const app = express();


app.get('/greet', (_: express.Request, res: express.Response) => {
  res.status(200).json({ "name": "hello, World" })
})
app.listen(PORT, IP, () => {
  (NODE_ENV === "production") && console.log(`${NAME}@${TAG}: http://${IP}:${PORT}`)
})