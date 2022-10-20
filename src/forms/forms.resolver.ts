import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FormsService as Service} from './forms.service';
import { Form } from './entities/form.entity';
import { CreateFormInput  as CreateInput} from './dto/create-form.input';
import { UpdateFormInput as UpdateInput } from './dto/update-form.input';
import { QueryInput } from 'src/shared/dto/query.input';

@Resolver(() => Form)
export class FormsResolver {
  constructor(private readonly service: Service) {}

  @Mutation(() => Form)
  createForm(@Args('createFormInput') createInput: CreateInput) {
    return this.service.create(createInput);
  }

  @Query(() => [Form], { name: 'forms' })
  findAll(@Args("query", { nullable: true }) query: QueryInput) {
    return this.service.findAll(query);
  }

  @Query(() => Form, { name: 'form' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.service.findOne(id);
  }

  @Mutation(() => Form)
  updateForm(@Args('update') updateInput: UpdateInput) {
    return this.service.update(updateInput);
  }

  @Mutation(() => Form)
  removeForm(@Args('id', { type: () => Int }) id: number) {
    return this.service.remove(id);
  }
}
