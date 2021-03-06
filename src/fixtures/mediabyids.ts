import { Medium, MediumAttributes } from '../index'
import { ListBody } from '../list-body'

export const MEDIA_BY_IDS: ListBody<MediumAttributes, Medium> = {
  data: [
    {
      id: '524288',
      type: 'media',
      attributes: {
        createdAt: 1505531121810,
        size: 61,
        contentType: 'application/octet-stream',
        url: 'http://localhost:80/uploaded/e42413a752f64421b614102a9f0f1f71.js',
        originName: 'v.js',
        dtoAction: null,
        dtoApplyTo: null,
      },
      relationships: {
        creator: {
          links: {
            self: 'http://localhost/jsonapi/media/524288/relationships/creator',
            related: 'http://localhost/jsonapi/media/524288/creator',
          },
        },
        posts: {
          links: {
            self: 'http://localhost/jsonapi/media/524288/relationships/posts',
            related: 'http://localhost/jsonapi/media/524288/posts',
          },
        },
      },
      links: {
        self: 'http://localhost/jsonapi/media/524288',
      },
    },
    {
      id: '524289',
      type: 'media',
      attributes: {
        createdAt: 1505531121838,
        size: 3815,
        contentType: 'application/octet-stream',
        url: 'http://localhost:80/uploaded/91d024d7540d47b28d591cf230534f4e.jpg',
        originName: 'th.jpg',
        dtoAction: null,
        dtoApplyTo: null,
      },
      relationships: {
        creator: {
          links: {
            self: 'http://localhost/jsonapi/media/524289/relationships/creator',
            related: 'http://localhost/jsonapi/media/524289/creator',
          },
        },
        posts: {
          links: {
            self: 'http://localhost/jsonapi/media/524289/relationships/posts',
            related: 'http://localhost/jsonapi/media/524289/posts',
          },
        },
      },
      links: {
        self: 'http://localhost/jsonapi/media/524289',
      },
    },
  ],
  links: {
    first: 'http://localhost/jsonapi/media/?page[limit]=20&filter[media][id][EQ]=524288&filter[media][id][EQ]=524289',
    last: 'http://localhost/jsonapi/media/?page[limit]=20&filter[media][id][EQ]=524288&filter[media][id][EQ]=524289',
    next: null,
    prev: null,
  },
  meta: {
    totalResourceCount: 2,
  },
}
