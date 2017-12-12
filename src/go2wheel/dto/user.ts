import { DtoDescription } from '../../dto-description'
import { JsonapiObject, Relationship } from '../../jsonapi-object'
import { UserAttributes } from './user-attributes'

@DtoDescription({
  nameInUrl: 'users',
})
export class User extends JsonapiObject<UserAttributes> {
  attributes: UserAttributes
  relationships?: { [key in 'unreads' | 'followers' | 'abc']: Relationship | undefined }
  constructor(attributes: UserAttributes) {
    super(User)
    this.attributes = attributes
  }
}
