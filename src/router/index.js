
import {createRouter, createWebHistory} from 'vue-router';
import HelloWorld from "@/components/HelloWorld";
import LoginPage from "@/views/LoginPage";

const Home = {template: '<div>Home</div>'}

const routes = [
    {path: '/', component: Home, name: 'home'},
    {path: '/admin', component: HelloWorld, name:'admin'},
    {path: '/login', component:LoginPage, name:'login'},
]


const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router
