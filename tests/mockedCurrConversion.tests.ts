import * as homePage from '../page_models/home_page';
import { coversionMock } from '../mocks/api_mocks';
import * as config from '../utils/loadConfigs';

fixture('Should be able to perform currency conversion').page(
  config.envConfigs.baseUrl,
);

test.requestHooks(coversionMock)(
  'Verify success message on currency conversion with service mock',
  async () => {
    // Given
    await homePage.assertHomePage();
    await homePage.setFromCurrency('100', 'Euro');
    await homePage.setToCurrency('Japanese Yen');
    // When
    await homePage.convertCurrency();
    // Then
    await homePage.verifyConversion('100 Euro is about 11910.351 Japanese Yen');
  },
);
