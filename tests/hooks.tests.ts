/* eslint-disable no-console */

fixture('The one were we test TestCafe hooks')
  .before(async () => console.log('before: fixure hook'))
  .beforeEach(async () => console.log('before each test: fixture hook'))
  .after(async () => console.log('after: fixture hook'))
  .afterEach(async () => console.log('after each test: fixture hook'));

test('Test specific hooks should override hooks declared at fixture level', async () => {})
  .before(async () => console.log('before test hook'))
  .after(async () => console.log('after test hook'));

test('Fixture level hooks should apply to the test without locally specified hooks', async () => {});
