export const GROUPS_BODY = {
  data: [
    {
      id: '262144',
      type: 'groups',
      attributes: {
        openToAll: true,
        createdAt: 1505352865229,
        name: 'agroup',
        description: 'agroupdescription',
        thumbUrl: 'abc',
        dtoAction: null,
        dtoApplyTo: null,
      },
      relationships: {
        creator: {
          links: {
            self: 'http://localhost/jsonapi/groups/262144/relationships/creator',
            related: 'http://localhost/jsonapi/groups/262144/creator',
          },
        },
        members: {
          links: {
            self: 'http://localhost/jsonapi/groups/262144/relationships/members',
            related: 'http://localhost/jsonapi/groups/262144/members',
          },
        },
        receivedPosts: {
          links: {
            self: 'http://localhost/jsonapi/groups/262144/relationships/receivedPosts',
            related: 'http://localhost/jsonapi/groups/262144/receivedPosts',
          },
        },
      },
      links: {
        self: 'http://localhost/jsonapi/groups/262144',
      },
    },
  ],
  links: {
    first: 'http://localhost/jsonapi/groups/?page[limit]=20',
    last: 'http://localhost/jsonapi/groups/?page[limit]=20',
    next: null,
    prev: null,
  },
  meta: {
    totalResourceCount: 1,
  },
}
