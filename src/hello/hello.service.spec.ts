import { Test, TestingModule } from '@nestjs/testing';
import { HelloService as Service } from './hello.service';

describe('FacultysService', () => {
    let service: Service;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [Service],
        }).compile();

        service = module.get<Service>(Service);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('helloWorld should return "Hello,World"', () => {
        const output = service.helloWorld();
        const expected = "Hello, World!";
        expect(output).toBe(expected);
    });


    it.each(["a", "12312"])
        ("hello should return { name: Hello, %s }", (input) => {
            const output = service.hello(input);
            const expected = { name: `Hello, ${input}!` };
            expect(output).toMatchObject(expected);
        })
});
