import Vue from 'vue'
import App from './App'
import reqapi from 'util/api.vue'

Vue.prototype.api = reqapi
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
