import { IS_LOGIN, IS_LOGOUT,  } from './types'

export const isLogin = () => {
  return {
    type: IS_LOGIN,
  }
}
export const isLogout = () => {
  return {
    type: IS_LOGOUT,
  }
}