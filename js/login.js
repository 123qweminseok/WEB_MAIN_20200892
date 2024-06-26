const idsave_check = document.getElementById('idSaveCheck');
const check_input = () => {
    const loginForm = document.getElementById('login_form');
    const loginBtn = document.getElementById('login_btn');
    const emailInput = document.getElementById('typeEmailX');
    const passwordInput = document.getElementById('typePasswordX');
    const c = '아이디, 패스워드를 체크합니다';
    alert(c);
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    const sanitizedPassword = check_xss(passwordValue);
    const sanitizedEmail = check_xss(emailValue);

    if (!sanitizedEmail || !sanitizedPassword) {
        return false;
    }

    if (emailValue.length < 5) {
        alert('아이디는 최소 5글자 이상 입력해야합니다.');
        return false;
    
    }

    // 해당 파트가 8주차 응용문제 해결입니다!아이디 5글자이상, 비번 12글자 이상 패스워드 특수문자 1개이상 퐇마,.

    if (passwordValue.length < 12) {
        alert('비밀번호는 반드시 12글자 이상 입력해야합니다.');
        return false;
    }

    const hasSpecialChar = passwordValue.match(/[!,@#$%^&*()_+\=\[\]{};':"\\|,.<>\/?]+/) !== null;
    if (!hasSpecialChar) {
        alert('패스워드는 특수문자를 1개 이상 포함해야합니다.');
        return false;
    }

    const hasUpperCase = passwordValue.match(/[A-Z]+/) !== null;
    const hasLowerCase = passwordValue.match(/[a-z]+/) !== null;
    if (!hasUpperCase || !hasLowerCase) {
        alert('패스워드는 대소문자를 1개 이상 포함해야합니다.');
        return false;
    }

    const repeatPattern = /(.)\1\1/;
    if (repeatPattern.test(emailValue) || repeatPattern.test(passwordValue)) {
        alert('아이디나 비밀번호에 3글자 이상 반복되는 부분이 있습니다.');
        return false;
    }

    if(idsave_check.checked == true) { // 아이디 체크 o
        alert("쿠키를 저장합니다.", emailValue);
        setCookie("id", emailValue, 1); // 1일 저장
        alert("쿠키 값 :" + emailValue);
    } else { // 아이디 체크 x
        setCookie("id", emailValue.value, 0); //날짜를 0 - 쿠키 삭제
    }

    console.log('이메일:', emailValue);
    console.log('비밀번호:', passwordValue);
    session_set(); 
    login_count(); // 로그인 횟수 증가
    loginForm.submit();
};

document.getElementById("login_btn").addEventListener('click', check_input);

const check_xss = (input) => {
    const DOMPurify = window.DOMPurify;
    const sanitizedInput = DOMPurify.sanitize(input);
    if (sanitizedInput !== input) {
        alert('XSS 공격 가능성이 있는 입력값을 발견했습니다.');
        return false;
    }
    return sanitizedInput;
};

function init() { // 로그인 폼에 쿠키에서 가져온 아이디 입력
    const emailInput = document.getElementById('typeEmailX');
    const idsave_check = document.getElementById('idSaveCheck');
    let get_id = getCookie("id");
    if(get_id) { 
        emailInput.value = get_id; 
        idsave_check.checked = true; 
    }
    session_check(); // 세션 유무 검사
}

function session_set() { // 세션 저장
    let session_id = document.querySelector("#typeEmailX"); // DOM 트리에서 ID 검색
    let session_pass = document.querySelector("#typePasswordX"); // DOM 트리에서 pass 검색
    if (sessionStorage) {
        let en_text = encrypt_text(session_pass.value);
        sessionStorage.setItem("Session_Storage_id", session_id.value);
        sessionStorage.setItem("Session_Storage_pass", en_text);                
    } else {
        alert("로컬 스토리지 지원 x");
    }
}

function logout() {
    logout_count(); // 로그아웃 횟수 증가
    session_del(); // 세션 삭제
    location.href = '../index.html';
}

function encodeByAES256(key, data) {
    const cipher = CryptoJS.AES.encrypt(data, CryptoJS.enc.Utf8.parse(key), {
        iv: CryptoJS.enc.Utf8.parse(""),
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC
    });
    return cipher.toString();
}

function decodeByAES256(key, data) {
    const cipher = CryptoJS.AES.decrypt(data, CryptoJS.enc.Utf8.parse(key), {
        iv: CryptoJS.enc.Utf8.parse(""),
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC
    });
    return cipher.toString(CryptoJS.enc.Utf8);
}

function addJavascript(jsname) { // 자바스크립트 외부 연동
    var th = document.getElementsByTagName('head')[0];
    var s = document.createElement('script');
    s.setAttribute('type','text/javascript');
    s.setAttribute('src',jsname);
    th.appendChild(s);
}

addJavascript('/js/security.js'); // 암복호화 함수
addJavascript('/js/session.js'); // 세션 함수
addJavascript('/js/cookie.js'); // 쿠키 함수    

function login_count() {
    let loginCount = getCookie("login_cnt");
    loginCount = loginCount ? parseInt(loginCount) : 0;
    loginCount++;
    setCookie("login_cnt", loginCount, 365);
    console.log("로그인 횟수:", loginCount);
}

function logout_count() {
    let logoutCount = getCookie("logout_cnt");
    logoutCount = logoutCount ? parseInt(logoutCount) : 0;
    logoutCount++;
    setCookie("logout_cnt", logoutCount, 365);
    console.log("로그아웃 횟수:", logoutCount);
}
