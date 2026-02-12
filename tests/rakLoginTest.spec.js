const {test,expect} = require(`@playwright/test`);


test('Launchaing and verifying the titel of the page', async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rakbankpay-test.rakbanktst.ae/login");
    await expect(page).toHaveTitle("Rakbank");
});