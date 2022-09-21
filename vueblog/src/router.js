import { createWebHistory, createRouter } from "vue-router";
import Home from './components/Home';
import List from './components/List';
import Detail from './components/Detail';
import Author from './components/Author';
import Comment from './components/Comment';

const routes = [
    {
        path:"/",
        component: Home,
    },
    {
        path: "/list",
        component: List,
    },
    {
        // Nested routes
        path: "/detail/:id(\\d+)",
        component: Detail,
        children: [
            {
                path: "author",
                component: Author
            },
            {
                path: "comment",
                component: Comment
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router; 