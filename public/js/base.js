"use strict";

var todoPrj = {
  html: "",
  body: ""
};
todoPrj.base = {
  toggleNoneBlock: __toggleNoneBlock,
  makeFullDate: __makeFullDate,
  makeFullDateKey: __makeFullDateKey,
  datetimeToDB: __datetimeToDB
};

window.onload = function () {
  todoPrj.html = $("html");
  todoPrj.body = $("body");
  todoPrj.html.addClass("-onPageLoad");
};

var provider = new firebase.auth.GoogleAuthProvider();
console.log(provider);

function aa() {
  firebase.auth().signInWithPopup(provider).then(function (result) {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential; // This gives you a Google Access Token. You can use it to access the Google API.

    var token = credential.accessToken; // The signed-in user info.

    var user = result.user; // ...
  })["catch"](function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message; // The email of the user's account used.

    var email = error.email; // The firebase.auth.AuthCredential type that was used.

    var credential = error.credential; // ...
  });
}
"use strict";

function __toggleNoneBlock(linkId) {
  $(linkId).toggleClass("-on");
}
/*
*
* Explain:
* String형식의 Date를 만든다. ex) 20220204 등
* Param:
* 값 date [type: Date]
*
* */


function __makeFullDate(date) {
  var yyyy = date.getFullYear().toString();
  var mm = date.getMonth() + 1;
  var dd = date.getDate();
  var cnt = 1;
  mm = mm < 10 ? "0" + mm.toString() : mm.toString();
  dd = dd < 10 ? "0" + dd.toString() : dd.toString();
  return yyyy + mm + dd;
}
/*
*
* Explain:
* String형식의 FullDate기반의 Key를 만든다.
* ex) 20220204001 등 (20220204999까지 가능:: 현재 999초과시 예외처리없음. 가능한 데이터범주 아니라고 판단)
*
* Param:
* 값 dataList [type: Array]
* 값 fullDate [type: String]
*
* */


function __makeFullDateKey(dataList, fullDate) {
  var number = 1; // 해당 날짜 데이터 없을시 초기값 1

  var keyArr = [];
  var key = "";
  dataList.filter(function (item, idx) {
    if (item.key.indexOf(fullDate) > -1) {
      // 날짜포함하면서 마지막 값일때
      var temp_num = item.key.slice(-3, item.key.length); // 뒤에 세자리를 짜른다

      keyArr.push(parseInt(temp_num)); //뒤에세자리 keyArr에 담는다.
    }
  }); //해당날짜 데이터있을때.

  if (keyArr.length) {
    number = (Math.max.apply(Math, keyArr) + 1).toString(); // 최대값+1을 number 할당.
  } //변환


  if (number < 10) {
    number = "00" + number.toString();
  } else if (number >= 10 && number < 100) {
    number = "0" + number.toString();
  }

  key = fullDate + number;
  console.log(key);
  return key;
}
/*
*
* Explain:
* input datetime-local의 형식을 db구조에 맞춰 변환함.
*
* Param:
* 값 inputTimeVal [type: String]
*
*
* */


function __datetimeToDB(inputTimeVal) {
  var dateTimeVal;
  var convertValue;
  dateTimeVal = inputTimeVal.split("T");
  convertValue = dateTimeVal[0] + " " + dateTimeVal[1];
  return convertValue;
}
"use strict";

todoPrj.commonDB = {
  dateSet: __dateSet
};

function __dateSet(date) {
  var originDate = date.toString();
  var yyyy, mm, dd;
  var hour, min, sec;
  var time;
  yyyy = originDate.substring(0, 4);
  mm = originDate.substring(4, 6);
  dd = originDate.substring(6, 8);
  hour = originDate.substring(8, 10);
  min = originDate.substring(10, 12);
  time = yyyy + "-" + mm + "-" + dd + " " + hour + ":" + min;
  return time;
}
"use strict";

