import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import store from './store'
import VueSocketio from 'vue-socket.io'
import FileUpload from 'v-file-upload'
axios.defaults.baseURL = "http://localhost:8000"

Vue.use(VueSocketio, 'http://localhost:8070')
Vue.use(FileUpload)
Vue.use(VueAxios, axios)
Vue.use(VueRouter)
Vue.use(Vuex)


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: createEle => createEle(App)
}).$mount('#app');