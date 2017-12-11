import { User } from './go2wheel/dto/user'

describe('jsonapi object.', () => {
  it('relationship.', () => {
    const jo = new User({ email: '' })
    jo.relationships = {
      unreads: { links: { self: 'a', related: 'b' } },
      followers: { links: { self: 'a', related: 'b' } },
    }
    expect(jo.relationships.unreads.links.self).toBe('a')
  })
  // tslint:disable-next-line:no-empty
  it('attributes.', () => {})
})
