import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { InstructorsService as Service } from './instructors.service';
import { InstructorEntity as Entity } from './entities/instructor.entity';
import { CreateInstructorInput as CreateInput } from './dto/create-instructor.input';
import { UpdateInstructorInput as UpdateInput } from './dto/update-instructor.input';
import { QueryInput } from 'src/shared/dto/query.input';

@Resolver(() => Entity)
export class InstructorsResolver {
  constructor(private readonly service: Service) { }

  @Mutation(() => Entity)
  createInstructor(@Args('create') createInput: CreateInput) {
    return this.service.create(createInput);
  }

  @Query(() => [Entity], { name: 'instructors' })
  findAll(@Args("query", { nullable: true }) query: QueryInput) {
    return this.service.findAll(query);
  }

  @Query(() => Entity, { name: 'instructor' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.service.findOne(id);
  }

  @Mutation(() => Entity)
  updateInstructor(@Args('update') updateInput: UpdateInput) {
    return this.service.update(updateInput);
  }

  @Mutation(() => Entity)
  removeInstructor(@Args('id', { type: () => ID }) id: string) {
    return this.service.remove(id);
  }
}
