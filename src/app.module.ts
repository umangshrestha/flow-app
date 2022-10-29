import { Module } from '@nestjs/common';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { orderStateResolver } from './shared/interface/interface';
import { GraphQLError } from 'graphql';
import { HelloModule } from './hello/hello.module';
import { TopicsModule } from './topics/topics.module';
import { FacultysModule } from './facultys/facultys.module';
import { DepartmentsModule } from './departments/departments.module';
import { ParentTopicsModule } from './parent-topics/parent-topics.module';
import { FormsModule } from './forms/forms.module';
import { FormSectionModule } from './form-section/form-section.module';
import { InstructorsModule } from './instructors/instructors.module';


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
    InstructorsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
