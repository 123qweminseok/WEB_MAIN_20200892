


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
