import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ParentTopicsService as Service} from './parent-topics.service';
import { ParentTopicEntity as Entity } from './entities/parent-topic.entity';
import { CreateParentTopicInput as CreateInput} from './dto/create-parent-topic.input';
import { UpdateParentTopicInput as UpdateInput} from './dto/update-parent-topic.input';
import { QueryInput } from '../shared/dto/query.input';

@Resolver(() => Entity)
export class ParentTopicsResolver {
  constructor(private readonly service: Service) {}

  @Mutation(() => Entity)
  createParentTopic(@Args('create') createInput: CreateInput) {
    return this.service.create(createInput);
  }

  @Query(() => [Entity], { name: 'parentTopics' })
  findAll(@Args("query", { nullable: true }) query: QueryInput) {
    return this.service.findAll(query);
  }

  @Query(() => Entity, { name: 'parentTopic' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.service.findOne(id);
  }

  @Mutation(() => Entity)
  updateParentTopic(@Args('update') updateInput: UpdateInput) {
    return this.service.update(updateInput);
  }

  @Mutation(() => Entity)
  removeParentTopic(@Args('id', { type: () => Int }) id: number) {
    return this.service.remove(id);
  }
}
