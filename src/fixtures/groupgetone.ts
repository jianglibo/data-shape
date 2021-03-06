export const GROUOP_ONE = {
  data: {
    id: '294912',
    type: 'groups',
    attributes: {
      openToAll: true,
      createdAt: 1499650663034,
      name: 'agroup',
      description: 'agroupdescription',
      thumbUrl: 'abc',
      dtoAction: null,
      dtoApplyTo: null,
    },
    relationships: {
      creator: {
        links: {
          self: 'http://localhost/jsonapi/groups/294912/relationships/creator',
          related: 'http://localhost/jsonapi/groups/294912/creator',
        },
      },
      members: {
        links: {
          self: 'http://localhost/jsonapi/groups/294912/relationships/members',
          related: 'http://localhost/jsonapi/groups/294912/members',
        },
      },
      receivedPosts: {
        links: {
          self: 'http://localhost/jsonapi/groups/294912/relationships/receivedPosts',
          related: 'http://localhost/jsonapi/groups/294912/receivedPosts',
        },
      },
    },
    links: {
      self: 'http://localhost/jsonapi/groups/294912',
    },
  },
}
