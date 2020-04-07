import { Selector } from "testcafe";

fixture("currency convertor").page("https://cash-conversion.dev-tester.com/");

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
    .click(fromCurrencyOptions.withText("Silver Ounce"))
    .click(toCurrency)
    .click(toCurrencyOptions.withText("CFP Franc"))
    .click("#convert_btn");

  await t
    .expect(conversionMsg.innerText)
    .eql("100 Silver Ounce is about 204021.38 CFP Franc");
});
