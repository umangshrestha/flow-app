import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TagsService as Service} from './tags.service';
import { TagEntity as Entity } from './entities/tag.entity';
import { UpdateTagInput as UpdateInput} from './dto/update-tag.input';
import { QueryInput } from '../shared/dto/query.input';

@Resolver(() => Entity)
export class TagsResolver {
  constructor(private readonly service: Service) {}

  @Mutation(() => Entity)
  createTag(@Args('tag') tag: string) {
    return this.service.create(tag);
  }
  @Query(() => [Entity], { name: 'tags' })
  findAll(@Args("query", { nullable: true }) query: QueryInput) {
    return this.service.findAll(query);
  }

  @Query(() => Entity, { name: 'tag' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.service.findOne(id);
  }

  @Mutation(() => Entity)
  updateTag(@Args('update') updateInput: UpdateInput) {
    return this.service.update(updateInput);
  }

  @Mutation(() => Entity)
  removeTag(@Args('id', { type: () => Int }) id: number) {
    return this.service.remove(id);
  }
}
