function validateEmail(email) {
    var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailRegex.test(email);
  }
  function validateUsername(username) {
    var usernameRegex = /^[a-zA-Z0-9]+$/;
    return usernameRegex.test(username);
  }
  var email = "test@example.com";
  var username = "my_username123";
  if (validateEmail(email)) {
    console.log("Email is valid.");
  } else {
    console.log("Email is invalid.");
  }
  if (validateUsername(username)) {
    console.log("Username is valid.");
  } else {
    console.log("Username is invalid.");
  }
  
