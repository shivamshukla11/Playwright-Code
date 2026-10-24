const {test, expect}= require('@playwright/test');

test('Registration practice', async ({page})=>{

    // const context =browser.newContext();
    // const page = context.newPage();
    await page.goto("https://rahulshettyacademy.com/client/#/auth/register");
    const firstName = page.locator('#firstName');
    const lastName = page.locator('#lastName');
    const userEmail = page.locator('#userEmail');
    const userPhone = page.locator('#userMobile');
    const occupationDropdown = page.locator('select.custom-select');
    const gender = page.locator('input[type="radio"]');
    const pwd = page.locator('#userPassword');
    const cnfpwd = page.locator('#confirmPassword');
    const ageCheckbox = page.locator('input[type="checkbox"]');
    const register = page.locator('#login');
    const errorLog = page.locator('.toast-message');

    await firstName.fill("shivam");
    await lastName.fill("shukla");
    await userEmail.fill("test@gmail.com");
    await userPhone.fill("8877445566");
    await occupationDropdown.selectOption("Doctor");
    await gender.first().click();
    await pwd.fill("test@123");
    await cnfpwd.fill("test@123");
    await ageCheckbox.click();
    await register.click();
    await expect(errorLog).toBeVisible();

    if (await errorLog.isVisible()){

        console.log(await errorLog.textContent())

    }
    

})