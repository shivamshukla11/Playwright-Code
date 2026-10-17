const {test, expect} = ('@playwright/test')

test('get record by id', async ({request})=>{

    const response = request.get(
        'https://reqres.in/api/collections/products/records/dbf97921-fa79-4778-be6c-60062ded6123?project_id=55009',
        {
            headers:{
                'x-api-key':'free_user_3KmiIiQp5g8UtwZvzxVanWdtD8',
                 'X-Reqres-Env': 'prod'
            }
        });
});