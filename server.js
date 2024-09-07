const express = require("express");
const app = express();
const path = require("path");
const port = 3000;


app.use("/users", require("./routes/api/users"));


app.get("/", (req, res) =>{
    res.sendFile("./views/index.html", {root: __dirname});
});


app.get("/login.html", (req, res) =>{
    res.sendFile(path.join(__dirname, 'views', "login.html"));
});

app.listen(port, () => console.log(`server is listening on port ${port}`));