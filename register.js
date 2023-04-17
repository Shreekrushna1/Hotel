let users = JSON.parse(localStorage.getItem("Users")) || [];
var userRegister =  (event) => {
    event.preventDefault();
    let userData={
        username:document.getElementById("username").value,
        fname:document.getElementById("fname").value,
        lname:document.getElementById("lname").value,
        password:document.getElementById("password").value,
        role:document.getElementById("select").value,
    }
    validateData(userData);
}
var validateData=function(userData){
    if (userData) {
        let userName;
        let passWord;
        let f_name;
        let l_name;
        if (userData.username==0) {
            document.getElementById("error-username").innerHTML="Please Enter Valid Username";
            document.getElementById("error-username").style.color = "red";
            document.getElementById("error-username").style.fontWeight = "300";
            document.getElementById("username").style.height = "45px";
        }
        else{
            document.getElementById("error-username").style.color="green";
            document.getElementById("error-username").innerHTML="Username SuccessFull";
            document.getElementById("error-username").style.fontWeight = "300";
            userName=1;
        }
        if (userData.fname==0) {
            document.getElementById("error-fname").innerHTML="Please Enter Valid First Name";
            document.getElementById("error-fname").style.color = "red";
            document.getElementById("error-fname").style.fontWeight = "300";
            document.getElementById("fname").style.height = "45px";
        }
        else{
            document.getElementById("error-fname").style.color="green";
            document.getElementById("error-fname").innerHTML="First Name SuccessFull";
            document.getElementById("error-fname").style.fontWeight = "300";
            f_name=1;
        }
        if (userData.lname==0) {
            document.getElementById("error-lname").innerHTML="Please Enter Valid Last Name";
            document.getElementById("error-lname").style.color = "red";
            document.getElementById("error-lname").style.fontWeight = "300";
            document.getElementById("lname").style.height = "45px";
        }
        else{
            document.getElementById("error-lname").style.color="green";
            document.getElementById("error-lname").innerHTML="Last Name SuccessFull";
            document.getElementById("error-lname").style.fontWeight = "300";
            l_name=1;
        }
        if (userData.password==0) {
            document.getElementById("error-password").innerHTML="Please Enter Valid Password";
            document.getElementById("error-password").style.color = "red";
            document.getElementById("error-password").style.fontWeight = "300";
            document.getElementById("password").style.height = "45px";
        }
        else{
            document.getElementById("error-password").style.color="green";
            document.getElementById("error-password").innerHTML="Password SuccessFull";
            document.getElementById("error-password").style.fontWeight = "300";
            passWord=1;
        }
        if (userName && f_name && l_name && passWord===1) {
            if (userData.role==="Admin") {
                successAlertAdmin(userData);
            }
            else{
                successAlertUser(userData);
            }  
        }
    }
}

var loginPageNavigate=function () {
    window.location.href='index.html'
}

function successAlertAdmin(userData) {
    Swal.fire({
        icon: 'success',
        title: 'Successfull',
        text: 'Admin Registration Success'
      }).then(() => {
        window.location.href="admin.html";
        users.push(userData);
        localStorage.setItem("Users", JSON.stringify(users));
      });
  }
function successAlertUser(userData) {
    Swal.fire({
        icon: 'success',
        title: 'Successfull',
        text: 'User Registration Success'
      }).then(() => {
        window.location.href="user.html";
        users.push(userData);
        localStorage.setItem("Users", JSON.stringify(users));
      });
  }