import { Test, TestingModule } from '@nestjs/testing';
import { HelloResolver as Resolver } from './hello.resolver';
import { HelloService as Service } from './hello.service';

describe('FacultysResolver', () => {
    let resolver: Resolver;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [Resolver, Service],
        }).compile();

        resolver = module.get<Resolver>(Resolver);
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });

    it('helloWorld should return "Hello,World"', () => {
        const output = resolver.helloWorld();
        const expected = "Hello, World!";
        expect(output).toBe(expected);
    });


    it.each([
        "a",
        "12312"
    ])("hello should return { name: Hello, %s }", (input) => {
        const output = resolver.hello(input);
        const expected = { name: `Hello, ${input}!` };
        expect(output).toMatchObject(expected);
    })
});
