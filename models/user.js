const mongoose = require('mongoose');

const schema = mongoose.Schema({
    _name: String,
    _lastName: String,
    _email: String,
    _password: String,
    _salt: String,
    _roles: [{
        type: mongoose.ObjectId,
        ref: 'Role'
    }],
});

class User {
    constructor(name, lastName, email, password, salt, roles) {
        this._name = name;
        this._lastName = lastName;
        this._email = email;
        this._password = password;
        this._salt = salt;
        this._roles = roles;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name=name;
    }

    get lastName() {
        return this._lastName;
    }
    set lastName(lastName) {
        this._lastName=lastName;
    }

    get email() {
        return this._email;
    }
    set email(email) {
        this._email=email;
    }

    get password() {
        return this._password;
    }
    set password(password) {
        this._password=password;
    }

    get salt() {
        return this._salt;
    }
    set salt(salt) {
        this._salt=salt;
    }

    get roles() {
        return this._roles;
    }
    set roles(roles) {
        this._roles=roles;
    }
}

schema.loadClass(User);
module.exports = mongoose.model('User', schema);