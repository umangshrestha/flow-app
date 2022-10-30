import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FacultysService as Service } from './facultys.service';
import { FacultyEntity as Entity } from './entities/faculty.entity';
import { QueryInput } from '../shared/dto/query.input';
import { UseFilters } from '@nestjs/common';
import { PrismaClientKnownRequestFilter } from '../prisma/filter/known-request.filter';
import { UpdateFacultyInput as UpdateInput } from './dto/update-faculty.input';


@Resolver(() => Entity)
export class FacultysResolver {
  constructor(private readonly service: Service) { }

  @Mutation(() => Entity)
  createFaculty(
    @Args("faculty") faculty: string) {
    return this.service.create(faculty);
  }

  @Query(() => [Entity], { name: 'facultys' })
  findAll(
    @Args("query", { nullable: true }) query: QueryInput) {
    return this.service.findAll(query);
  }

  @Query(() => Entity, { name: 'faculty' })
  findOne(
    @Args('id', { type: () => Int }) id: number) {
    return this.service.findOne(id);
  }

  @Mutation(() => Entity)
  @UseFilters(new PrismaClientKnownRequestFilter)
  updateFaculty(
    @Args('update') update: UpdateInput) {
    return this.service.update(update);
  }

  @Mutation(() => Entity)
  @UseFilters(new PrismaClientKnownRequestFilter)
  removeFaculty(
    @Args('id', { type: () => Int }) id: number) {
    return this.service.remove(id);
  }
}
