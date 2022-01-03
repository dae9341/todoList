var todoPrj = {
    html:"",
    body:"",
};

window.onload=function () {
    todoPrj.html = $("html");
    todoPrj.body = $("body");

    todoPrj.html.addClass("-onPageLoad");
};