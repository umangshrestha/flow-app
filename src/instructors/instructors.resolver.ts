import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { InstructorsService } from './instructors.service';
import { Instructor } from './entities/instructor.entity';
import { CreateInstructorInput } from './dto/create-instructor.input';
import { UpdateInstructorInput } from './dto/update-instructor.input';

@Resolver(() => Instructor)
export class InstructorsResolver {
  constructor(private readonly instructorsService: InstructorsService) {}

  @Mutation(() => Instructor)
  createInstructor(@Args('createInstructorInput') createInstructorInput: CreateInstructorInput) {
    return this.instructorsService.create(createInstructorInput);
  }

  @Query(() => [Instructor], { name: 'instructors' })
  findAll() {
    return this.instructorsService.findAll();
  }

  @Query(() => Instructor, { name: 'instructor' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.instructorsService.findOne(id);
  }

  @Mutation(() => Instructor)
  updateInstructor(@Args('updateInstructorInput') updateInstructorInput: UpdateInstructorInput) {
    return this.instructorsService.update(updateInstructorInput.id, updateInstructorInput);
  }

  @Mutation(() => Instructor)
  removeInstructor(@Args('id', { type: () => Int }) id: number) {
    return this.instructorsService.remove(id);
  }
}
