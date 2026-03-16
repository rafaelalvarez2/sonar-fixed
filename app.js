const express = require("express");
const app = express();

// password stored in environment variable
// Modificado
const password = process.env.APP_PASSWORD;

app.get("/login", function(req, res){

    const username = req.query.username;
    const userpassword = req.query.password;

    if(userpassword === password){
        console.log("User logged in:", username);
        res.send("Welcome " + username);
    } else {
        res.send("Access denied");
    }

});

app.listen(3001, () => {
    console.log("Server running on port 3001");
});
