// 处理用户相关api请求
import request from '@/utils/request.js'
// 登陆
export const login = ({ mobile, code }) => {
  return request({
    method: 'post',
    url: '/app/v1_0/authorizations',
    data: {
      mobile,
      code
    }
  })
}
