import { createRouter, createWebHistory } from "vue-router";
import NavBar from "../views/NavBar.vue";
import ToolContainer from "../views/ToolContainer.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/add-new-list",
            name: "DODAJ NOWĄ LISTĘ",
            component: "",
        },
        {
            path: "/base",
            name: "BAZA NARZĘDZI",
            component: ToolContainer,
        },
        {
            path: "/how-to-use",
            name: "JAK UŻYWAĆ?",
            component: "",
        },
    ],
});

export default router;
