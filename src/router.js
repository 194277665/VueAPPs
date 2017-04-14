import index from './pages/index/index.vue';
import salaryDetail from './pages/Components/salaryDetail.vue'
import positionDetail from './pages/Components/positionDetail.vue'
import applyPosition from './pages/index/applyPosition.vue'
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
            path:'/salaryDetail',
            component:salaryDetail
        },
        {
            path:'/positionDetail',
            component:positionDetail
        },{
            path:'/applyPosition',
            component:applyPosition

        },
    ]
};