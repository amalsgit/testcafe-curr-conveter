/* eslint-disable no-console */
import * as apiClient from '../api_calls/apiHelpers';
import * as config from '../utils/loadConfigs';

fixture('Should be able to test api calls').page(config.envConfigs.toDoApp);

test('Verify axios get api call', async t => {
  const response = await apiClient.getToDo;
  console.log(`response code is: ${response.status}`);
  await t.expect(response.status).eql(200);
});
