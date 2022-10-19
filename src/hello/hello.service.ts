import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {
  hello(name: string) {
    return { name: `Hello, ${name}!` };
  }

  helloWorld() {
    return "Hello, World!";
  }
}
