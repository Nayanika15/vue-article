//import components
import Home from './components/Home.vue';
import ArticleDetail from './components/article/Detail.vue';
import CategoryDetail from './components/category/Detail.vue';
import ContactUs from './components/common/ContactUs.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import Dashboard from './components/Dashboard.vue';
import AddCategory from './components/category/Add.vue';


export const routes =[
{ path : '/', component: Home, name:"Home" },
{ path : '/contact', component:ContactUs },
{ path : '/article/:slug', component: ArticleDetail, name:'articleDetail' },
{ path : '*', redirect: "{ name:Home }"},
{ path : '/category/add', component: AddCategory, name:'add-category'},
{ path : '/category/list', component: ListCategory, name:'view-category'},
{ path : '/category/:slug', component : CategoryDetail, name:'categoryDetail'},
{ path : '/login', component: Login, name:'login' },
{ path : '/register', component: Register, name:'register' },
{ path : '/dashboard', component: Dashboard, name:'dashboard', meta: { auth: true }}

];