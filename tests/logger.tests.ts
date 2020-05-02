/* eslint-disable no-console */
import { RequestLogger } from 'testcafe';
import * as homePage from '../page_models/home_page';
import * as config from '../utils/loadConfigs';

fixture('Log all network calls').page(config.envConfigs.baseUrl);

const logger = RequestLogger(/cash-conversion.dev-tester.com/, {
  logRequestHeaders: true,
  logRequestBody: true,
  logResponseBody: true,
  logResponseHeaders: true,
});

test.requestHooks(logger)(
  'Log all network calls during currency conversion',
  async () => {
    // Given
    await homePage.setFromCurrency('100', 'Euro');
    await homePage.setToCurrency('Japanese Yen');
    // When
    await homePage.convertCurrency();
    // Then
    await homePage.verifyConversion('100 Euro is about 11910.35 Japanese Yen');
    console.log(logger.requests.map(r => r.request.url));
  },
);
