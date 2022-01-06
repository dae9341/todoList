var todoPrj = {
    html:"",
    body:"",
};

todoPrj.base ={
    toggleNoneBlock:__toggleNoneBlock
};

window.onload=function () {
    todoPrj.html = $("html");
    todoPrj.body = $("body");

    todoPrj.html.addClass("-onPageLoad");
};