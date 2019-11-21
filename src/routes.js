//import components
import Home from './components/Home.vue';
import ArticleDetail from './components/article/Detail.vue';
import CategoryDetail from './components/category/Detail.vue';
import ContactUs from './components/common/ContactUs.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import Dashboard from './components/Dashboard.vue';
import AddCategory from './components/category/Add.vue';
import ListCategory from './components/category/List.vue';
import ListArticles from './components/article/List.vue';
import AddArticle from './components/article/Add.vue';
import Pay from './components/common/Pay.vue';
import SuccessfulPayment from './components/common/Successful-payment.vue';
import UpdateCategory from './components/category/Edit.vue';


export const routes =[
{ path : '/', component: Home, name:"home" },
{ path : '/contact', component:ContactUs },
{ path : '/article/:slug', component: ArticleDetail, name:'articleDetail' },
{ path : '*', redirect: "{ name:home }"},
{ path : '/category/add', component: AddCategory, name:'add-category'},
{ path : '/category/list', component: ListCategory, name:'view-category', meta:{ auth:true }},
{ path : '/category/:slug', component : CategoryDetail, name:'categoryDetail'},
{ path : '/login', component: Login, name:'login', meta: { guest: true } },
{ path : '/register', component: Register, name:'register' },
{ path : '/dashboard', component: Dashboard, name:'dashboard', meta: { auth: true }},
{ path : '/article/list', component: ListArticles, name:'view-articles', meta: { auth: true }},
{ path : '/article/add', component: AddArticle, name:'add-article', meta: { auth: true }},
{ path : '/make-payment/:article_id', component:Pay, name:'make-payment', meta:{ auth:true }},
{ path : '/successful-payment', component:SuccessfulPayment, name:'successful-payment'},
{ path : '/category/edit/:id', component: UpdateCategory, name:'edit-category', meta: { auth: true }}
];