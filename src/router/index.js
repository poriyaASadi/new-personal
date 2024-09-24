import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/views/HomePage.vue";
const routes = [
 {
    path : "/",
    component : HomePage
 },

];
const router = createRouter({
    history : createWebHistory(),
    routes,
})
export default router