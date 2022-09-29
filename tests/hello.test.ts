import request from "supertest";
import app from "../src/app";
import { ALLOWED_ORIGIN } from "@config/settings";
describe("API:Hello", () => {

    it("GET /hello", async () => {
        const result = await request(app).get("/hello");
        expect(result.statusCode).toEqual(200);
        expect(result.header["access-control-allow-origin"]).toBe(ALLOWED_ORIGIN);
        expect(result.body).toMatchObject({
            name: "Hello, World!"
        })
    })
})