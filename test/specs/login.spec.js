
const LoginPage = require('../pages/login.page')

describe('Demo Tests', () => {
    it('Login Test', async () => {

        browser.url('https://www.saucedemo.com/v1/')

       await LoginPage.login('standard_user', 'secret_sauce')

        // await $('#user-name').setValue('standard_user')
        // await $('#password').setValue('secret_sauce')
        // await $('#login-button').click()

        // await expect ($('#inventory_filter_container')).toHaveTextContaining(
        // 'Products')

        // await $('button[type="submit').click()
    })
})