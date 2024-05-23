const mongoose = require('mongoose');
const Permission = require('./permission');

const schema = mongoose.Schema({
    _description: String,
    _status: Boolean,
    _permissions: [{
        type: mongoose.ObjectId,
        ref: 'Permission'
    }],
    _users: [{
        type: mongoose.ObjectId,
        ref: 'User'
    }],
});

class Role {
    constructor(description, status, permissions) {
        _description = description;
        _status = status;
        _permissions = permissions;
    }
    get description() {
        return this._description;
    }
    set description(description) {
        this._description = description;
    }

    get status() {
        return this._status;
    }
    set status(status) {
        this._status = status;
    }

    get permissions() {
        return this._permissions;
    }
    set permissions(permissions) {
        this._permissions = permissions;
    }
}

schema.loadClass(Role);
module.exports = mongoose.model('Role', schema);