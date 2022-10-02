import express from "express";
import swaggerUI from "swagger-ui-express";

import yaml from 'yamljs';
const SwaggerDocument =  yaml.load("src/doc/swagger.yaml");

export default express.Router()
    .use('/', swaggerUI.serve, swaggerUI.setup(SwaggerDocument))