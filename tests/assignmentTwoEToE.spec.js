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

test.only('Login with registered user', async({page})=>{
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
    expect(await page.locator('.row b').nth(1)).toHaveText("ZARA COAT 3");
    await page.locator('.card-body button').nth(3).click();
    await page.locator('.btn-custom').nth(2).click();
    const productLable = page.locator('.infoWrap h3');
    const priceTag = page.locator('.infoWrap p').nth(1);
    console.log(await productLable.textContent());
    console.log(await priceTag.textContent());
    await page.locator('button.btn-primary').nth(2).click();
    console.log(await page.locator('.item__title').textContent());
    await page.locator('.txt').nth(1).fill("121");
    await page.locator('.txt').nth(2).fill("Shivam");
    await page.locator('.text-validated').nth(2).fill("India");
    await page.locator('.ng-star-inserted a').nth(2).click();
    await page.pause();
  



});
   
