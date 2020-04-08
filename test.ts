import { Selector } from "testcafe";
import { RequestMock } from "testcafe";

fixture("currency convertor")
  .page("https://cash-conversion.dev-tester.com/")
  .before(async (ctx) => console.log("before hook"))
  .beforeEach(async (t) => console.log("before each hook"))
  .after(async (ctx) => console.log("after hook"))
  .afterEach(async (t) => console.log("after each hook"));

const conversionMock = RequestMock();
conversionMock
  .onRequestTo(
    "https://cash-conversion-api.dev-tester.com/exchange_rates/convert"
  )
  .respond(
    {
      baseAmount: "100",
      conversion: "11910.35",
      fromCurrency: "Euro",
      toCurrency: "Japanese Yen",
    },
    200,
    { "Access-Control-Allow-Origin": "https://cash-conversion.dev-tester.com" }
  );

const fromCurrency = Selector("#from_currency");
const fromCurrencyOptions = fromCurrency.find("option");
const toCurrency = Selector("#to_currency");
const toCurrencyOptions = toCurrency.find("option");
const conversionMsg = Selector(".conversion-response");

test("Should be able to convert currency", async (t) => {
  await t.maximizeWindow;

  await t
    .typeText("#base_amount", "100")
    .click(fromCurrency)
    .click(fromCurrencyOptions.withText("Euro"))
    .click(toCurrency)
    .click(toCurrencyOptions.withText("Japanese Yen"))
    .click("#convert_btn");

  await t
    .expect(conversionMsg.innerText)
    .eql("100 Euro is about 12085.58 Japanese Yen")
    .takeScreenshot();
});

test.requestHooks(conversionMock)(
  "Should be able to convert currency with mock backend",
  async (t) => {
    await t.maximizeWindow;

    await t
      .typeText("#base_amount", "100")
      .click(fromCurrency)
      .click(fromCurrencyOptions.withText("Euro"))
      .click(toCurrency)
      .click(toCurrencyOptions.withText("Japanese Yen"))
      .click("#convert_btn");

    await t
      .expect(conversionMsg.innerText)
      .eql("100 Euro is about 11910.351 Japanese Yen")
      .takeScreenshot();
  }
);
