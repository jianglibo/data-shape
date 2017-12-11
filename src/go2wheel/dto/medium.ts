import { DtoDescription } from '../../dto-description'
import { JsonapiObject, Relationship } from '../../jsonapi-object'
import { MediumAttributes } from './medium-attributes'

@DtoDescription({
  nameInUrl: 'media',
})
export class Medium extends JsonapiObject<MediumAttributes> {
  attributes: MediumAttributes
  relationships?: { [key in ('creator' | 'posts')]?: Relationship }

  constructor(attributes: MediumAttributes) {
    super(Medium)
    this.attributes = attributes
  }
}
