const firebaseConfig = {
    apiKey: "AIzaSyA8427E742HVw8L66EosjhBEXRB3cPtktw",
    authDomain: "test-5050.firebaseapp.com",
    databaseURL: "https://test-5050-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "test-5050",
    storageBucket: "test-5050.appspot.com",
    messagingSenderId: "702340193574",
    appId: "1:702340193574:web:a84401211e9ee855fa75e7",
    measurementId: "G-BVP3TWGQXH"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const dbRef = firebase.database().ref();

//데이터 출력
function dataPrint() {
    dbRef.child("users").get().then((snapshot) => {
        if (snapshot.exists()) {
            var html=``;
            var DATA= [];
            for(var i in snapshot.val())
                DATA.push([i, snapshot.val()[i]]);

            console.log(DATA)

            DATA.map(function (item,i) {
                var key = item[0];
                var value= item[1];
                var passText = (value.pass ==true) ? "합격" : "불합격"
                html+=`<div class="dataList__user">
                                <div class="dataList__userNo">${key}</div>
                                <div class="dataList__userName">
                                    <span>이름:</span>
                                    <span>${value.name}</span>
                                </div>
                                <div class="dataList__userAge">
                                    <span>나이:</span>
                                    <span>${value.age}</span>
                                </div>
                                <div class="dataList__userCity">
                                    <span>주소:</span>
                                    <span>${value.city}</span>
                                </div>
                                <div class="dataList__userEmail">
                                    <span>이메일:</span>
                                    <span>${value.email}</span>
                                </div>
                                <div class="dataList__userPass">
                                    <span>합격여부:</span>
                                    <span>${passText}</span>
                                </div>
                                <div class="dataList__btnDetail">
                                    <a href="#" class="updataBtn">수정</a>
                                    <a href="#" class="deleteBtn" onclick="deleteUserDataEvent(this); return false;">삭제</a>
                                </div>
                            </div>`
            })

            $("#dataList").append(html);
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
}

dataPrint();

function f() {
    
}

//데이터추가
function writeUserData(userId, age, city, email, name, pass) {
    firebase.database().ref('users/' + userId).set({
        age: age,
        city: city,
        email:email,
        name:name,
        pass : pass,
    }, (error)=>{
        if(error){
            alert("입력 실패!")
        }else{
            alert("입력 성공!")
        }
    });
}

//데이터 업데이트
function updateUserData(userId, age, city, email, name, pass){
    var modifyData = {
        age: age,
        city: city,
        email:email,
        name:name,
        pass : pass
    };
    var updates={}

    updates['users/' + userId] = modifyData;

    return dbRef.update(updates)
}

//데이터 삭제
function deleteUserData(userId){
    return dbRef.child("users/"+userId).remove();
}

function deleteUserDataEvent(clickItem){
    var userId = $(clickItem).parents('.dataList__user').find('.dataList__userNo').text();
    deleteUserData(userId).then(function () {
        window.location.reload();
    });
}



$(function () {

    $("#submitBtn").on("click", function () {
        var userId; //userId
        var age = $("#addData__age").val();
        var city = $("#addData__city").val();
        var email = $("#addData__email").val();
        var pass = $("#addData__pass").find("input[name=passRadio]:checked").val() == "true" ? true:false;
        var name = $("#addData__name").val();

        dbRef.child("users").get().then((snapshot) => {
            if (snapshot.exists()) {
                userId=snapshot.val().length;
                writeUserData(userId, age, city, email, name, pass);
                window.location.reload();
            }
        });
    });

})
