import { DtoDescription } from '../../dto-description'
import { JsonapiObject, Relationship } from '../../jsonapi-object'
import { ManufacturerAttributes } from './manufacturer-attributes'

@DtoDescription({
  nameInUrl: 'manufacturers',
})
export class Manufacturer extends JsonapiObject<ManufacturerAttributes> {
  attributes: ManufacturerAttributes
  relationships?: { [key in ('mtSerieses')]?: Relationship }
  constructor(attributes: ManufacturerAttributes) {
    super(Manufacturer)
    this.attributes = attributes
  }
}
