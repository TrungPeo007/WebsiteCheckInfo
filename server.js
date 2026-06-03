const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

/* CHO PHÉP ĐỌC JSON */

app.use(express.json());

/* STATIC FILE */

app.use("/CSS", express.static("CSS"));
app.use("/Images", express.static("Images"));
app.use("/JS", express.static("JS"));
app.use("/HTML", express.static("HTML"));

/* ROUTE LOGIN */

app.get("/", (req, res) => {

    res.sendFile(
        path.join(__dirname, "HTML/Login.html")
    );

});
app.get("/register",(req,res)=>{
    res.sendFile(
        path.join(__dirname,"HTML/Register.html")
    );
})
/* ROUTE INDEX */

app.get("/index", (req, res) => {

    res.sendFile(
        path.join(__dirname, "HTML/Index.html")
    );

});
/* ROUTE HỆ THỐNG QUẢN LÝ */
app.get("/chamdiem", (req, res) => {

    res.sendFile(
        path.join(__dirname, "HTML/HeThongChamDiem.html")
    );

});
app.get("/hethongquanly", (req, res) => {

    res.sendFile(
        path.join(__dirname, "HTML/HeThongQuanLy.html")
    );

});

app.get("/chitietchamdiem", (req, res) => {
    res.sendFile(path.resolve(__dirname, "HTML/ChiTietChamDiem.html"));
});

/* API LOGIN */
app.post("/login", (req, res) => {

    const { user, pass } = req.body;

    /* ĐỌC FILE JSON */

    const dataPath = path.join(
        __dirname,
        "data",
        "data.json"
    );

    const data = JSON.parse(
        fs.readFileSync(dataPath, "utf8")
    );

    /* TÌM TÀI KHOẢN */

    const account = data.taikhoan.find(acc => {

        return (

            acc.user === user &&
            acc.pass === pass

        );

    });

    /* NẾU ĐÚNG */

    if (account) {

        res.json({

            success: true,
            user: account

        });

    }

    /* NẾU SAI */

    else {

        res.json({

            success: false

        });

    }

});

/* CHẠY SERVER */

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});