import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { HelloService as Service } from './hello.service';
import { Hello } from './entities/hello.entity';

@Resolver(() => Hello)
export class HelloResolver {
  constructor(private readonly service: Service) { }

  @Query(() => Hello)
  hello(@Args('name') name: string) {
    return this.service.hello(name);
  }

  @Query(() => String)
  helloWorld() {
    return this.service.helloWorld();
  }
}
