// To check name to see if it only contains upper and lowercase letters
function checkName(name) {
    if (name.value.length == 0){
        name.style.outlineColor = "black";
        btnEnable(false);
        errorMsg("none", name);
        return false;
    }
    else if (/^[A-Za-z\s]*$/.test(name.value)){
        name.style.outlineColor = "#39FF13";
        errorMsg("none", name);
        return true;
    }
    else{
        name.style.outlineColor = "red";
        errorMsg("name", name);
        btnEnable(false);
        return false;
    }
}

// To check a email to see if it matches anystring@anystring.anystring
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

// To change input outline based on whether email is valid
function checkEmail(address) {
    if (address.value.length == 0){
        address.style.outlineColor = "black";
        errorMsg("none", address);
        btnEnable(false);
        return false;
    }
    else if (validateEmail(address.value)) {
        address.style.outlineColor = "#39FF13";
        errorMsg("none", address);
        return false;
    }     
    else {
        address.style.outlineColor = "red";
        errorMsg("email", address);
        btnEnable(false);
        return false;
    }    
}

// To check a password between 7 to 15 characters which contain at least one numeric digit and a special character
function checkPassword(inPaswd) {
    var paswd=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    if (inPaswd.value.length == 0){
        inPaswd.style.outlineColor = "black";
        errorMsg("none", inPaswd);
        btnEnable(false);
        return false;
    }
    else if(inPaswd.value.match(paswd)) { 
        inPaswd.style.outlineColor = "#39FF13";
        errorMsg("none", inPaswd);
        return true;
    }
    else{ 
        inPaswd.style.outlineColor = "red";
        errorMsg("pw1", inPaswd);
        btnEnable(false);
        return false;
    }
}

// To check if confirm password matches initial given password
function matchPassword(inPaswd) {
    const p1 = document.getElementById('pw1').value;
    if (inPaswd.value.length == 0){
        inPaswd.style.outlineColor = "black";
        errorMsg("none", inPaswd);
        btnEnable(false);
        return false;
    }
    else if(p1 == inPaswd.value) { 
        inPaswd.style.outlineColor = "#39FF13";
        errorMsg("none", inPaswd);
        return true;
    }
    else{ 
        inPaswd.style.outlineColor = "red";
        errorMsg("pw2", inPaswd);
        btnEnable(false);
        return false;
    }
}

function getInfo() {
    const first = document.getElementById('fname').value;
    const last = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const p1 = document.getElementById('pw1').value;
    const p2 = document.getElementById('pw2').value;
  }

function getFriendName() {
    const friend = document.getElementById('friendname').value;
}

// To check if all inputs in form have been filled in
function checkform() {
    var form = document.getElementById("signup").elements;
    var cansubmit = true;
    for (var i = 0; i < form.length; i++) {
        if (form[i].value.length == 0 && form[i].nodeName != "BUTTON"){
            cansubmit = false;
        }
    }
    if (cansubmit){
        document.getElementById('confirm').disabled = false;
        btnEnable(true);
    }
    else{
        document.getElementById('confirm').disabled = true;
    }
}

// Displays error message depending on the error made
function errorMsg(type, field) {
    var valid = true;
    errorBox = field.id + "Error";
    error = document.getElementById(errorBox);
    if (type == "name") {
      valid = false;
      field.classList.add("err");
      error.innerHTML = "Name must be only characters\r\n";
    } 
    else if (type == "email") {
        valid = false;
        field.classList.add("err");
        error.innerHTML = "Please provide a valid email\r\n";
    }
    else if (type == "pw1") {
        valid = false;
        field.classList.add("err");
        error.innerHTML = "Must be between 7 to 15 characters\r\n";
    }
    else if (type == "pw2") {
        valid = false;
        field.classList.add("err");
        error.innerHTML = "Passwords must match\r\n";
    } 
    else {
        field.classList.remove("err");
        error.innerHTML = "";
    }
    return valid;
  }

// Changes css to give disable or enable look to button
// currently not working as intended
function btnEnable(enable) {
    // const btn = document.getElementById("confirm");
    if (enable){
        document.getElementsByClassName("confirm-button").style.opacity = 1;
        // document.getElementById("confirm").style.color = "green";
        // document.getElementById('confirm').style.filter = "1";
    }
    else{
        document.getElementsByClassName("confirm-button").style.opacity = 0.4;
        // document.getElementById('confirm').style.filter = "alpha(opacity=40)";
    }
}
