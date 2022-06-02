//displays alerts of locally stored user name & pet name at every html page linked 
var u1 = localStorage.getItem("user-fname");
var p1 = localStorage.getItem("pet-name");
var b1 = localStorage.getItem("user-bg");
// chose getElementsByClassName since it's a class in the main.html
fnameElems = document.getElementsByClassName("user-name");
for (let i = 0; i < fnameElems.length; i++) fnameElems[i].innerHTML = u1 +"'s Friend";
pnameElems = document.getElementsByClassName("pet-name");
for (let i = 0; i < pnameElems.length; i++) pnameElems[i].innerHTML = p1.toLowerCase();
// change the background img for main.html
document.getElementById("bg").src= b1;


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
function validateEmail(email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
}

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
        return true;
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
    var pswLen = inPaswd.value.length;
    if (inPaswd.value.length == 0){
        inPaswd.style.outlineColor = "black";
        errorMsg("none", inPaswd);
        btnEnable(false);
        return false;
    }
    else if(pswLen> 6 && pswLen < 16) { 
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

// To get the user info & set local variable for their name to pass to html pages
function getInfo() {
    const first = document.getElementById('fname').value;
    const last = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const p1 = document.getElementById('pw1').value;
    const p2 = document.getElementById('pw2').value;
    localStorage.setItem("user-fname", first);
    window.location.href="name-friend.html";
}

// To get the pet name & set local variable for their name to pass to html pages
function getFriendName() {
    const friend = document.getElementById('friendname').value;
    localStorage.setItem("pet-name", friend);
}

// To check if all inputs in form have been filled in
function checkform() {
    var first = document.getElementById('fname');
    var last = document.getElementById('lname');
    var email = document.getElementById('email');
    var p1 = document.getElementById('pw1');
    var p2 = document.getElementById('pw2');
    if (checkName(first) && checkName(last) && checkEmail(email) && checkPassword(p1) && matchPassword(p2)){
        btnEnable(true);
    }
    else{
        btnEnable(false);
    }
}

// To check if pet name is valid & enable/disable accordingly
function checkPetName() {
    var pet = document.getElementById('friendname');
    if (checkName(pet)){
        btnEnable(true);
    }
    else{
        btnEnable(false);
    }
}

// to diplay error message depending on the error made
function errorMsg(type, field) {
    errorBox = field.id + "Error";
    error = document.getElementById(errorBox);
    if (type == "name") {
      field.classList.add("err");
      error.innerHTML = "Name must be only characters\r\n";
    } 
    else if (type == "email") {
        field.classList.add("err");
        error.innerHTML = "Please provide a valid email\r\n";
    }
    else if (type == "pw1") {
        field.classList.add("err");
        error.innerHTML = "Must be between 7 to 15 characters\r\n";
    }
    else if (type == "pw2") {
        field.classList.add("err");
        error.innerHTML = "Passwords must match\r\n";
    } 
    else {
        field.classList.remove("err");
        error.innerHTML = "";
    }
  }

// to change css & enable/disable button
function btnEnable(enable) {
    if (enable){
        document.getElementById('confirm').disabled = false;
        document.getElementById('confirm').style.opacity = "1";
    }
    else{
        document.getElementById('confirm').disabled = true;
        document.getElementById('confirm').style.opacity = "0.4";
    }
}

// returns index of chosen img in img-bg class
function bgIdx(){
    var chosenIdx = -1;
    var bgOptions = document.getElementsByClassName("img-bg");
    for(var i = 0; i < bgOptions.length; i++){
        if (bgOptions[i].id == "selected"){
            chosenIdx = i;
        }
    }
    return chosenIdx;
}

// highlights chosen bg & enables/disables button based on selection 
function checkBg(bgImg){
    var imgIdx = bgIdx();
    var bgOptions = document.getElementsByClassName("img-bg");
    // unselect previously selected bg img
    if (bgOptions[imgIdx]== bgImg) {
        bgImg.setAttribute("id", "");
        bgImg.style.border = "";
        btnEnable(false);
    }
    // select new bg img
    else if (imgIdx == -1){
        bgImg.setAttribute("id", "selected");
        bgImg.style.border = "3px solid #39FF13";
        btnEnable(true);
    }
    //switch bg imgs
    else{
        bgOptions[imgIdx].setAttribute("id", "");
        bgOptions[imgIdx].style.border = "";
        bgImg.setAttribute("id", "selected");
        bgImg.style.border = "3px solid #39FF13";
        btnEnable(true);
    }
}

// displays src of room chosen after confirmation
function getRoom(){
    var chosenIdx = bgIdx();
    var bgOptions = document.getElementsByClassName("img-bg");
    var bgAddress = bgOptions[chosenIdx].src; 
    var chosenBgAdress = bgAddress.substring(bgAddress.indexOf("quack-app/") + 10);
    localStorage.setItem("user-bg", chosenBgAdress);
    
}
