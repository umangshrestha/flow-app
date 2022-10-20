import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { gql } from '@apollo/client';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });


  it("/helloWorld", () => {
    const query = `{
        helloWorld
      }`;
    return request(app.getHttpServer())
      .post('/graphql')
      .send({ query })
      .expect(200)
      .expect((res) => {
        expect(res.body.data).toMatchObject({ helloWorld: "Hello, World!" })
      })
  });


  it.each(["a", "asdsada", "zzz"])(`/hello(name:"%s")`, (input) => {
    const query = `{
        hello(name: \"${input}\"){
          name
        }
      }`
    return request(app.getHttpServer())
      .post('/graphql')
      .send({ query })
      .expect(200)
      .expect((res) => {
        expect(res.body.data).toMatchObject({
          hello: { name: `Hello, ${input}!` }
        })
      })
  });


  // missing quotes
  it.each(["a", "asdsada", "zzz"])(`/hello(name:%s) should send 400`, (input) => {
    const query = `{
        hello(name:${input}) {
          name
        }
      }`
    return request(app.getHttpServer())
      .post('/graphql')
      .send({ query })
      .expect(400)
  })

  let id = 0;
  it.each(['Administration', 'Human', 'Inter-Faculty', 'Resources', 'HK', 'Student', 'Nursing', 'Services', 'Office', 'Graduate', 'CTL', 'Accessibility', 'Programs', 'Libraries', 'CELD', 'Leddy', 'Faculty', '-', 'GLIER', 'Dentistry', 'of', 'Education', 'FAHSS', 'faculty', 'Engineering', 'Financial', 'Quality', 'Budgets', 'Other', 'Law', 'Assurance', 'Medicine', 'Studies', 'Business', 'N/A', 'Provost', 'and', 'Information', 'Science', 'And', 'Library'])
    ("/createfaculty()", (input) => {
      // create
      let query = `mutation {
          createFaculty(create: {faculty: "${input}"}) {
            id
            faculty
          }
        }`
      request(app.getHttpServer())
        .post('/graphql')
        .send({ query })
        .expect(200)
        .expect((res) => {
          id = res.body.data.createFaculty.id;
          expect(res.body.data.createFaculty.faculty).toBe(input)
        })

      // find 
      query = `
      faculty(id:${id}){
        faculty
      }`
      request(app.getHttpServer())
        .post('/graphql')
        .send({ query })
        .expect(200)
        .expect((res) => {
          expect(res.body.data.createFaculty.faculty).toBe(input)
        })

      input = `${input}-${input}`
      //  update
      query = `mutation {
        updateFaculty(update: {id: ${id}faculty: "${input}"}) {
          faculty
        }
      }`
      request(app.getHttpServer())
        .post('/graphql')
        .send({ query })
        .expect(200)
        .expect((res) => {
          expect(res.body.data.createFaculty.faculty).toBe(input)
        })

    })
});
