import Axios from 'axios'
import qs from 'qs'

import store from "../../store"
let HTTP=Axios.create({
    baseURL: "https://kong.gbicom.com:8443/",
    timeout:10000,
    responseType:'json',
    headers: {
        'apikey': "ZlEqSzeQo1xEo0W3Rqh7t3x8d77UwR3O",
        'Content-Type': 'application/x-www-form-urlencoded',
    },
})
export default{
    //发送订单id
    postorderId(id,type){
        return HTTP.post('order/order/orderinfo/index', qs.stringify({
            id,
            type
        }))
    },
    //确认服务
    postorderconfirm(id,orderNumber) {
        return HTTP.post('order/order/orderconfirm',qs.stringify({
            id,
            orderNumber
        }))
    },
    //取消订单
    postorderCancel(orderNumber) {
        return HTTP.post('order/order/orderCancel', qs.stringify({
            orderNumber,
        }))
    },
    //获取代付款，代办理的数量
    getOrderStat() {
        return HTTP.post('order/order/orderinfo/getOrderStat')
    },
    //添加购物车
    postProductAdd(data) {
        return HTTP.post('product/cart/add', qs.stringify({
            uid:data.uid,
            product_id: data.product_id,
            sku_id:data.sku_id,
            num: data.num
        }))
    },
    //重新购买
    postorderBuyAgain(type, orderNumber) {
        return HTTP.post('order/order/orderBuyAgain', qs.stringify({
            type,
            orderNumber
        }))
    },
    //获取商品推荐信息product/product/recommend
    postRecommend(data) {
        return HTTP.post('product/product/recommend', qs.stringify({
            cat_id: data.cat_id,
            parent_cat_id: data.parent_cat_id,
            num: data.num,
            exclusive_product_id: data.exclusive_product_id,
        }))
    },
    //检查是否收藏过批量user/user/collect/checkcollects
    postCheckcollects(data) {
        return HTTP.post('user/user/collect/checkcollects', qs.stringify({
            collect_arr:data,
        }))
    },
    //根据sku_id获取数据product/product/sku_act_list
    postskuId(sku_id) {
        return HTTP.post('product/product/sku_act_list', qs.stringify({
            sku_id
        }))
    },
    //获取活动时间
    getActivityTime (){
        return HTTP.get('/event/coupon/activity_time')
    }

}
