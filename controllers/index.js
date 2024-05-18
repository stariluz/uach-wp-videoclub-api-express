const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const user = require('../models/user');

function home(req, res, next) {
    res.render('index', { title: 'Express' });
}
function login(req, res, next) {
    const { email, password } = req.body;
    const jwtKey = "c2c3416e440dc7ad082c788352d983be";

    User.findOne({ _email: email }).then(async (user) => {
        if (user) {
            console.log(user);
            return {
                tryPassword: await bcrypt.hash(password, user.salt),
                userPassword: user.password,
            };
        } else {
            throw "Usuario o contraseña incorrectos";
        }
    }).then(({ tryPassword, userPassword }) => {
        console.log(tryPassword, userPassword);
        if (tryPassword === userPassword) {
            res.status(200).json({
                msg: "Successful login",
                obj: jwt.sign({
                    data: user._id,
                    exp: Math.floor(Date.now() / 1000) + 180,
                }, jwtKey),
            });
        } else {
            throw "Usuario o contraseña incorrectos";
        }
    }).catch((err) => {
        res.status(403).json({
            msg: "Login failed",
            obj: err,
        });
    });
    // res.render('login', { title: 'Express' });
}

module.exports = { home, login };