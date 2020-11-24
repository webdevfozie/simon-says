import Vue from 'vue'
import App from './App.vue'
import 'minireset.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.config.devtools = true
