import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('hello', () => {
    it("/helloWorld", () => {
      return request(app.getHttpServer())
        .post('/graphql')
        .send({ query: `{helloWorld}` })
        .expect(200)
        .expect((res) => {
          expect(res.body.data).toMatchObject({ helloWorld: "Hello, World!" })
        })
    });


    it.each(["a", "asdsada", "zzz"])(`/hello(name:"%s")`, (input) => {
      return request(app.getHttpServer())
        .post('/graphql')
        .send({
          query: `{
          hello(name: \"${input}\"){
            name
          }
        }`})
        .expect(200)
        .expect((res) => {
          expect(res.body.data).toMatchObject({
            hello: { name: `Hello, ${input}!` }
          })
        })
    });


    // missing quotes
    it.each(["a", "asdsada", "zzz"])(`/hello(name:%s) should send 400`, (input) => {
      return request(app.getHttpServer())
        .post('/graphql')
        .send({
          query: `{
            hello(name:${input}) {
              name
            }
          }`
        })
        .expect(400)
    })
  })


  describe("", () => {
    it.each(['Administration', 'Human', 'Inter-Faculty', 'Resources', 'HK', 'Student', 'Nursing', 'Services', 'Office', 'Graduate', 'CTL', 'Accessibility', 'Programs', 'Libraries', 'CELD', 'Leddy', 'Faculty', '-', 'GLIER', 'Dentistry', 'of', 'Education', 'FAHSS', 'faculty', 'Engineering', 'Financial', 'Quality', 'Budgets', 'Other', 'Law', 'Assurance', 'Medicine', 'Studies', 'Business', 'N/A', 'Provost', 'and', 'Information', 'Science', 'And', 'Library'])
      ("/faculty()", (input) => {
        return request(app.getHttpServer())
          .post('/graphql')
          .send({
            query: `{
              createFaculty(create:{faculty: \"${input}\"}) {
                faculty
              }
            }`
          }).expect(200)
          .expect((res) => {
            expect(res.body.data).toMatchObject({
              faculty: { faculty: input }
            })
          })
      })
  })
});
