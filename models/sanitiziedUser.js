
class SanitiziedUser {
    constructor({ name, lastName, email, roles }) {
        this._name = name;
        this._lastName = lastName;
        this._email = email;
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

    get roles() {
        return this._roles;
    }
    set roles(roles) {
        this._roles=roles;
    }
}
module.exports = SanitiziedUser;