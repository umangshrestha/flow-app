import { Module } from '@nestjs/common';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TopicsModule } from './topics/topics.module';
import { HelloModule } from './hello/hello.module';
import { FacultysModule } from './facultys/facultys.module';
import { orderStateResolver } from './shared/interface/interface';
import { GraphQLError } from 'graphql';
import { DepartmentsModule } from './departments/departments.module';
import { ParentTopicsModule } from './parent-topics/parent-topics.module';
import { FormsModule } from './forms/forms.module';
import { FormSectionModule } from './form-section/form-section.module';


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
        if (process.env.NODE_ENV === "developement") {
          console.error('error', error.extensions.exception)
        }
        return error
      },
    }),
    TopicsModule,
    HelloModule,
    FacultysModule,
    DepartmentsModule,
    ParentTopicsModule,
    FormsModule,
    FormSectionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
