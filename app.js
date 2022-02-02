const express = require("express");
const app = express();
require('dotenv').config();
require("./db_connection");
const UserRoutes = require("./routes/user");
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
const cors = require("cors");

const User = require("./model/user");
const PostRoutes = require("./routes/post");
const OrderRoutes = require("./routes/order");

app.use(cors());
app.use(bodyParser.json());

app.use("/api/v1/post/", function(req, res, next) {
    // console.log(req.headers);
    const token = req.headers.authorization.split('Bearer ')[1];
    if (!token){
        return res.status(401).json({
            status: "failed",
            message: "Not authenticated"
        })
    }
    console.log(token)
    jwt.verify(token, process.env.SECRET, async function(err, decoded) {
        // console.log(err, decoded) // bar
        if (err){
            res.status(500).json({
                status: "failed",
                message: "Invalid Error"
            })
        }
        // console.log(decoded)
        const user = await User.findOne({ _id: decoded._id });
        if (user){
            req.user = user._id;
            next();
        }else{
            res.status(500).json({
                status: "failed",
                message: "Invalid Token"
            })
        }
    });
})

app.use("/api/v1/user/", UserRoutes);
app.use("/api/v1/post/", PostRoutes);
app.use("/api/v1/order/", OrderRoutes);

app.use("*", function(req, res) {
    res.status(500).json({
        status: "failed",
        message: "Invalid API"
    })
})

app.listen(process.env.PORT, "localhost", function(){
    console.log(`Server running at http://localhost:${process.env.PORT}/`)
})