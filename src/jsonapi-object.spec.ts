import { User } from './go2wheel/dto/user'

describe('jsonapi object.', () => {
  it('relationship.', () => {
    const jo = new User({ email: '' })
    jo.relationships = {
      unreads: { links: { self: 'a', related: 'b' } },
      followers: { links: { self: 'a', related: 'b' } },
      abc: undefined,
    }
    expect(jo.relationships.unreads.links.self).toBe('a')
  })

  it('from json to class instance.', () => {
    const nu = new User()
    const nus = JSON.stringify(nu)
    expect(nus).toContain('attributes')
    nu.attributes.email = 'jianglibo@gmail.com'
    const rjo = JSON.parse(JSON.stringify(nu))
    type t = User
    const u: User = rjo as t
    expect(u.attributes.email).toBe('jianglibo@gmail.com')
  })

  // start from urlnames, we get resource type and fixture location, send to client.
})
