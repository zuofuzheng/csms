/*
*获取当前时间和日期
*/
export default {
  getDate: function () {
    var d = new Date();
    var sec = 0;
    var minu = 0;
    var hours = 0;
    var date = null;
    var date1 = null;
    var day = null;
    var dayE = null;
    var time = null;
    var time1 = null;
    var time2 = null;
    var time3 = null;
    date = d.getFullYear()+"年"+(d.getMonth()+1)+"月"+d.getDate()+"日";
    date1 = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
    switch (d.getDay()) {
      case 0:
        day = '星期天';
        dayE = 'Sunday'
        break;
      case 1:
        day ="星期一";
        dayE = 'Monday'
        break;
      case 2:
        day ="星期二";
        dayE = 'Tuesday'
        break;
      case 3:
        day ="星期三";
        dayE = 'Wednesday'
        break;
      case 4:
        day ="星期四";
        dayE = 'Thursday'
        break;
      case 5:
        day ="星期五";
        dayE = 'Friday'
        break;
      case 6:
        day ="星期六";
        dayE = 'Saturday'
        break;
      default:
        break;
    };
    if(d.getHours()<10){hours="0"+d.getHours()}else{hours=d.getHours()};
    if(d.getMinutes()<10){minu="0"+d.getMinutes()}else{minu=d.getMinutes()};
    if(d.getSeconds()<10){sec="0"+d.getSeconds()}else{sec=d.getSeconds()};
    time = hours+":"+minu+":"+sec;
    time1 = hours+"-"+minu+"-"+sec;
    time2 = d.getHours()+':'+d.getMinutes()+':'+d.getSeconds();
    time3 = d.getHours()+'-'+d.getMinutes()+'-'+d.getSeconds();
    return {'date': date,'date1': date1,'day': day,'dayE': dayE,'time': time,'time1': time1,'time2': time2,'time3':time3};
  }
};
