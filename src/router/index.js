import {createRouter, createWebHistory} from 'vue-router';
import HelloWorld from "@/components/HelloWorld";
import LoginPage from "@/views/LoginPage";

const Home = {template: '<div>Home</div>'}

const routes = [
    {path: '/', component: Home, name: 'home'},
    {path: '/helloWorld', component: HelloWorld},
    {path: '/login', component:LoginPage},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router