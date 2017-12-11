import 'reflect-metadata'

import { Manufacturer } from './go2wheel/dto/manufacturer'
import { ManufacturerAttributes } from './go2wheel/dto/manufacturer-attributes'
import { SingleBody } from './single-body'

describe('singlebody', () => {
  it('should create singlebody', () => {
    const ji = new Manufacturer(new ManufacturerAttributes())
    const sb = new SingleBody<ManufacturerAttributes, Manufacturer>(ji)
    console.log('sb')
    console.log(sb)
  })
})
