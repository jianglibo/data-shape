import { Manufacturer, ManufacturerAttributes } from '../index'
import { SingleBody } from '../single-body'

export const MANUFACTURER_BODY: SingleBody<ManufacturerAttributes, Manufacturer> = {
  data: {
    id: '1277953',
    type: 'manufacturers',
    attributes: {
      createdAt: 1508803855674,
      foundTime: 1508803855674,
      nationality: 'Japan',
      founder: '',
      legend: 'hello. world.',
      name: 'kawasaki',
      logo: 'abc/aa.gif',
      slogan: '',
      websites: {
        en: 'https://www.kawasaki.com',
        zh: 'http://www.kawasaki-motors.cn',
      },
      dtoAction: null,
      dtoApplyTo: null,
    },
    relationships: {
      mtSerieses: {
        links: {
          self: 'http://localhost/jsonapi/manufacturers/1277953/relationships/mtSerieses',
          related: 'http://localhost/jsonapi/manufacturers/1277953/mtSerieses',
        },
      },
    },
    links: {
      self: 'http://localhost/jsonapi/manufacturers/1277953',
    },
  },
}
