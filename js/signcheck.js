function validateForm() {
    var username = document.forms["registrationForm"]["username"].value;
    var password = document.forms["registrationForm"]["password"].value;
    var confirmPassword = document.forms["registrationForm"]["confirmPassword"].value;
    
    // 在這裡進行表單驗證
    if (username == "" || password == "" || confirmPassword == "") {
      alert("請填寫所有必填欄位。");
      return false;
    }
    
    if (password != confirmPassword) {
      alert("密碼和確認密碼不相符。");
      return false;
    }
  }