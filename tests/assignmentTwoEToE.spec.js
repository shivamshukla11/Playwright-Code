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
    const productName = "ZARA COAT 3";
    const productBody = page.locator('.card-body')
    const productCount = await productBody.count();
    console.log(productCount);

    //Loop written for the product match.

    for(let i=0;i<productCount;++i){
       const productMatch = await productBody.nth(i).locator('b');
       console.log(await productMatch.textContent());
       if(await productMatch.textContent()===productName){
        await productBody.nth(i).locator("text= Add To Cart").click();
        break;
       }
    }

    await page.locator("[routerlink*='cart']").click()
    const cartSelection = page.locator('.items h3');
    await cartSelection.waitFor();
    const cartCount = await cartSelection.count();
    for(let i = 0; i<cartCount; ++i){
        const productTitle = await cartSelection.nth(i).textContent();
        if(productTitle===productName){
            await page.getByRole('button',{name:"Checkout"}).click();
        }

    }

    // page.pause()
    console.log(await page.locator('.item__title').textContent());
    await page.locator('.txt').nth(1).fill("121");
    await page.locator('.txt').nth(2).fill("Shivam");

     await page.getByPlaceholder('Select Country').pressSequentially("ind", { delay: 150 }) 
   const dropdown = page.locator(".ta-results");
   await dropdown.waitFor();
   const optionsCount = await dropdown.locator("button").count();
   for (let i = 0; i < optionsCount; ++i) {
      const text = await dropdown.locator("button").nth(i).textContent();
      if (text === " India") {
         await dropdown.locator("button").nth(i).click();
         break;
      }
   }
    //  expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
     await page.locator(".action__submit").click();

    const orderBox = await page.getByText('Thankyou for the order.').waitFor();
    const orderId = orderBox.locator('label').textContent();
    console.log(orderId);

  
});
   
