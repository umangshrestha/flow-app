import { Resolver, Mutation, Args, Int } from '@nestjs/graphql';
import { FormSectionService as Service } from './form-section.service';
import { FormSection } from './entities/form-section.entity';
import { UpdateFormSectionInput as UpdateInput } from './dto/update-form-section.input';

@Resolver(() => FormSection)
export class FormSectionResolver {
  constructor(private readonly service: Service) { }

  @Mutation(() => FormSection)
  updateFormSection(@Args('update') updateInput: UpdateInput) {
    return this.service.update(updateInput);
  }

  @Mutation(() => FormSection)
  removeFormSection(@Args('id', { type: () => Int }) id: number) {
    return this.service.remove(id);
  }
}
