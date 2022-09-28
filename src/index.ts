
import express from 'express'
import { PORT } from './config';

const app = express();


app.get('/hello', (_, res) => {
    res.status(200).json({"name": "hello, WOrld"})
  })
  app.listen(PORT, () => console.log(`Running on port ${PORT}`))