
//////html문서 안에 실행되어야 하니까 해당 파일을 html문서 안에 삽입한다.->확인은 개발자 모드에서 하면 됨.

document.getElementById("search_btn").addEventListener('click',search_message);
// 특정 노드의 식별자 id값을 인식한다-< search_btn임. 식별자를 지정하지 않으면 어디에서 클릭했는지 알 수 없다. 그리고 해당 함수를 실행한다.
//그리고 해당 id값을 html에 설정을 해야한다 !search_btn을! 이거 못했음 ㅠㅠ 추가해줘야 함.

function search_message(){
        alert("검색을 수행합니다!");
}