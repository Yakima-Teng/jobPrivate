import Vue from 'vue'
import Vuex from 'vuex'

import Cookie from 'js-cookie';

import index from '@/components/index/module'
import match from '@/components/match/module'
import needs from '@/components/needs/module'
import patent from '@/components/patent/module'
import policy from '@/components/policy/module'
import memberPatent from '@/components/member/patent'
import card from '@/components/preview/module'
import rcmd from '@/components/rcmd/rcmd'

import { api } from '@/assets/js/util.js'

const Api = api();

Vue.use(Vuex)

export function createStore() {
    return new Vuex.Store({
        modules: {
            index,
            match,
            needs,
            patent,
            policy,
            memberPatent,
            card,
            rcmd
        },
        state: {
            current_page: 1, // 当前页
            last_page: 1, // 总页数
            data: null,
            token: Cookie.get('token')
        },
        mutations: {
            jumpHandle(state, num) { // 跳到指定页面
                state.current_page = num;
            },
            changeLastPage(state, last_page) { // 总页数
                state.last_page = last_page;
            },
            changeData(state, data) {
                state.data = data;
            }
        },
        actions: {
            getTotalPage({ commit }, totalPage) {
                commit("changeLastPage", totalPage);
            },
            jumpAction({ commit }, page) { //跳转到某页操作
                commit("jumpHandle", page);
            }
        }
    })
}