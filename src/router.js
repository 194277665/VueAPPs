import index from './pages/index/index.vue';
import task from './pages/task/task.vue'
export default {
    routes: [
        {
            path: '/',
            component: index
        },
        {
            path: '/task',
            component: task
        }
    ]
};