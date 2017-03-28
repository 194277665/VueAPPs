import index from './pages/index/index.vue';
import salaryDetail from './pages/Components/salaryDetail.vue'
export default {
    routes: [
        {
            path: '/',
            component: index,
            // children: [
            //
            // ]
        },
        {
            path:'/salaryDetail/:id',
            component:salaryDetail
        }
    ]
};