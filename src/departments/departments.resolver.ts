import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DepartmentsService as Service } from './departments.service';
import { DepartmentEntity as Entity } from './entities/department.entity';
import { CreateDepartmentInput as CreateInput} from './dto/create-department.input';
import { UpdateDepartmentInput as UpdateInput} from './dto/update-department.input';
import { QueryInput } from 'src/shared/dto/query.input';

@Resolver(() => Entity)
export class DepartmentsResolver {
  constructor(private readonly service: Service) {}

  @Mutation(() => Entity)
  createDepartment(@Args('create') createInput: CreateInput) {
    return this.service.create(createInput);
  }

  @Query(() => [Entity], { name: 'departments' })
  findAll(@Args("query", { nullable: true }) query: QueryInput) {
    return this.service.findAll(query);
  }

  @Query(() => Entity, { name: 'department' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.service.findOne(id);
  }

  @Mutation(() => Entity)
  updateDepartment(@Args('update') updateInput: UpdateInput) {
    return this.service.update(updateInput);
  }

  @Mutation(() => Entity)
  removeDepartment(@Args('id', { type: () => Int }) id: number) {
    return this.service.remove(id);
  }
}
