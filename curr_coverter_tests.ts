import home_page from "./page_models/home_page";

fixture("Should be able to perform currency conversion").page(
  "https://cash-conversion.dev-tester.com/"
);

test("Verify success message on currency conversion", async (t) => {
  await t
    .typeText(home_page.conversionValue, "100")
    .click(home_page.fromCurrency)
    .click(home_page.fromCurrencyOptions.withText("Euro"))
    .click(home_page.toCurrency)
    .click(home_page.toCurrencyOptions.withText("Japanese Yen"))
    .click(home_page.convertBtn);

  await t
    .expect(home_page.conversionMsg.innerText)
    .eql("100 Euro is about 12085.58 Japanese Yen");
});
