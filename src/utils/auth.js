// 在本地存储token
const TOKEN_KEY = 'token'
// 设置token
export const setUser = (data) => {
  window.localStorage.setItem(TOKEN_KEY, JSON.stringify(data))
}
// 获取token
export const getUser = (data) => {
  window.JSON.parse(localStorage.getItem(TOKEN_KEY))
}
// 移除token
export const removerUser = (data) => {
  window.localStorage.removeItem(TOKEN_KEY)
}
