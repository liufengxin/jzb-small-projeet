import MyHttp from './request.js';
//正式接口
const HOST = "";

const ALL_API = {
  getUserInfo: { //openId登录
    method: 'POST',
    url: HOST + 'user/list'
  },
  addUserUnionId: {
    method: 'POST',
    url: 'user/addUserUnionId'
  }
}
const Api = new MyHttp(ALL_API);

export default Api;