import { Module } from '@nestjs/common';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TopicsModule } from './topics/topics.module';
import { HelloModule } from './hello/hello.module';
import { FacultysModule } from './facultys/facultys.module';
import { orderStateResolver } from 'shared/interface/interface';


@Module({
  imports:  [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join("graphql", 'schema.gql'),
      resolvers: {
        Order: orderStateResolver
      }
    }),
    TopicsModule,
    HelloModule,
    FacultysModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
