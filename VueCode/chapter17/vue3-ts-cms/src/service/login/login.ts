import hyRequest from '../index'
import type { IAccount, ILoginResult } from './types'
import type { IDataType } from '../types'

enum LoginAPI {
  AccountLogin = '/login'
}

export function accountLoginRequest(account: IAccount) {
  return hyRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}
