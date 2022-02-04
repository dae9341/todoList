var todoPrj = {
    html:"",
    body:"",
};

todoPrj.base ={
    toggleNoneBlock:__toggleNoneBlock,
    makeFullDate:__makeFullDate,
    makeFullDateKey:__makeFullDateKey,
    datetimeToDB:__datetimeToDB
};

window.onload=function () {
    todoPrj.html = $("html");
    todoPrj.body = $("body");

    todoPrj.html.addClass("-onPageLoad");
};