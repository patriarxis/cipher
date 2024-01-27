function generatePassword() {
  var uppercase = document.getElementById("uppercase").checked;
  var lowercase = document.getElementById("lowercase").checked;
  var numbers = document.getElementById("numbers").checked;
  var symbols = document.getElementById("symbols").checked;
  var length = document.getElementById("length").value;

  var charset = "";
  var password = "";

  if (uppercase) {
      charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      password += getRandomChar("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  }
  if (lowercase) {
      charset += "abcdefghijklmnopqrstuvwxyz";
      password += getRandomChar("abcdefghijklmnopqrstuvwxyz");
  }
  if (numbers) {
      charset += "0123456789";
      password += getRandomChar("0123456789");
  }
  if (symbols) {
      charset += "!@#$%^&*()_-+=<>?/";
      password += getRandomChar("!@#$%^&*()_-+=<>?/");
  }

  if (charset === "") {
      alert("Please select at least one option.");
      return;
  }

  for (var i = password.length; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  password = password.split('').sort(function(){return 0.5-Math.random()}).join('');
  
  document.getElementById("generatedPassword").value = password;
}

function getRandomChar(charset) {
  var randomIndex = Math.floor(Math.random() * charset.length);
  return charset.charAt(randomIndex);
}

function copyToClipboard() {
  var passwordField = document.getElementById("generatedPassword");
  passwordField.select();
  document.execCommand("copy");
  alert("Password copied to clipboard!");
}
