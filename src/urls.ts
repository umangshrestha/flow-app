
import hello from "@api/hello";
import topic from "@api/topic";
import auth from "@api/auth/urls";
import express from "express";

export default express.Router()
    .use('/hello', hello)
    .use('/topic', topic)
    .use('/auth', auth);
