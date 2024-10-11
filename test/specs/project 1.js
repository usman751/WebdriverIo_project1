describe("Recording 10/11/2024 at 3:40:34 PM", () => {
  it("tests Recording 10/11/2024 at 3:40:34 PM", async () => {
    await browser.setWindowSize(620, 737)
    await browser.url("https://www.saucedemo.com/v1/index.html")
    await expect(browser).toHaveUrl("https://www.saucedemo.com/v1/index.html")
    await browser.$("aria/Username").click()
    await browser.$("aria/Username").setValue("standard_user")
    await browser.$("aria/Password").click()
    await browser.$("/html/body/div[2]/div[2]/div/div[2]").click()
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyDown', value: '' }]
    }])
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyUp', value: '' }]
    }])
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyDown', value: '' }]
    }])
    await browser.$("aria/Password").click()
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyUp', value: '' }]
    }])
    await browser.$("aria/Password").setValue("secret_sauce")
    await browser.$("#login-button").click()
    await expect(browser).toHaveUrl("https://www.saucedemo.com/v1/inventory.html")
    await browser.$("aria/Open Menu").click()
    await browser.$("#logout_sidebar_link").click()
    await expect(browser).toHaveUrl("https://www.saucedemo.com/v1/index.html")
  });
});
