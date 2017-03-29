import index from './pages/index/index.vue';
import salaryDetail from './pages/Components/salaryDetail.vue'
import positionDetail from './pages/Components/positionDetail.vue'
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
        },
        {
            path:'/positionDetail',
            component:positionDetail
        }
    ]
};