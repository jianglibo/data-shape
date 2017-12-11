import { DtoDescription } from '../../dto-description'
import { JsonapiObject, Relationship } from '../../jsonapi-object'
import { RoleAttributes } from './role-attributes'

@DtoDescription({
  nameInUrl: 'roles',
})
export class Role extends JsonapiObject<RoleAttributes> {
  attributes: RoleAttributes
  relationships?: { [key in 'users']?: Relationship }
  constructor(attributes: RoleAttributes) {
    super(Role)
    this.attributes = attributes
  }
}
