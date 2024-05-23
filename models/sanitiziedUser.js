
class SanitiziedUser {
    constructor({ _name, _lastName, _email, _roles }) {
        this._name = _name;
        this._lastName = _lastName;
        this._email = _email;
        this._roles = _roles;
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

    get roles() {
        return this._roles;
    }
    set roles(roles) {
        this._roles=roles;
    }
}
module.exports = SanitiziedUser;