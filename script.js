function login(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var loginMessage = document.getElementById("login-message").value;

    if(username ===  'ujp' && password === "1234"){
        loginMessage.innerHTML = "Login Succesfull !";
        loginMessage.style.color = "green";
    }
    else{
        loginMessage.innerHTML = "Login Failed. Please Check Your Username and Password...";
        loginMessage.style.color = "red";
    }
    alert(`Login  Successfully\nUsernamr: ${username}\nPassword: ${password}\nloginMessage: ${login-message}`);
}
