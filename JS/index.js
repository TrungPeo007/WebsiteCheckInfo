window.onload = function(){

    let data =
    localStorage.getItem("userData");

    /* KIỂM TRA ĐĂNG NHẬP */

    if(!data){

        window.location.href = "/";

        return;

    }

    let user =
    JSON.parse(data);

    /* HIỂN THỊ USER */

    document.getElementById("tenUser")
    .innerText = user.hoten;

    document.getElementById("chucVu")
    .innerText = user.chibo;

}
function toggleMenu() {

    let menu = document.getElementById("logoutMenu");

    if(menu.style.display === "block"){
        menu.style.display = "none";
    }
    else{
        menu.style.display = "block";
    }

}

function dangXuat(event){

    event.stopPropagation();

    window.location.href = "HTML/Login.html";

}
document.addEventListener("click", function(event){

    let userBox = document.querySelector(".user-box");
    let menu = document.getElementById("logoutMenu");

    if(!userBox.contains(event.target)){
        menu.style.display = "none";
    }

});