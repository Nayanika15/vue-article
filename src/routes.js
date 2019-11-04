import Home from './components/Home.vue';
import ArticleDetail from './components/article/Detail.vue';
import CategoryDetail from './components/category/Detail.vue';


export const routes =[
{ path : '/', component: Home, name:"Home" },
{ path : '/article/:slug', component: ArticleDetail, name:'articleDetail' },
{ path : '*', redirect: "{ name:Home }"},
{ path : '/category/:slug', component : CategoryDetail, name:'categoryDetail'}
];