todoPrj.db={
    commonDB:{},
    converter:{},
    todoWriteData:todoWriteData,
    todoWritePrint:todoWritePrint,
    todos:[]
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
todoPrj.db.app =firebase.initializeApp(todoPrj.db.firebaseConfig);
todoPrj.db.dbRef = firebase.database().ref();


//데이터 출력
function dataPrint() {
    todoPrj.db.dbRef.child("todos").get().then((snapshot) => {
        if (snapshot.exists()) {
            var html=``;
            var DATA= [];
            for(var i in snapshot.val()){
                DATA.push([i, snapshot.val()[i]]);
                //DB오리진 데이터 저장
                todoPrj.db.todos.push({
                    key:i,
                    value:snapshot.val()[i]
                });
            }
            DATA.map(function (item,idx) {

                //컨버터 변환
                var key = item[0];
                var value= todoPrj.converter.todoVO(item[1]);


                html+=`<div class="todoItem" data-key="${key}" onclick="todoPrj.db.todoWritePrint($(this).data('key')); return false;">   
                        <div class="todoItem__work">  
                            <div class="todoItem__work__category">
                                <span class="label -${value.categoryColor}">${value.category}</span>
                            </div>
                            <div class="todoItem__work__name">
                                <span>${value.title}</span> 
                            </div>
                        </div>
                        <div class="todoItem__btns">
                            <button type="button">완료</button>
                        </div>
                        <div class="todoItem__endTime">
                            ${value.deadline}
                        </div>
                        <div class="todoItem__more">
                                <div class="todoItemMore">
                        <a href="#todoItemMore${idx}" class="todoItemMore__btn" onclick="todoPrj.base.toggleNoneBlock($(this).attr('href')); return false;">더보기</a>
                        <div id="todoItemMore${idx}" class="todoItemMore__content"> 
                            <h2 class="todoItemMore__content__title">
                                 ${value.title}
                            </h2>
                    
                            <div class="todoItemMore__content__detail">
                                 ${value.memo}
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
            });
            $("#todoList").append(html);

        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
}

//데이터 입력 (할 일 작성하기)
function todoWriteData(key, datas) {
    todoPrj.db.dbRef.child("todos/"+key).set({
        category:datas.category,
        deadline: datas.deadline,
        isCompleted:datas.isCompleted,
        memo:datas.memo,
        startTime:datas.startTime,
        title:datas.title
    }, (error)=>{
        if(error){
            alert("입력 실패!")
        }else{
            alert("입력 성공!")
        }
    });
}

// key값으로 todo작성 레이어호출
function todoWritePrint(key){
    todoPrj.layer.open("#todoWriteLayer");
    if(key){
        var thisItem;
        thisItem = todoPrj.db.todos.filter(function (item) {
            return item.key == key;
        });

        $("#todoCategory").val(thisItem[0].value.category);
        $("#todoDateEnd").val(thisItem[0].value.deadline);
        $("#todoMemo").val(thisItem[0].value.memo);
        $("#todoDateStart").val(thisItem[0].value.startTime);
        $("#todoWork").val(thisItem[0].value.title);
    }else{
        $("#todoCategory").val(null);
        $("#todoDateEnd").val(null);
        $("#todoMemo").val(null);
        $("#todoDateStart").val(null);
        $("#todoWork").val(null);
    }

    //TODO: 버그있음(다른TODO가 같이 바뀌기도함. 이벤트 중복확인 필요)
    $(".layer__contentWrapper.todoWriteLayer").find(".layer__footer__submit").on("click",function () {
        submitData(key);
        todoPrj.layer.close();
        return false;
    });

    function submitData(code) {
        var fullDate = todoPrj.base.makeFullDate(new Date());
        var newKey = (code)? code : todoPrj.base.makeFullDateKey(todoPrj.db.todos, fullDate);

        todoPrj.db.todoWriteData(newKey,{
            category:$("#todoCategory").val(),
            deadline: $("#todoDateEnd").val(),
            isCompleted:false,
            memo:$("#todoMemo").val(),
            startTime:$("#todoDateStart").val(),
            title:$("#todoWork").val()
        });
        window.location.reload();
    }
}

$(function () {
    dataPrint();
})