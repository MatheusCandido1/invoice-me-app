import { post, get, put, destroy } from './axios';

const PREFIX = 'accounts'

class AccountService {
  async createAccount(payload) {
    return post(PREFIX, payload)
  }

  async updateAccount(payload) {
    return put(PREFIX+`/${payload.id}`, payload)
  }

  async listAccounts() {
    return get(PREFIX)
  }

  async deleteAccount(payload) {
    return destroy(PREFIX+`/${payload.id}`)
  }
}

export default new AccountService();