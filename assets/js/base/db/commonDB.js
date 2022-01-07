todoPrj.commonDB={
    dateSet:__dateSet
};
function __dateSet(date) {
    const originDate = date.toString();
    var yyyy,mm,dd;
    var hour, min, sec;
    var time;

    yyyy= originDate.substring(0,4);
    mm= originDate.substring(4,6);
    dd= originDate.substring(6,8);
    hour= originDate.substring(8,10);
    min= originDate.substring(10,12);


    time = yyyy+"-"+mm+"-"+dd+" "+hour+":"+min;

    return time;
}
