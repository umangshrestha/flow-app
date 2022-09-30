import { TOPICS_LIST } from "@config/topics";
import request from "supertest";
import db from "@utils/dbconn";
import app from "../app";

describe("API:Topic", () => {

    beforeAll(() => {
        const createTopic = async (topic: any) => db.topic.create({ data: topic });
        const arr = TOPICS_LIST.map(createTopic);
        Promise.all(arr).catch(_ => { });
    })

    it("GET /topic", async () => {
        const result = await request(app).get("/topic");
        expect(result.statusCode).toEqual(200);
    })

    it.each`
    offset          | limit
    ${1}            | ${10}
    ${undefined}    | ${20}
    ${undefined}    | ${30}
    `("GET /topic offset=$offset&limit=$limit", async (query) => {
        const result = await request(app)
            .get("/topic")
            .query(query);
        expect(result.statusCode).toEqual(200);
        expect(result.body.length).toBe(query.limit || TOPICS_LIST.length);
    })

    it("POST /topic", async () => {
        let input: { id?: number, topic: string } = { topic: "apple" };
        let result = await request(app)
            .post("/topic")
            .send(input);

        let output = result.body;
        let id: number = output.id;
        expect(result.statusCode).toEqual(201);
        expect(output.topic).toEqual(input.topic);

        // POST /topic (duplicate)
        input = { id, topic: "apple" };

        result = await request(app)
            .post("/topic")
            .send(input);
        expect(result.statusCode).toEqual(422);
        expect(result.body).toMatchObject({
            error: "duplicate entry",
            code: 'P2002'
        });
    
        // PUT /topic
        input = { id, topic: "ball" };
        result = await request(app)
            .put(`/topic/${input.id}`)
            .send(input);
        
        output = result.body;
        expect(result.statusCode).toEqual(201);
        expect(result.body).toMatchObject(input);
       
        // DELETE /topic 
        result = await request(app)
            .delete(`/topic/${id}`);
        expect(result.statusCode).toEqual(201);
  
    })

    it("PUT /topic (doesnot exist)", async () => {
        const input = { id: 1909, topic: "zone" };

        let result = await request(app)
            .put(`/topic/${input.id}`);
        expect(result.statusCode).toEqual(422);
        expect(result.body).toMatchObject({
            error: "Record to update not found.",
            code: 'P2025'
        });
    })

    it("DELETE /topic (doesnot exist)", async () => {
        const input = { id: 1909, topic: "ball" };

        let result = await request(app)
            .delete(`/topic/${input.id}`);
        expect(result.statusCode).toEqual(422);
        expect(result.body).toMatchObject({
            error: "Record to delete does not exist.",
            code: 'P2025'
        });
    })

})