import 'reflect-metadata'
import { DtoDescriptionKey } from '../../dto-description'
import { LoginAttempt } from './login-attempt'

describe('Dto annotations', () => {
  it('class annotations', () => {
    const an: any = Reflect.getMetadata(DtoDescriptionKey, LoginAttempt) as { nameInUrl: string }
    expect(an.nameInUrl).toBe('loginAttempts')
  })
})
