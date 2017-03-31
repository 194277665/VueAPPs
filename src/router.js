import index from './pages/index/index.vue';
import task from './pages/task/task.vue'
export default {
    routes: [
        {
            path: '/index',
            component: index
        },
        {
            path: '/task/:taskID',
            component: task
        }
    ]
};