todoPrj.db={
    commonDB:{},
    converter:{},
    todoWriteData:todoWriteData,
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
            for(var i in snapshot.val())
                DATA.push([i, snapshot.val()[i]]);

            DATA.map(function (item,idx) {
                var key = item[0];
                var value= todoPrj.converter.todoVO(item[1]);

                //데이터 저장
                todoPrj.db.todos.push({
                    key:item[0],
                    value:item[1]
                });

                html+=`<div class="todoItem">  
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
                        <a href="#todoItemMore${idx}" class="todoItemMore__btn" onclick="todoPrj.base.toggleNoneBlock($(this).attr('href'));">더보기</a>
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
            $("#dataList").append(html);

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

$(function () {
    dataPrint();
})