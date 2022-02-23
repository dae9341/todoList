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


var provider = new firebase.auth.GoogleAuthProvider();
console.log(provider);
function aa(){
    firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
        }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
});
}