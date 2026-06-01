const matKhau = document.getElementById("pass");
const conMat = document.getElementById("eye");

conMat.addEventListener("click", function () {

    if (matKhau.type == "password") {

        matKhau.type = "text";

        conMat.innerHTML = `
        <i class="fa-solid fa-eye-slash"></i>
        `;

    } 
    
    else {

        matKhau.type = "password";

        conMat.innerHTML = `
        <i class="fa-solid fa-eye"></i>
        `;

    }

});
async function dangNhap(){

    let user =
    document.getElementById("user").value;

    let pass =
    document.getElementById("pass").value;

    const response = await fetch("/login", {

        method: "POST",

        headers: {

            "Content-Type":
            "application/json"
        },

        body: JSON.stringify({

            user,
            pass

        })

    });

    const result =
    await response.json();

    /* ĐĂNG NHẬP THÀNH CÔNG */

    if(result.success){

        localStorage.setItem(

            "userData",

            JSON.stringify(
                result.user
            )

        );

        window.location.href =
        "/index";

    }

    /* SAI TÀI KHOẢN */

    else{

        alert(
            "Sai tài khoản hoặc mật khẩu"
        );

    }

}