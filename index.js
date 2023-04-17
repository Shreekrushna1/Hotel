let users = JSON.parse(localStorage.getItem("Users")) || [];
function userLogin(event) {
    event.preventDefault();
    let loginData = {
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
    };
    let loginUser = users.find(
      (item) =>
        item.username === loginData.username &&
        item.password === loginData.password
    );
    if (loginUser) {
      if (loginUser.role === "User") {
        userPanel();
        var uname = loginUser.username;
        var url = "user.html";
        url += "?userName=" + encodeURIComponent(uname);
        window.location.href = url;
        Swal.fire({
            icon: 'success',
            title: 'Successfull',
            text: 'User Log-In Success'
          }).then(() => {
            window.location.href="user.html";
          });
        localStorage.setItem("Users", JSON.stringify(users));
      } else {
        Swal.fire({
            icon: 'success',
            title: 'Successfull',
            text: 'Admin Log-In Success'
          }).then(() => {
            window.location.href="admin.html";
          });
        
      }
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Wrong Input',
            text: 'User Or Admin Not Found'
          })
    }
  }


var registerPageNavigate=function(){
    window.location.href="register.html"
}