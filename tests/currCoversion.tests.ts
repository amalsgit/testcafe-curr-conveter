import * as homePage from '../page_models/home_page';
import * as config from '../utils/loadConfigs';

fixture('Should be able to perform currency conversion').page(
  config.envConfigs.baseUrl,
);

// This test is designed to fail
test('Verify success message on currency conversion', async () => {
  // Given
  await homePage.setFromCurrency('100', 'Euro');
  await homePage.setToCurrency('Japanese Yen');
  // When
  await homePage.convertCurrency();
  // Then
  await homePage.verifyConversion('100 Euro is about 1085.58 Japanese Yen');
});
