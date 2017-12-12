export const ROLE_BODY = {
  data: {
    id: '32768',
    type: 'roles',
    attributes: {
      createdAt: 1498722889975,
      name: 'ROLE_USER_T1',
      dtoAction: null,
      dtoApplyTo: null,
    },
    relationships: {
      users: {
        links: {
          self: 'http://localhost/jsonapi/roles/32768/relationships/users',
          related: 'http://localhost/jsonapi/roles/32768/users',
        },
      },
    },
    links: {
      self: 'http://localhost/jsonapi/roles/32768',
    },
  },
}
