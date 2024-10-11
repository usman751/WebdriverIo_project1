describe('Demo Tests', function () {
    it('My First Test', async () => {
     browser.url('https://www.google.com/')
        await $('[name="q"]').setValue("Webdriverio")
        // await $('[name="btnK"]').click()
        browser.keys('Enter')
        browser.pause(4000)
    })
})