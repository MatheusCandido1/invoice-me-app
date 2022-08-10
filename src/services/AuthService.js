import { post } from './axios';

class AuthService {
  async signIn(payload) {
    return post(`auth/sign-in`, payload)
  }
}

export default new AuthService();