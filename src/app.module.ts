import { Module } from '@nestjs/common';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { orderStateResolver } from './shared/interface/interface';
import { GraphQLError } from 'graphql';
import { HelloModule } from './hello/hello.module';
import { FacultysModule } from './facultys/facultys.module';
import { DepartmentsModule } from './departments/departments.module';
import { TagsModule } from './tags/tags.module';
import { InstructorsModule } from './instructors/instructors.module';
import { FormsModule } from './forms/forms.module';
import { FormSectionModule } from './form-section/form-section.module';
import { FlowsModule } from './flows/flows.module';
import { TopicsModule } from './topics/topics.module';


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
    HelloModule,
    FacultysModule,
    DepartmentsModule,
    TagsModule,
    TopicsModule,
    FormsModule,
    FormSectionModule,
    InstructorsModule,
    FlowsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
