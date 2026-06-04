const express = require("express");
const fs = require("fs");
const path = require("path");
const session = require("express-session");

const app = express();

/* JSON BODY */
app.use(express.json());

/* SESSION */
app.use(
    session({
        secret: "hethong-dangbo-secret",
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 60 // 1 giờ
        }
    })
);

/* STATIC FILE */
app.use("/CSS", express.static("CSS"));
app.use("/Images", express.static("Images"));
app.use("/JS", express.static("JS"));
app.use("/HTML", express.static("HTML"));

/* ========== ROUTE PAGE ========== */

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "HTML/Login.html"));
});

app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "HTML/Register.html"));
});

/* CHẶN INDEX NẾU CHƯA LOGIN */
app.get("/index", (req, res) => {
    if (!req.session.user) {
        return res.redirect("/");
    }

    res.sendFile(path.join(__dirname, "HTML/Index.html"));
});

app.get("/chamdiem", (req, res) => {
    res.sendFile(path.join(__dirname, "HTML/HeThongChamDiem.html"));
});

app.get("/hethongquanly", (req, res) => {
    res.sendFile(path.join(__dirname, "HTML/HeThongQuanLy.html"));
});

app.get("/chitietchamdiem", (req, res) => {
    res.sendFile(path.resolve(__dirname, "HTML/ChiTietChamDiem.html"));
});

/* ========== LOGIN API (SESSION) ========== */

app.post("/login", (req, res) => {

    const { user, pass } = req.body;

    const dataPath = path.join(__dirname, "data", "data.json");

    const data = JSON.parse(fs.readFileSync(dataPath, "utf8"));

    const account = data.taikhoan.find(acc =>
        acc.user === user && acc.pass === pass
    );

    if (!account) {
        return res.json({ success: false });
    }

    /* 🔥 LƯU SESSION */
    req.session.user = account;

    res.json({
        success: true,
        user: account
    });
});

/* ========== LẤY USER SESSION ========== */
app.get("/me", (req, res) => {
    if (!req.session.user) {
        return res.json({ logged: false });
    }

    res.json({
        logged: true,
        user: req.session.user
    });
});

/* ========== LOGOUT ========== */
app.get("/logout", (req, res) => {
    req.session.destroy(() => {
        res.redirect("/");
    });
});

/* START SERVER */
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});