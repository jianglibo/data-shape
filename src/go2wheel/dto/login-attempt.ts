import { DtoDescription } from '../../dto-description'
import { JsonapiObject } from '../../jsonapi-object'
import { LoginAttemptAttributes } from './login-attempt-attributes'

@DtoDescription({
  nameInUrl: 'loginAttempts',
})
export class LoginAttempt extends JsonapiObject<LoginAttemptAttributes> {
  attributes: LoginAttemptAttributes
  constructor(attributes: LoginAttemptAttributes) {
    super(LoginAttempt)
    this.attributes = attributes
  }
}
