const matKhau = document.getElementById("pass");
const conMat = document.getElementById("eye");

/* Ẩn / hiện mật khẩu */
conMat.addEventListener("click", function () {

    if (matKhau.type === "password") {

        matKhau.type = "text";
        conMat.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;

    } else {

        matKhau.type = "password";
        conMat.innerHTML = `<i class="fa-solid fa-eye"></i>`;
    }

});

/* Đăng nhập */
async function dangNhap() {

    let user = document.getElementById("user").value.trim();
    let pass = document.getElementById("pass").value.trim();

    const response = await fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ user, pass })
    });

    const result = await response.json();

    if (result.success) {


        window.location.href = "/index";

    } else {
        alert("Sai tài khoản hoặc mật khẩu");
    }
}