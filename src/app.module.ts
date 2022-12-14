import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { LogRequestMiddleWare } from './shared/logger/log-request.middleware';
import { UsersModule } from './users/users.module';
import { FacultysModule } from './facultys/facultys.module';
import { DepartmentsModule } from './departments/departments.module';
import { InstructorsModule } from './instructors/instructors.module';
import { TopicsModule } from './topics/topics.module';
import { TagsModule } from './tags/tags.module';
import { FlowsModule } from './flows/flows.module';
import { FormsModule } from './forms/forms.module';


@Module({
  imports: [AuthModule,
  UsersModule,
  FacultysModule,
  DepartmentsModule,
  InstructorsModule,
  TopicsModule,
  TagsModule,
  FlowsModule,
  FormsModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LogRequestMiddleWare).forRoutes('*');
  }
 }
