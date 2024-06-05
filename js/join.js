class SignUp {
    constructor(firstName, lastName, birthdayDate, gender, emailAddress, phoneNumber, classNumber, random) { // 생성자 함수
      this.firstName = firstName;
      this.lastName = lastName;
      this.birthdayDate = birthdayDate;
      this.gender = gender;
      this.emailAddress = emailAddress;
      this.phoneNumber = phoneNumber;
      this.classNumber = classNumber;
      this.random = random;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`; // 템플릿 리터럴 문자열 연결, 기존에는 + 연산자로 연결
      }
    
      set fullName(fullName) {
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
      }
    
      get contactInfo() {
        return `${this.emailAddress} ${this.phoneNumber} ${this.random}`; // 요소 하나 하나를 객체 프로퍼티라고 한다.
      }
    
      set contactInfo(contactInfo) {
        const [emailAddress, phoneNumber, random] = contactInfo.split(" ");
        this.emailAddress = emailAddress;
        this.phoneNumber = phoneNumber;
        this.random = random;
          
      }
    }
  
function join(){ // 회원가입
    }


    