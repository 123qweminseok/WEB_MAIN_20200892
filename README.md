회원가입시 따로 창을 만들어서 db에 저장하도록 구성해봤습니다.
회원가입시 로그인, 비번을 넣고 db에 저장이 됩니다. 
로그인 창도 같이 만들어줬는데 두개 페이지를 분리하고 해야 적용이 된 걸 확인할 수 있습니다.
근데 로그인 창은 이미 로그인 페이지가 있어 의미가 없다고 생각해 그냥 파이어베이스를 사용해 구성하는것만 소개했습니다.

<!-- 여기부터 추가 회원가입 및 로그인 파이어베이스를 통한것! -->
<form>
  <h1>회원가입</h1>
  <div> 이메일 : <input type="email" id="signUpEmail" /> </div>
  <div> 비밀번호 : <input type="password" id="signUpPassword" /> </div>
  <button type="submit" id="signUpButton">회원가입 하기</button>
  <button type="button" onclick="location.href='login/login.html'">로그인 하러 가기</button>
</form>

<!-- 로그인 폼 -->
<form>
  <h1>로그인</h1>
  <div> 이메일 : <input type="email" id="signInEmail" /> </div>
  <div> 비밀번호 : <input type="password" id="signInPassword" /> </div>
  <button type="submit" id="signInButton">로그인 하기</button>
  <button type="button" onclick="location.href='signup.html'">회원가입 하러 가기</button>
</form>

<script type="module">
  // 필요한 SDK를 가져오기
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
  // 인증 기능을 위한 함수 가져오기
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js";

  // Firebase 설정
  const firebaseConfig = {
      apiKey: "AIzaSyADI-KEsslp3FWB-5m0VzDQHTy998eK75s",
      authDomain: "easylogin-91b95.firebaseapp.com",
      projectId: "easylogin-91b95",
      storageBucket: "easylogin-91b95.appspot.com",
      messagingSenderId: "635975303584",
      appId: "1:635975303584:web:f5f87295ac10d4c469e4c5",
      measurementId: "G-5BKHNFK1PF"
  };

  // Firebase 초기화
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(); // Firebase 인증 초기화

  // 회원가입 버튼에 이벤트 리스너 추가
  document.getElementById('signUpButton').addEventListener('click', (event) => {
      event.preventDefault(); // 기본 폼 제출 동작 방지
      const signUpEmail = document.getElementById('signUpEmail').value; // 이메일 입력값 가져오기
      const signUpPassword = document.getElementById('signUpPassword').value; // 비밀번호 입력값 가져오기

      // 이메일과 비밀번호로 새로운 사용자 생성
      createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
          .then((userCredential) => {
              console.log(userCredential); // 성공 시 사용자 자격 증명 콘솔에 출력
              const user = userCredential.user; // 사용자 객체 가져오기
              // 회원가입 성공 후 추가 작업을 여기에 추가할 수 있습니다.
          })
          .catch((error) => {
              console.log('error'); // 오류 메시지 콘솔에 출력
              const errorCode = error.code;
              const errorMessage = error.message;
              // 오류 처리 작업을 여기에 추가할 수 있습니다.
          });
  });

  // 로그인 버튼에 이벤트 리스너 추가
  document.getElementById('signInButton').addEventListener('click', (event) => {
      event.preventDefault(); // 기본 폼 제출 동작 방지
      const signInEmail = document.getElementById('signInEmail').value; // 이메일 입력값 가져오기
      const signInPassword = document.getElementById('signInPassword').value; // 비밀번호 입력값 가져오기

      // 이메일과 비밀번호로 사용자 로그인
      signInWithEmailAndPassword(auth, signInEmail, signInPassword)
          .then((userCredential) => {
              console.log(userCredential); // 성공 시 사용자 자격 증명 콘솔에 출력
              const user = userCredential.user; // 사용자 객체 가져오기
              // 로그인 성공 후 추가 작업을 여기에 추가할 수 있습니다.
          })
          .catch((error) => {
              console.log('로그인 실패'); // 로그인 실패 시 메시지 콘솔에 출력
              const errorCode = error.code;
              const errorMessage = error.message;
              // 오류 처리 작업을 여기에 추가할 수 있습니다.
          });
  });
</script>
