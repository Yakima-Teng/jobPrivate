import {
    postFn
} from '../../static/js/util.js'

import Api2 from '../../static/js/api2.js'
export const GET_DETAILINFO = 'GET_DETAILINFO' //商品详情数据

export const GET_DETAILRECOMMEND = 'GET_DETAILRECOMMEND' //推荐文章数据

export const GET_DETAILDATA = 'GET_DETAILDATA' //商品详情数据

const serviceDetail = {
    state: {
        detailInfo:'',
        detailRecommend: [],
        detailProductName: '',
        detailOneKinds: '',
        detailTowKinds: '',
        detailSku:'',
        config:{
            description:'',
            title:'',
            image:'',
        }
    },
    mutations: {
        commit_detailInfo(state, list) {
            state.detailInfo = list;
        },
        commit_detailRecommend(state, list) {
            state.detailRecommend = list;
        },
        commit_detailProductName(state, list) {
            state.detailProductName = list;
        },
        commit_detailOneKinds(state, list) {
            state.detailOneKinds = list;
        },
        commit_detailTowKinds(state, list) {
            state.detailTowKinds = list;
        },
        commit_detailSku(state, list) {
            state.detailSku = list;
        },
        commit_configDescription(state, list) {
            state.config.description = list;
        },
        commit_configTitle(state, list) {
            state.config.title = list;
        },
        commit_configImage(state, list) {
            state.config.image = list;
        },
    },
    actions: {
        [GET_DETAILINFO]({
            commit
        },data) {
            return new Promise((resolve, project) => {
                resolve();
                commit('commit_detailInfo', data);
                
            })
        },
        [GET_DETAILRECOMMEND]({
            commit
        },data) {
            return new Promise((resolve, project) => {
                resolve();
                commit('commit_detailRecommend', data);
            })
        },
        [GET_DETAILDATA]({
            commit
        }, url) {
            return new Promise((resolve, project) => {
                console.log(url.params.id,'url.params.id')
                var data = {
                    product_id: url.params.id
                }
                postFn('/product/product/detail', data, function (res) {
                    console.log(res, "商品详情")
                    if (res.data.code == 200) {
                        var info = res.data.data,
                            arr = [],
                            normList = [];
                        if (info.show_type_list != '') {
                            for (var x in info.show_type_list) {
                                normList.push(info.show_type_list[x])
                                for (var j = 0; j < normList.length; j++) {
                                    normList[j].index = j
                                }
                                info.normList = normList
                            }
                            for (var y = 0; y < info.normList.length; y++) {
                                info.normList[y].specList = [];
                                for (var n in info.normList[y].values) {
                                    info.normList[y].specList.push(info.normList[y].values[n])
                                }
                            }
                        }
                        // that.info = info
                        commit('commit_detailInfo', info);
                        //获取商品名称开始
                        let towKinds = info.cat_info.child.cat_name
                        commit('commit_detailTowKinds', towKinds);
                        let oneKinds = info.cat_info.cat_name
                        commit('commit_detailOneKinds', oneKinds);
                        if (info.cur_sku.sku_name != '' && info.cur_sku.sku_name != undefined && info.cur_sku.sku_name != null) {
                            let productName = info.cur_sku.sku_name
                            commit('commit_detailProductName', productName);
                            let configDescription = '创新科技服务云平台专业为您提供' + productName + ',' + towKinds + ',' + oneKinds + ',专业顾问为您一对一贴心办理,费用透明,流程简单,成功率高!'
                            let configTitle = productName
                            commit('commit_configDescription', configDescription);
                            commit('commit_configTitle', configTitle);
                        } else {
                            let productName = info.info.product_name
                            commit('commit_detailProductName', productName);
                            let configDescription = '创新科技服务云平台专业为您提供' + productName + ',' + towKinds + ',' + oneKinds + ',专业顾问为您一对一贴心办理,费用透明,流程简单,成功率高!'
                            let configTitle = productName
                            commit('commit_configDescription', configDescription);
                            commit('commit_configTitle', configTitle);
                        }
                        let configImage = info.info.product_img
                        commit('commit_configImage', configImage);

                        if (info.act_list.length == 0) {
                            Api2.postskuId(info.cur_sku.sku_id).then(res => {
                                let sku = res.data.data;
                                commit('commit_detailSku', sku);
                            })
                        }
                        let data = {
                            cat_id: info.cat_info.child.cat_id,
                            parent_cat_id:info.cat_info.cat_id,
                            num: 5,
                            exclusive_product_id:url.params.id,
                        }
                        console.log(data,'=>data');
                        Api2.postRecommend(data).then(res => {
                            console.log(res, '=>res')
                            if (res.data.code == 200) {
                                // this.recommend=res.data.data;
                               commit('commit_detailRecommend', res.data.data); 
                            }
                            resolve();
                        })
                        
                    }else{
                       
                        //商品下架获取推荐文章
                        let agu=res.data.data;
                        if (agu != '') {
                            var data = {
                                cat_id: agu.cat_info.child.cat_id,
                                parent_cat_id: agu.cat_info.cat_id,
                                num: 5,
                            }
                        } else {
                            data = {
                                num: 5,
                            }
                        }
                        Api2.postRecommend(data).then(res => {
                            if (res.data.code == 200) {
                                // this.recommend=res.data.data;
                                commit('commit_detailRecommend', res.data.data);
                            }
                            resolve();
                        })
                       
                    }
                    
                })
              
            })
        },
    }
}
export default serviceDetail;