import { DtoDescription } from '../../dto-description'
import { JsonapiObject } from '../../jsonapi-object'
import { PostAttributes } from './post-attributes'

@DtoDescription({
  nameInUrl: 'posts',
})
export class Post extends JsonapiObject<PostAttributes> {
  attributes: PostAttributes
  relationships?: { [key in ('sharedUsers' | 'creator' | 'sharedGroups' | 'media')]?: Relationship }

  constructor(attributes: PostAttributes) {
    super(Post)
    this.attributes = attributes
  }
}
