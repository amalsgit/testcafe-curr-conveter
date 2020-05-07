import { RequestMock } from 'testcafe';

export const coversionMock = RequestMock();
coversionMock
  .onRequestTo(
    'https://cash-conversion-api.dev-tester.com/exchange_rates/convert',
  )
  .respond(
    {
      baseAmount: '100',
      conversion: '11910.35',
      fromCurrency: 'Euro',
      toCurrency: 'Japanese Yen',
    },
    200,
    {
      'Access-Control-Allow-Origin': 'https://cash-conversion.dev-tester.com',
    },
  );
