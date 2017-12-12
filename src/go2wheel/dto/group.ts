import { DtoDescription } from '../../dto-description'
import { JsonapiObject, Relationship } from '../../jsonapi-object'
import { GroupAttributes } from './group-attributes'

@DtoDescription({
  nameInUrl: 'groups',
})
export class Role extends JsonapiObject<GroupAttributes> {
  attributes: GroupAttributes
  relationships?: { [key in 'creator' | 'members' | 'receivedPosts']: Relationship }

  constructor(attributes: GroupAttributes) {
    super(Role)
    this.attributes = attributes
  }
}
