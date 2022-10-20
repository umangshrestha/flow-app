import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ParentTopicsService as Service} from './parent-topics.service';
import { ParentTopic } from './entities/parent-topic.entity';
import { CreateParentTopicInput as CreateInput} from './dto/create-parent-topic.input';
import { UpdateParentTopicInput as UpdateInput} from './dto/update-parent-topic.input';
import { QueryInput } from '../shared/dto/query.input';

@Resolver(() => ParentTopic)
export class ParentTopicsResolver {
  constructor(private readonly service: Service) {}

  @Mutation(() => ParentTopic)
  createParentTopic(@Args('create') createInput: CreateInput) {
    return this.service.create(createInput);
  }

  @Query(() => [ParentTopic], { name: 'parentTopics' })
  findAll(@Args("query", { nullable: true }) query: QueryInput) {
    return this.service.findAll(query);
  }

  @Query(() => ParentTopic, { name: 'parentTopic' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.service.findOne(id);
  }

  @Mutation(() => ParentTopic)
  updateParentTopic(@Args('update') updateInput: UpdateInput) {
    return this.service.update(updateInput);
  }

  @Mutation(() => ParentTopic)
  removeParentTopic(@Args('id', { type: () => Int }) id: number) {
    return this.service.remove(id);
  }
}