/*DB=>화면단*/
todoPrj.converter = {
  todoVO: __todoVO
};

function __todoVO(data) {
  var originDATA = data;
  var tobeDATA = data;
  var VO = {
    category: "homework",
    deadline: 202201072200,
    isCompleted: false,
    memo: "퐁퐁사야됨",
    startTime: 202201071338,
    title: "설거지하기"
  }; //카테고리 세팅

  switch (originDATA.category) {
    case "homework":
      tobeDATA.category = "집안일";
      tobeDATA.categoryColor = "green";
      break;

    case "officework":
      tobeDATA.category = "회사업무";
      tobeDATA.categoryColor = "gray";
      break;

    case "shopping":
      tobeDATA.category = "쇼핑";
      tobeDATA.categoryColor = "red";
      break;

    case "schedule":
      tobeDATA.category = "일정";
      tobeDATA.categoryColor = "blue";
      break;

    case "etc":
      tobeDATA.category = "기타";
      tobeDATA.categoryColor = "black";
      break;

    default:
      break;
  } //날짜 형식 변환


  tobeDATA.deadline = todoPrj.base.datetimeToDB(originDATA.deadline);
  tobeDATA.startTime = todoPrj.base.datetimeToDB(originDATA.startTime);
  return tobeDATA;
}

;
"use strict";

todoPrj.db = {
  commonDB: {},
  converter: {},
  todoWriteData: todoWriteData,
  todoWritePrint: todoWritePrint,
  todoDeleteData: todoDeleteData,
  todos: []
};
todoPrj.db.firebaseConfig = {
  apiKey: "AIzaSyDcsIRnfoshTi0ekIlRcCwLCRbLijalgas",
  authDomain: "todolist-e8b0d.firebaseapp.com",
  databaseURL: "https://todolist-e8b0d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "todolist-e8b0d",
  storageBucket: "todolist-e8b0d.appspot.com",
  messagingSenderId: "610067574429",
  appId: "1:610067574429:web:646102d20c1d54c3f76e74",
  measurementId: "G-C995XJXW05"
};
todoPrj.db.app = firebase.initializeApp(todoPrj.db.firebaseConfig);
todoPrj.db.dbRef = firebase.database().ref(); //데이터 출력

function dataPrint() {
  console.log("test");
  todoPrj.db.dbRef.child("todos").get().then(function (snapshot) {
    if (snapshot.exists()) {
      var html = "";
      var DATA = [];

      for (var i in snapshot.val()) {
        DATA.push([i, snapshot.val()[i]]); //DB오리진 데이터 저장

        todoPrj.db.todos.push({
          key: i,
          value: snapshot.val()[i]
        });
      }

      DATA.map(function (item, idx) {
        //컨버터 변환
        var key = item[0];
        var value = todoPrj.converter.todoVO(item[1]);
        html += "<div class=\"todoItem\" data-key=\"".concat(key, "\">   \n                        <a href=\"#\" onclick=\"todoPrj.db.todoWritePrint($(this).parent().data('key')); return false;\" class=\"todoItem__link\"><span class=\"hidden\">").concat(value.title, " \uB9C1\uD06C</span></a>\n                        <div class=\"todoItem__work\">   \n                            <div class=\"todoItem__work__category\">\n                                <span class=\"label -").concat(value.categoryColor, "\">").concat(value.category, "</span>\n                            </div>\n                            <div class=\"todoItem__work__name\">\n                                <span>").concat(value.title, "</span> \n                            </div>\n                        </div>\n                        <div class=\"todoItem__btns\">\n                            <button type=\"button\">\uC644\uB8CC</button>\n                        </div>\n                        <div class=\"todoItem__endTime\">\n                            ").concat(value.deadline, "\n                        </div>\n                        <div class=\"todoItem__more\">\n                                <div class=\"todoItemMore\">\n                        <a href=\"#todoItemMore").concat(idx, "\" class=\"todoItemMore__btn\" onclick=\"todoPrj.base.toggleNoneBlock($(this).attr('href')); return false;\">\uB354\uBCF4\uAE30</a>\n                        <div id=\"todoItemMore").concat(idx, "\" class=\"todoItemMore__content\"> \n                            <h2 class=\"todoItemMore__content__title\">\n                                 ").concat(value.title, "\n                            </h2>\n                    \n                            <div class=\"todoItemMore__content__detail\">\n                                 ").concat(value.memo, "\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <a href=\"#\" class=\"todoItem__btnDelete\" onclick=\"todoPrj.db.todoDeleteData($(this).parent().data('key')); return false;\"><span class=\"hidden\">\uC0AD\uC81C</span></a>\n            </div>");
      });
      $("#todoList").append(html);
    } else {
      console.log("No data available");
    }
  })["catch"](function (error) {
    console.error(error);
  });
} //데이터 입력 (할 일 작성하기)


