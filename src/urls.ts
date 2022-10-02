
import hello from "@api/hello";
import topic from "@api/topic";
import auth from "@api/auth/urls";
import query from "@api/query";
import express from "express";
import faculty from "@api/faculty";
import doc from "@doc/doc";

export default express.Router()
    .use('/api-doc', doc)
    .use('/hello', hello)
    .use('/topic', topic)
    .use('/faculty', faculty)
    .use('/query', query)
    .use('/auth', auth);
    
