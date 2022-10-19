import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FacultysService as Service } from './facultys.service';
import { Faculty } from './entities/faculty.entity';
import { CreateFacultyInput as CreateInput } from './dto/create-faculty.input';
import { UpdateFacultyInput as UpdateInput } from './dto/update-faculty.input';
import { QueryInput } from '../shared/dto/query.input';
import { UseFilters } from '@nestjs/common';
import { PrismaClientInitializationFilter } from 'src/prisma/filter/intiialization.filter';
import { PrismaClientKnownRequestFilter } from 'src/prisma/filter/known-request.filter';

@Resolver(() => Faculty)
export class FacultysResolver {
  constructor(private readonly service: Service) { }

  @Mutation(() => Faculty)
  createFaculty(@Args('create') createInput: CreateInput) {
    return this.service.create(createInput);
  }

  @Query(() => [Faculty], { name: 'facultys' })
  findAll(@Args("query", { nullable: true }) query: QueryInput) {
    return this.service.findAll(query);
  }

  @Query(() => Faculty, { name: 'faculty' })
  findOne(
    @Args('id', { type: () => Int }) id: number) {
    return this.service.findOne(id);
  }

  @Mutation(() => Faculty)
  @UseFilters(new PrismaClientKnownRequestFilter)
  updateFaculty(@Args('update') updateInput: UpdateInput) {
    return this.service.update(updateInput);
  }

  @Mutation(() => Faculty)
  @UseFilters(new PrismaClientKnownRequestFilter)
  removeFaculty(@Args('id', { type: () => Int }) id: number) {
    return this.service.remove(id);
  }
}
