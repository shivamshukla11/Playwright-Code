const {expect, test}= require(`@playwright/test`)
test('Regiistration of the user', async({page})=>{
    const registerHere = page.locator('.text-reset');
    const regFirstName = page.locator('#firstName');
    const regLastName = page.locator('#lastName');
    const regEmail = page.locator('#userEmail');
    const regMobNumber = page.locator('#userMobile');
    const regPassword = page.locator('#userPassword');
    const regCnfPassword = page.locator('#confirmPassword');
    const regAgeCheckbox = page.locator('input[type="checkbox"]');
    const regRegisterBtn = page.locator('#login');
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await registerHere.click();
    await expect(page).toHaveTitle("Let's Shop");
    await regFirstName.fill("shivam");
    await regLastName.fill("shukla");
    await regEmail.fill("shivamdatahub@gmail.com");
    await regMobNumber.fill("8433635945");
    await regPassword.fill("Test@1234");
    await regCnfPassword.fill("Test@1234");
    await regAgeCheckbox.click();
    await regRegisterBtn.click();
    //need too handle page here afer reistration.
    
});

test.only('login', async({page})=>{
    const loginLabel = page.locator('.login-title');
    const loginEmail = page.locator('#userEmail');
    const loginPassword = page.locator('#userPassword');
    const loginBtn = page.locator('#login');
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await expect(loginLabel).toContainText("Log in");
    await loginEmail.fill("shivamdatahub@gmail.com");
    await loginPassword.fill("Test@1234");
    await loginBtn.click();
    const screenText= await page.locator('[style="margin-top: -28px;"]').textContent();
    console.log(screenText);
    console.log(await page.locator('.row b').nth(0).textContent());
})
   
