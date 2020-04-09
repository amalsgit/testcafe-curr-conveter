import home_page from "../page_models/home_page";
import "../mocks/api_mocks";
import { coversionMock } from "../mocks/api_mocks";
import { RequestLogger } from "testcafe";

fixture("Log all network calls").page(
  "https://cash-conversion.dev-tester.com/"
);

const logger = RequestLogger(/cash-conversion.dev-tester.com/, {
  logRequestHeaders: true,
  logRequestBody: true,
  logResponseBody: true,
  logResponseHeaders: true,
  
});

test.requestHooks(logger)(
  "Log all network calls during currency conversion",
  async (t) => {
    await t
      .typeText(home_page.conversionValue, "100")
      .click(home_page.fromCurrency)
      .click(home_page.fromCurrencyOptions.withText("Euro"))
      .click(home_page.toCurrency)
      .click(home_page.toCurrencyOptions.withText("Japanese Yen"))
      .click(home_page.convertBtn);

    await t
      .expect(home_page.conversionMsg.innerText)
      .eql("100 Euro is about 12085.581 Japanese Yen");
      console.log(logger.requests.map(r => r.request.url));
  }
);
