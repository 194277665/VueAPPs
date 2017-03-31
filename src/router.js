import index from './pages/index/index.vue';
import visit from './components/visit/visit.vue';
import meeting from './components/meeting/meeting.vue';
import office from './components/office/office.vue';
import activity from './components/activity/activity.vue';
import sell from './components/sell/sell.vue';
import other from './components/other/other.vue';

export default {
    routes: [
        {
            path: '/',
            component: index,
            children: [
                {
                    path: 'visit',
                    component: visit
                },
                {
                    path: 'meeting',
                    component: meeting
                },
                {
                    path: 'office',
                    component: office
                },
                {
                    path: 'activity',
                    component: activity
                },
                {
                    path: 'sell',
                    component: sell
                },
                {
                    path: 'other',
                    component: other
                }
            ]
        }
    ]
};