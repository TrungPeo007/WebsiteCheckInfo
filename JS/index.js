window.onload = async function () {

    const res = await fetch("/me");
    const data = await res.json();

    if (!data.logged) {
        window.location.href = "/";
        return;
    }

    let user = data.user;

    document.getElementById("tenUser").innerText = user.hoten;
  document.getElementById("chucVu").innerText =
    user.chucvu + " - " + user.chibo;
};

/* MENU */
function toggleMenu() {
    let menu = document.getElementById("logoutMenu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

/* LOGOUT */
function dangXuat(event) {
    event.stopPropagation();
    window.location.href = "/logout";
}

/* click ngoài tắt menu */
document.addEventListener("click", function (event) {
    let userBox = document.querySelector(".user-box");
    let menu = document.getElementById("logoutMenu");

    if (!userBox.contains(event.target)) {
        menu.style.display = "none";
    }
});
// document.addEventListener("DOMContentLoaded", function() {
//         const btnDropdown = document.getElementById("btn-dropdown-dang");
//         const dropdownMenu = btnDropdown.nextElementSibling;

//         // Khi click vào nút, bật/tắt class .show để ẩn/hiện menu con
//         btnDropdown.addEventListener("click", function(e) {
//             e.stopPropagation(); // Ngăn sự kiện nổi bọt lên window
//             dropdownMenu.classList.toggle("show");
//         });

//         // Tự động đóng menu nếu người dùng click ra bất kỳ vị trí nào khác ngoài menu
//         window.addEventListener("click", function() {
//             if (dropdownMenu.classList.contains("show")) {
//                 dropdownMenu.classList.remove("show");
//             }
//         });
//     });