
const { PresentationChartBarIcon } = require("@heroicons/react/16/solid");
const {test, expect} = require(`@playwright/test`);
const { ChildProcess } = require("child_process");
const { text } = require("stream/consumers");

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

test('Launching the main test page and having correct title', async({page}) => {
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
//to verify that we have the same expected tite for the requested page.
await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
// selecting and targeting locator.
await page.locator('#username').fill("learning");
await page.locator('#password').fill("learning");
await page.locator('#signInBtn').click();
console.log(await page.locator("[style*='block']").textContent());

});

// how to write CSS selector in playwright
// If Id is Present.
// css -> tagname#id (or) #id

// if class attribute is Present
// css -> tagname.class (or) .class

// write css based on any attribute
// css -> [attribute='value']

// write css with traversing from parent to Child
// css -> parenttagname >> childtagname

// if needs to write the locator based on text
// text=''