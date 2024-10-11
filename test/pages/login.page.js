class LoginPage {
    get usernameTextBox() {
        return $('#user-name')
    }
    get passwordTextBox() {
        return $('#password')
    }
    get loginButton() {
        return $('#login-button')
    }

    async login(username, password){
        await this.usernameTextBox.setValue(username)
        await this.passwordTextBox.setValue(password)
        await this.loginButton.click()
    }
    }

module.exports = new LoginPage()