
const {test, expect} = require(`@playwright/test`);

//launching page using the browser.
test('This is for the using browser fixture', async({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.youtube.com");
});

//launching the page using the page.
test('this is for the launching browser by using page fiture', async({page}) => {
await page.goto("https://www.google.com");
});

//if only one test we want to run s we need to add ".only".

test.only('Launching the main test page and having correct title', async({page}) => {
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
//to verify that we have the same expected tite for the requested page.
await  expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
});