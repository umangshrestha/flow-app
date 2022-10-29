import { CreateInstructorInput } from './create-instructor.input';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UpdateInstructorInput extends CreateInstructorInput {}
