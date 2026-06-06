window.addEventListener("DOMContentLoaded", async () => {

    const tenUser = document.getElementById("tenUser");
    const chucVu = document.getElementById("chucVu");

    if (tenUser && chucVu) {

        const res = await fetch("/me");
        const data = await res.json();

        if (!data.logged) {
            window.location.href = "/index";
            return;
        }

        tenUser.innerText = data.user.hoten;
        chucVu.innerText =
            `${data.user.chucvu} - ${data.user.chibo}`;
    }
});

function toggleMenu() {

    const menu = document.getElementById("logoutMenu");
    const arrow = document.getElementById("arrowIcon");

    if (menu.style.display === "block") {

        menu.style.display = "none";
        arrow.classList.remove("active");

    } else {

        menu.style.display = "block";
        arrow.classList.add("active");
    }
}

function dangXuat(event) {

    event.stopPropagation();

    window.location.href = "/index";
}

document.addEventListener("click", function (e) {

    const userBox = document.querySelector(".user-box");

    if (!userBox) return;

    const menu = document.getElementById("logoutMenu");
    const arrow = document.getElementById("arrowIcon");

    if (!userBox.contains(e.target)) {

        menu.style.display = "none";
        arrow.classList.remove("active");
    }
});