import Axios from 'axios'
import qs from 'qs'

let HTTP = Axios.create({
    baseURL: "https://kong.gbicom.com:8443/user",
    timeout: 10000,
    responseType: 'json',
    headers: {
        'apikey': "ZlEqSzeQo1xEo0W3Rqh7t3x8d77UwR3O",
        'Content-Type': 'application/x-www-form-urlencoded',
    },
})
export default {
    //获取注册token
    getRegToken(params) {
        return HTTP.get('/user/reg/token', {
            params
        })
    },
    //图片验证码
    postRegcaptcha(token, captcha) {
        return HTTP.post('user/reg/verifycaptcha', qs.stringify({
            'token': token,
            'captcha': captcha
        }))
    },
    //注册
    postRegister(tel, password, token, captcha, smscode) {
        return HTTP.post('/user/reg/register', qs.stringify({
            'tel': tel,
            'password': password,
            'token': token,
            'captcha': captcha,
            'smscode': smscode,
            'source': 1
        }))
    },
    //获取登录token
    getLogToken(params) {
        return HTTP.get('user/login/token', {
            params
        })
    },
    //登录请求
    postLog(tel, password, captcha, token) {
        return HTTP.post('user/login/login', qs.stringify({
            'tel': tel,
            'password': password,
            'captcha': captcha,
            'token': token
        }))
    },
    //短信登录
    postLogSms(tel, smscode, captcha, token) {
        return HTTP.post('user/login/smslogin', qs.stringify({
            'tel': tel,
            'smscode': smscode,
            'captcha': captcha,
            'token': token
        }))
    },
    //找回密码 临时token
    getSecToken(params) {
        return HTTP.get('user/security/token', {
            params
        })
    },
    //核对验证码
    postSeccaptcha(username, token, captcha) {
        return HTTP.post('user/security/checkuser', qs.stringify({
            'username': username,
            'token': token,
            'captcha': captcha
        }))
    },
    //手机验证
    postSec(tel, token, mscode, captcha) {
        return HTTP.post('user/security/security', qs.stringify({
            'tel': tel,
            'token': token,
            'smscode': mscode,
            'captcha': captcha
        }))
    },
    //修改密码
    postSecpass(tel, password) {
        return HTTP.post('user/security/replacepassword', qs.stringify({
            'tel': tel,
            'password': password
        }))
    },
    //获取联系人
    getContact(page) {
        return HTTP.post('user/contact/get', qs.stringify({
            limit:6,
            page:page
        }))
    },
    //添加联系人
    addContact(params) {
        return HTTP.post('user/contact/add', qs.stringify({
            contact: params.name,
            phone: params.tel,
            tel: params.phone,
            province: params.pro,
            city: params.city,
            area: params.area,
            address: params.address,
            email: params.mail
        }))
    },
    //设置默认联系人
    setDefault(id) {
        return HTTP.post('user/contact/default', qs.stringify({
            id: id
        }))
    },
    //删除联系人
    delContact(id) {
        return HTTP.post('user/contact/del', qs.stringify({
            id: id
        }))
    },
    //修改联系人信息
    setContact(params) {
        return HTTP.post('user/contact/set', qs.stringify({
            id: params.id,
            contact: params.name,
            phone: params.tel,
            tel: params.phone,
            province: params.pro,
            city: params.city,
            area: params.area,
            address: params.address,
            email: params.mail
        }))
    },
    //获取合同主体
    getContract(id) {
        return HTTP.post('user/contract/get', qs.stringify({
            id: id
        }))
    },
    //设置默认
    setContractDefault(id) {
        return HTTP.post('user/contract/default', qs.stringify({
            id: id
        }))
    },
    //添加合同主体
    addContract(params) {
        return HTTP.post('user/contract/add', qs.stringify({
            main_type: params.type,
            main_title: params.subName,
            company_code: params.recNumbe,
            contact: params.name,
            phone: params.phone,
            tel: params.tel,
            province: params.pro,
            city: params.city,
            area: params.area,
            address: params.address,
            email: params.mail
        }))
    },
    //删除合同主体
    delContract(id) {
        return HTTP.post('user/contract/del', qs.stringify({
            id: id
        }))
    },
    //修改合同主体
    setContract(params) {
        return HTTP.post('user/contract/set', qs.stringify({
            id: params.id,
            main_type: params.type,
            main_title: params.subName,
            company_code: params.recNumbe,
            contact: params.name,
            phone: params.phone,
            tel: params.tel,
            province: params.pro,
            city: params.city,
            area: params.area,
            address: params.address,
            email: params.mail
        }))
    },
    //获取用户信息
    getUserInfo(params) {
        return HTTP.post('user/userinfo/get', qs.stringify({
            params
        }))
    },
    //设置用户信息
    setUserInfo(params) {
        return HTTP.post('user/userinfo/set', qs.stringify({
            username: params.username,
            header_img: params.imageUrl,
            gender: params.gender,
            birthday: params.birthdayVal,
            province: params.pro,
            city: params.city,
            area: params.area,
            address: params.address,
            email: params.email,
        }))
    },
    //获取收藏夹内容
    getCollect(page) {
        return HTTP.post('user/collect/get', qs.stringify({
            type: 1,
            page: page,
            limit: 16
        }))
    },
    //取消收藏
    delCollect(collect_id) {
        return HTTP.post('user/collect/del', qs.stringify({
            collect_id: collect_id,
            type: 1
        }))
    },
    //修改用户名
    setuserName(username) {
        return HTTP.post('user/userinfo/setusername', qs.stringify({
            username: username
        }))
    },
    //验证用户名是否可以使用
    checkuserName(username) {
        return HTTP.post('user/userinfo/checkusername', qs.stringify({
            username: username
        }))
    },
    //获取登录短信验证码
    getLoginSms(tel) {
        return HTTP.post('user/login/sms', qs.stringify({
            tel: tel
        }))
    },
    //获取注册短信验证码
    getRegSms(tel) {
        return HTTP.post('user/reg/sms', qs.stringify({
            tel: tel
        }))
    },
    //获取找回和修改密码短信验证码
    getSecSms(tel) {
        return HTTP.post('user/security/sms', qs.stringify({
            tel: tel
        }))
    },
    //更换顾问
    updateadv(msg){
        return HTTP.post('user/userinfo/updateadviser',qs.stringify({
            msg:msg
        }))
    }
}
