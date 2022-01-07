todoPrj.converter={
    todoVO:__todoVO
};

function __todoVO(data) {
    const originDATA = data;
    var tobeDATA=data;
    var VO = {
        category:"homework",
        deadline: 202201072200,
        isCompleted: false,
        memo: "퐁퐁사야됨",
        startTime: 202201071338,
        title: "설거지하기"
    };

    //카테고리 세팅
    switch (originDATA.category) {
        case "homework":
            tobeDATA.category="집안일";
            tobeDATA.categoryColor="green";
            break;
        case "officework":
            tobeDATA.category="회사업무";
            tobeDATA.categoryColor="gray";
            break;
        case "shopping":
            tobeDATA.category="쇼핑";
            tobeDATA.categoryColor="red";
            break;
        case "schedule":
            tobeDATA.category="일정";
            tobeDATA.categoryColor="blue";
            break;
        case "etc":
            tobeDATA.category="기타";
            tobeDATA.categoryColor="black";
            break;
        default:
            break;
    }

    tobeDATA.deadline = todoPrj.commonDB.dateSet(originDATA.deadline);
    tobeDATA.startTime = todoPrj.commonDB.dateSet(originDATA.startTime);

    console.log(tobeDATA);

    return tobeDATA;

};
