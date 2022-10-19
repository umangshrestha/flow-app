import { Module } from '@nestjs/common';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TopicsModule } from './topics/topics.module';
import { HelloModule } from './hello/hello.module';
import { FacultysModule } from './facultys/facultys.module';
import { orderStateResolver } from './shared/interface/interface';
import { GraphQLError } from 'graphql';
import { Prisma } from '@prisma/client';


@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join("graphql", 'schema.gql'),
      resolvers: {
        Order: orderStateResolver
      },
      introspection: true,
      cors: {
        origin: process.env.ALLOWED_ORIGIN || "*",
        credentials: true
      },
      context: ({ req }) => ({ req }),
      formatError: (error: GraphQLError) => {
        console.error('error', error.extensions.exception)
        return error
      },
    }),
    TopicsModule,
    HelloModule,
    FacultysModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
