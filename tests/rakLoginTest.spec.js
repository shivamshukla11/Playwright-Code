const {test,expect} = require(`@playwright/test`);


test('Launchaing and verifying the titel of the page', async({page})=>{

    // this locator has been picked up by the class
    const screenLable = page.locator('.css-1humagd');
    await page.goto('');
    await expect(page).toHaveTitle("Rakbank");
    await expect(screenLable).toContainText("RAKBANK is your one-stop shop for Online Payment Acceptance Solutions.");
});