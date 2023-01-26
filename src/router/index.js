import { createRouter, createWebHistory } from "vue-router";
import NavBar from "../views/NavBar.vue";
import ToolContainer from "../views/ToolContainer.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "NavBar",
            component: NavBar,
        },
        {
            path: "/add-new-list",
            name: "add-new-list",
            component: "",
        },
        {
            path: "/base",
            name: "base",
            component: ToolContainer,
        },
        {
            path: "/how-to-use",
            name: "how-to-use",
            component: "",
        },
    ],
});

export default router;
