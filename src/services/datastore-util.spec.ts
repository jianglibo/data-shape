import { LoginAttempt } from '../go2wheel/dto/login-attempt'
import { DatastoreUtil } from './datastore-util'

describe('DatastoreUtilService', () => {
  it('should get right list url.', () => {
    const url = DatastoreUtil.getListUrl(LoginAttempt, '/jsonapi/')
    expect(url).toBe('/jsonapi/loginAttempts')
  })

  it('should get right url with page.', () => {
    let url = DatastoreUtil.getListUrl(LoginAttempt, '/jsonapi/', { offset: 0, limit: 20 })
    expect(url).toBe('/jsonapi/loginAttempts?page[offset]=0&page[limit]=20')

    url = DatastoreUtil.getListUrl(LoginAttempt, '/jsonapi/', { number: 0, size: 20 })
    expect(url).toBe('/jsonapi/loginAttempts?page[number]=0&page[size]=20')

    url = DatastoreUtil.getListUrl(LoginAttempt, '/jsonapi/', { cursor: 555 })
    expect(url).toBe('/jsonapi/loginAttempts?page[cursor]=555')

    url = DatastoreUtil.getListUrl(
      LoginAttempt,
      '/jsonapi/',
      undefined,
      [{ fname: 'username', direction: 'desc' }, { fname: 'password', direction: 'asc' }],
      [{ fname: 'username', value: 'a' }]
    )
    expect(url).toBe('/jsonapi/loginAttempts?sort=-username,password&filter[username]=a')

    url = DatastoreUtil.getListUrl(
      LoginAttempt,
      '/jsonapi/',
      undefined,
      [{ fname: 'username', direction: 'desc' }, { fname: 'password', direction: 'asc' }],
      { fname: 'username', value: 'a' }
    )
    expect(url).toBe('/jsonapi/loginAttempts?sort=-username,password&filter[username]=a')

    url = DatastoreUtil.getListUrl(LoginAttempt, '/jsonapi/', undefined, { fname: 'username', direction: 'desc' }, [
      { fname: 'username', value: 'a' },
    ])
    expect(url).toBe('/jsonapi/loginAttempts?sort=-username&filter[username]=a')

    url = DatastoreUtil.getListUrl(
      LoginAttempt,
      '/jsonapi/',
      undefined,
      { fname: 'username', direction: 'desc' },
      { fname: 'username', value: 'a' }
    )
    expect(url).toBe('/jsonapi/loginAttempts?sort=-username&filter[username]=a')
  })

  it('should get right single url.', () => {
    const pn = 55
    let url = DatastoreUtil.getSingleUrl(LoginAttempt, pn, '/jsonapi/')
    expect(url).toBe('/jsonapi/loginAttempts/55')

    const la = new LoginAttempt({ username: '', password: '' })
    la.id = '55'
    url = DatastoreUtil.getSingleUrl(la, '/jsonapi/')
    expect(url).toBe('/jsonapi/loginAttempts/55')
  })

  it('truthy', () => {
    // expect(!!undefined).toBe(false)
    // expect(!![]).toBe(true)
    // expect(null === undefined).toBe(true)
    // // tslint:disable-next-line:prefer-const
    // let a: any
    // expect(a == null).toBe(true)
    // const b = 1 && true
    // expect(b).toBe(true)
    // // tslint:disable-next-line:no-string-literal
    // expect({}['abc'] === undefined).toBe(true)
    // // tslint:disable-next-line:no-string-literal
    // expect({ abc: undefined }['abc'] === undefined).toBe(true)
    // // tslint:disable-next-line:no-string-literal
    // expect({ abc: undefined }['abc'] === null).toBe(true)
    // // tslint:disable-next-line:no-string-literal
    // expect({ abc: null }['abc'] === null).toBe(true)
  })
  it('number switch', () => {
    let key: number
    let v: string
    key = 1
    switch (key) {
      case 0:
        v = '0'
        break
      case 1:
        v = '1'
        break
      default:
        v = '2'
        break
    }
    expect(v).toBe('1')
  })
})
