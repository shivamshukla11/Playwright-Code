const {expect, test}= require(`@playwright/test`)

test("first get dataapi", async ({request})=>{

    const response = await request.get(
        'https://reqres.in/api/collections?project_id=55009',
        {
        headers:{
            'x-api-key':'free_user_3KmiIiQp5g8UtwZvzxVanWdtD8',
            'X-Reqres-Env': 'prod'
        }
    })
    const statusCode = response.status();

    if (statusCode==200){
    const resBody = await response.json();
    console.log(resBody)
    }else{
        console.log("failed")
    }

});