var btnRegUsername = document.getElementById("username");
var btnRegEmail = document.getElementById("email");
var btnRegAddress = document.getElementById("address");
var btnRegPhone = document.getElementById("phone");
var btnRegPassword = document.getElementById("password");


function registerValidate(){
    if(btnRegUsername.value.length>0 && btnRegEmail.value.length>0 && btnRegAddress.value.length>0 && btnRegPhone.value.length>0 && btnRegPassword.value.length>0){
        var passw=  /^[A-Za-z]\w{7,14}$/;
        if(btnRegPassword.value.match(passw)) 
        { 
            alert("Registeration is Taking place");
        }
        else{
            alert("Weak Password ! \nUse Stron Password\n6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter.");
        }
    }
    else{
        alert("input all fields !");
    }
}