function todoWriteData(key, datas) {
  todoPrj.db.dbRef.child("todos/" + key).set({
    category: datas.category,
    deadline: datas.deadline,
    isCompleted: datas.isCompleted,
    memo: datas.memo,
    startTime: datas.startTime,
    title: datas.title
  }, function (error) {
    if (error) {
      alert("입력 실패!");
    } else {
      alert("입력 성공!");
    }
  });
} // key값으로 todo작성 레이어호출


function todoWritePrint(key) {
  console.log("test");
  todoPrj.layer.open("#todoWriteLayer");

  if (key) {
    var thisItem;
    thisItem = todoPrj.db.todos.filter(function (item) {
      return item.key == key;
    });
    $("#todoCategory").val(thisItem[0].value.category);
    $("#todoDateEnd").val(thisItem[0].value.deadline);
    $("#todoMemo").val(thisItem[0].value.memo);
    $("#todoDateStart").val(thisItem[0].value.startTime);
    $("#todoWork").val(thisItem[0].value.title);
  } else {
    $("#todoCategory").val(null);
    $("#todoDateEnd").val(null);
    $("#todoMemo").val(null);
    $("#todoDateStart").val(null);
    $("#todoWork").val(null);
  } //TODO: 버그있음(다른TODO가 같이 바뀌기도함. 이벤트 중복확인 필요)


  $(".layer__contentWrapper.todoWriteLayer").find(".layer__footer__submit").on("click", function () {
    submitData(key);
    todoPrj.layer.close();
    return false;
  });
} // key값으로 todo작성


function submitData(code) {
  console.log("codeTest!!!!!", code);
  var fullDate = todoPrj.base.makeFullDate(new Date());
  var newKey = code ? code : todoPrj.base.makeFullDateKey(todoPrj.db.todos, fullDate);
  console.log(newKey);
  todoPrj.db.todoWriteData(newKey, {
    category: $("#todoCategory").val(),
    deadline: $("#todoDateEnd").val(),
    isCompleted: false,
    memo: $("#todoMemo").val(),
    startTime: $("#todoDateStart").val(),
    title: $("#todoWork").val()
  });
  window.location.reload();
} //key값으로 데이터삭제


function todoDeleteData(key) {
  if (!key) {
    return;
  }

  var thisItem;
  thisItem = todoPrj.db.todos.filter(function (item) {
    return item.key == key;
  });
  var confirmComment = "todo " + thisItem[0].value.title + "을(를) 삭제하시겠습니까?";

  if (window.confirm(confirmComment)) {
    todoPrj.db.dbRef.child("todos/" + key).set({
      category: null,
      deadline: null,
      isCompleted: null,
      memo: null,
      startTime: null,
      title: null
    }, function (error) {
      if (error) {// The write failed...
      } else {
        // Data saved successfully!
        alert("삭제완료되었습니다!");
      }
    });
    window.location.reload();
  } else {
    return false;
  }
}

$(function () {
  dataPrint();
});