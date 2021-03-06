export const APPROVE_BODY = {
  data: {
    id: '196608',
    type: 'approves',
    attributes: {
      createdAt: 1498115964142,
      targetId: 196608,
      targetType: 'com.jianglibo.wx.domain.BootGroup',
      state: 'PENDING',
      dtoAction: null,
      descriptionTpl: null,
      dtoApplyTo: null,
    },
    relationships: {
      requester: {
        data: {
          id: '196608',
          type: 'users',
        },
        links: {
          self: 'http://localhost/jsonapi/approves/196608/relationships/requester',
          related: 'http://localhost/jsonapi/approves/196608/requester',
        },
      },
      receiver: {
        data: {
          id: '196609',
          type: 'users',
        },
        links: {
          self: 'http://localhost/jsonapi/approves/196608/relationships/receiver',
          related: 'http://localhost/jsonapi/approves/196608/receiver',
        },
      },
    },
    links: {
      self: 'http://localhost/jsonapi/approves/196608',
    },
  },
  included: [
    {
      id: '196608',
      type: 'users',
      links: {
        self: 'http://localhost/jsonapi/users/196608',
      },
    },
    {
      id: '196609',
      type: 'users',
      links: {
        self: 'http://localhost/jsonapi/users/196609',
      },
    },
  ],
}
