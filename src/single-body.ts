import { AttributesBase, JsonapiObject } from './jsonapi-object'

export class SingleBody<E extends AttributesBase, T extends JsonapiObject<E>> {
  data: T
  links?: { self: string }

  constructor(jsob: T) {
    this.data = jsob
  }
}
