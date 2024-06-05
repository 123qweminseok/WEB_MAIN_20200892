// join.js

class SignUp {
  constructor(firstName, birthdayDate, gender, classNumber, registrationCode) {
      this.firstName = firstName;
      this.birthdayDate = birthdayDate;
      this.gender = gender;
      this.classNumber = classNumber;
      this.registrationCode = registrationCode;
  }

  get fullName() {
      return `${this.firstName}`;
  }

  set fullName(fullName) {
      this.firstName = fullName;
  }

  get contactInfo() {
      return `${this.registrationCode}`;
  }

  set contactInfo(contactInfo) {
      this.registrationCode = contactInfo;
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

  // For demonstration, log the object
  console.log(newSignUp);

  // Redirect to join_end.html
  location.href = '/login/join_end.html';
}
