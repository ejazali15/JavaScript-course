class User {
    constructor(username, email, password) {
        this.username = username
        this.passowrd = password
        this.email = email
    }
    get passowrd() {
        return this._passowrd = `${this._passowrd}abc`
        
    }
    set passowrd(value) {
        return value
    }
}
const chai = new User("EJaz", "ejaz@google.com", "123")

console.log(chai.passowrd)
