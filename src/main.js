import Vue from 'vue';
import 'babel-polyfill';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App.vue'
import { routes } from './routes';
import "./assets/js/validatorFile";
import CKEditor from '@ckeditor/ckeditor5-vue';

import DataTable from 'laravel-vue-datatable';

Vue.use(DataTable);


Vue.use(VueRouter);
Vue.use(VueResource);
Vue.http.options.root= 'http://article.com/api/';
Vue.config.productionTip = false;

const router = new VueRouter({
	routes,
  mode : 'history'
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    if (!localStorage.getItem('token'))
    {
      next('/login')
    }
    else 
    {
        Vue.http.interceptors.push((request, next) => {
        request.headers.set('Authorization', 'Bearer '+localStorage.token)
        request.headers.set('Accept', 'application/json')
        });
    }
    return next();
  }
  else if (to.meta.guest) {
    if (!localStorage.getItem('token'))
    {
      next()
    }
    else
    {
      delete localStorage.token;
      next('/home');
    }
    return next();
  }
  else next();
});
// Vue.use(DatatableFactory);
new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount("#app");
