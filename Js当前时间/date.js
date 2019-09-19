/**
 * 获取当前时间
 */
getCurrentDate();
function getCurrentDate(){
    var date=new Date();
    var myYear=date.getFullYear();
    var myMonth=date.getMonth()+1;
    myMonth=isSingleDigit(myMonth);
    var myDate=date.getDate();
    myDate=isSingleDigit(myDate);
    var week=date.getDay();
    var arr=['星期日','星期一','星期二','星期三','星期四','星期五','星期六',]
    var myWeek=arr[week];
    var myHours=date.getHours();
    myHours=isSingleDigit(myHours);
    var myMinutes=date.getMinutes();
    myMinutes=isSingleDigit(myMinutes);
    var mySeconds=date.getSeconds();
    mySeconds=isSingleDigit(mySeconds);
    var separator1='-';
    var separator2=':';
    function isSingleDigit(num){

        if(num >= 0 && num <= 9){
            num='0'+num;
        }
        return num;
    }
    var today = myYear+separator1+myMonth+separator1+myDate+'&nbsp&nbsp'+myWeek+' '+myHours+separator2+myMinutes+separator2+mySeconds;

    oBox=document.getElementById('now');
    
    oBox.innerHTML= today;

}

setInterval('getCurrentDate()',1000);

//