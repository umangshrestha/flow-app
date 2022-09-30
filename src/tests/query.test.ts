import request from "supertest";
import app from "../app";

describe("API:Query", () => {

    it("GET /query", async () => {
        const result = await request(app).get("/query");
        expect(result.statusCode).toEqual(200);
        console.log(result)
    })
})