class SignUp {
  constructor(firstName, lastName, birthdayDate, gender, emailAddress, phoneNumber, classNumber, random) {
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
      return `${this.firstName} ${this.lastName}`;
  }

  set fullName(fullName) {
      const [firstName, lastName] = fullName.split(" ");
      this.firstName = firstName;
      this.lastName = lastName;
  }

  get contactInfo() {
      return `${this.emailAddress} ${this.phoneNumber}`;
  }

  set contactInfo(contactInfo) {
      const [emailAddress, phoneNumber] = contactInfo.split(" ");
      this.emailAddress = emailAddress;
      this.phoneNumber = phoneNumber;
  }
}

function handleSubmit() {
  const firstName = document.querySelector("#form3Example1q").value;
  const birthdayDate = document.querySelector("#exampleDatepicker1").value;
  const genderSelect = document.querySelector("select[data-mdb-select-init]");
  const gender = genderSelect.options[genderSelect.selectedIndex].text;
  const classSelect = document.querySelector("select[data-mdb-select-init]");
  const classNumber = classSelect.options[classSelect.selectedIndex].text;
  const registrationCode = document.querySelector("#form3Example1w").value;

  const newSignUp = new SignUp(firstName, birthdayDate, gender, classNumber, registrationCode);

  console.log(newSignUp);

  session_join_set(newSignUp);

  location.href = '/login/join_end.html';
}

// Simple encryption and decryption using Base64 encoding
function encrypt_text(text) {
  return btoa(text);
}

function decrypt_text(text) {
  return atob(text);
}

function session_join_set(newSignUp) {
  if (sessionStorage) {
      const objString = JSON.stringify(newSignUp); //여기서 객체를 json문자열로
      let en_text = encrypt_text(objString);//암호화
      sessionStorage.setItem("Session_Storage_new_user", objString);
      sessionStorage.setItem("Session_Storage_new_user_encryted", en_text);
  } else {
      alert("Session storage is not supported.");
  }
}

function session_join_get() {
  if (sessionStorage) {
      let encryptedData = sessionStorage.getItem("Session_Storage_new_user_encryted");
      if (encryptedData) {
          let decryptedData = decrypt_text(encryptedData);
          let userObject = JSON.parse(decryptedData);
          console.log(userObject);

          // Display user information
          console.log("Full Name: " + userObject.firstName + " " + userObject.lastName);
          console.log("Birthday: " + userObject.birthdayDate);
          console.log("Gender: " + userObject.gender);
          console.log("Email: " + userObject.emailAddress);
          console.log("Phone Number: " + userObject.phoneNumber);
          console.log("Class: " + userObject.classNumber);
          console.log("Random Timestamp: " + userObject.random);
      } else {
          console.log("No encrypted user data found in session storage.");
      }
  } else {
      alert("Session storage is not supported.");
  }
}
