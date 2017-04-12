import index from './pages/index/index.vue';
import helpDetail from './pages/components/helpDetail.vue'
import apply from './pages/components/apply.vue'
import applyTips from './pages/components/applyTips.vue'
import  reviewDetail from './pages/components/reviewDetail.vue'
import  reviewMoreInfo from './pages/components/reviewMoreInfo.vue'

export default {
    routes: [
        {
            path: '/',
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
        },
        {
            path:'/reviewDetail',
            name:'reviewDetailName',
            component:reviewDetail
        },
        {
            path:'/reviewMoreInfo',
            component:reviewMoreInfo
        }
    ]
};