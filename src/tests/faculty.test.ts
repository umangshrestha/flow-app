import db from "@utils/dbconn";
import request from "supertest";
import app from "../app";

describe("API:Faculty", () => {

    const FACULTY_LIST = require("./data/faculty.json");

    beforeAll(() => {
        const createTopic = async (topic: any) => db.faculty.create({ data: topic });
        const arr = FACULTY_LIST.map(createTopic);
        Promise.all(arr).catch(_ => { });
    })

    it("GET /faculty", async () => {
        const result = await request(app).get("/faculty");
        expect(result.statusCode).toEqual(200);
    })

    it.each`
    offset          | limit
    ${1}            | ${10}
    ${undefined}    | ${20}
    ${undefined}    | ${30}
    `("GET /faculty offset=$offset&limit=$limit", async (query) => {
        const result = await request(app)
            .get("/faculty")
            .query(query);
        expect(result.statusCode).toEqual(200);
        expect(result.body.length).toBe(query.limit);
    })

    it("PUT /faculty (doesnot exist)", async () => {
        const input = { id: 1909 };

        let result = await request(app)
            .put(`/faculty/${input.id}`);
        expect(result.statusCode).toEqual(422);
        expect(result.body).toMatchObject({
            error: "Record to update not found.",
            code: 'P2025'
        });
    })

    it("DELETE /faculty (doesnot exist)", async () => {
        const input = { id: 1909};

        let result = await request(app)
            .delete(`/faculty/${input.id}`);
        expect(result.statusCode).toEqual(422);
        expect(result.body).toMatchObject({
            error: "Record to delete does not exist.",
            code: 'P2025'
        });
    })

})