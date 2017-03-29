import index from './pages/index/index.vue';
import helpDetail from './pages/components/helpDetail.vue'
import apply from './pages/components/apply.vue'
import applyTips from './pages/components/applyTips.vue'
export default {
    routes: [
        {
            path: '/index',
            component: index,
            children: [

            ]
        },
        {
            path:'/helpDetail',
            component:helpDetail
        },
        {
            path:'/apply',
            component:apply
        },
        {
            path:'/applyTips',
            component:applyTips
        }
    ]
};