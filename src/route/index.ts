import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import LoginPage from "../pages/LoginPage.vue";
import ChatPage from "../pages/ChatPage.vue";

const Routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/chat",
    name: "Chat",
    component: ChatPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: Routes,
});

export default router;
