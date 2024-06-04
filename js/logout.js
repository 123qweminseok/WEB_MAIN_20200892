   document.getElementById("logout_btn").addEventListener('click',logout)
   // 문서에서 해당 버튼 누르면 해당 이벤트 발동. js파일에서 html요소에 대한걸 적용시킬때 해줌.

   function session_get() { //세션 읽기
      if (sessionStorage) {
      return sessionStorage.getItem("Session_Storage_pass");
      } else {
      alert("세션 스토리지 지원 x");
      }
      }
      function session_check() { //세션 검사
         if (sessionStorage.getItem("Session_Storage_id")) {
            alert("이미 로그인 되었습니다."); 
            location.href="../login/index_login.html"; // 로그인된 페이지로 이동
         }
            }

            function session_del() {//세션 삭제
               if (sessionStorage) {
                  sessionStorage.removeItem("Session_Storage_id"); // 아이디 세션 삭제

               sessionStorage.removeItem("Session_Storage_pass");//비번 삭제
               alert('로그아웃 버튼 클릭 확인 : 세션 스토리지를 삭제합니다.');
               } else {
               alert("세션 스토리지 지원 x");
               }
               }
               // 세션 스토리지에 아이디나 비번 둘중 하나만 유지가 되어도 로그아웃이 되지 않는다 그렇기 때문에 둘다 없애줘야 한다.

               function logout(){
                  session_del(); // 세션 삭제
                  location.href='../index.html'; 
                  //해당 루트로 이동하는것같음
                  }
