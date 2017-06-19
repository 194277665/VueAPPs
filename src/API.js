/**
 * Created by gaomneng on 2017/4/13.
 */
// if (process.env.NODE_ENV === 'production') {
//     global.HOST = location.origin + location.pathname.substring(0, location.pathname.indexOf("/", 1));//'/xsfw';
// } else {
//     global.HOST = 'http://amptest.wisedu.com/xsfwfw';
// }
export default {
    id:'1950008',
    type:'',
    service:'http://amptest.wisedu.com/xsfwfw',
    // service:'../..',
    setDefaultRole:'/sys/qgzxapp/swMobileService/checkAuth/setDefaultRole.do',
    queryStudentWorkJob:'/sys/qgzxapp/swMobileService/studentWorkStudy/queryStudentWorkJob.do',
    queryStudentWorkSalary:'/sys/qgzxapp/swMobileService/studentWorkStudy/queryStudentWorkSalary.do',
    queryStudentJobInfo:'/sys/qgzxapp/swMobileService/studentWorkStudy/queryStudentJobInfo.do',
    queryStudentJobApplyRecord:'/sys/qgzxapp/swMobileService/studentWorkStudy/queryStudentJobApplyRecord.do',
    queryApplyJobInfo:'/sys/qgzxapp/swMobileService/studentWorkStudy/queryApplyJobInfo.do',
    queryCanApplyJob:'/sys/qgzxapp /swMobileService/studentWorkStudy/queryCanApplyJob.do',
    queryCampus:'/sys/qgzxapp/swMobileService/studentWorkStudy/queryCampus.do',
    queryWorkType:'/sys/qgzxapp/swMobileService/studentWorkStudy/queryWorkType.do',
    queryWorkStudySetting:'/sys/qgzxapp/swMobileService/studentWorkStudy/queryWorkStudySetting.do',
    queryCanApplyJob:'/sys/qgzxapp/swMobileService/studentWorkStudy/queryCanApplyJob.do',
    applyStudentWokrStudy:'/sys/qgzxapp/swMobileService/studentWorkStudy/applyStudentWokrStudy.do',
    // queryWorkStudySetting:'/sys/qgzxapp /swMobileService/studentWorkStudy/queryWorkStudySetting.do',
}