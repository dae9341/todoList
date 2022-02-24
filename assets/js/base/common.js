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
    var yyyy =date.getFullYear().toString();
    var mm = date.getMonth()+1;
    var dd = date.getDate();
    var cnt = 1;

    mm = mm < 10 ? "0"+mm.toString(): mm.toString();
    dd = dd < 10 ? "0"+dd.toString(): dd.toString();

    return yyyy+mm+dd;
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
    var keyArr=[];
    var key = "";

    dataList.filter(function (item,idx) {
        if(item.key.indexOf(fullDate)>-1){ // 날짜포함하면서 마지막 값일때
            var temp_num = item.key.slice(-3, item.key.length); // 뒤에 세자리를 짜른다
            keyArr.push(parseInt(temp_num)); //뒤에세자리 keyArr에 담는다.
        }
    });

    //해당날짜 데이터있을때.
    if(keyArr.length){
        number = (Math.max.apply(Math, keyArr)+1).toString(); // 최대값+1을 number 할당.
    }
    //변환
    if(number<10){
        number= "00"+number.toString();
    }else if(number >= 10 && number < 100){
        number= "0"+number.toString();
    }

    key = fullDate+number;

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
    convertValue = dateTimeVal[0]+" "+dateTimeVal[1];

    return convertValue;
}
