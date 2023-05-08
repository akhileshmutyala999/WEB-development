require('dotenv').config(); //dotenv config

const express = require('express');
const app = express();
const path = require('path');

const UserRouter = require('./server/routes/user');
const PostRouter = require('./server/routes/post');

app.use(express.json());  //json bodies

app.use(express.static(__dirname + "/public"));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, "/public/login.html")));

//cors middleware
app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    next();
});
 

app.use("/users", UserRouter);
app.use("/posts",PostRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server started on port ${PORT}!`));