import {apiResources} from '../resources.json'

const {test, expect} = require('@playwright/test')

test('get record by id', async ({request})=>{

    const response = request.get(
       'https://reqres.in/api/collections/products/records/dbf97921-fa79-4778-be6c-60062ded6123?project_id=55009',
        {
            headers:{
                'x-api-key':apiResources['apiResources'],
                 'X-Reqres-Env': apiResources['x-Reqres-Env']
            }
        });

        const responseBody = await response.json();
       console.log(responseBody);
    const valueToSave = resource.apiResources.SaveRecordId;
    valueToSave = responseBody.data.project_id;
       
});