import { Selector, t } from 'testcafe';

const coversionHome = Selector('#__next').withText('Cash Conversion');
const conversionValue = Selector('#base_amount');
const fromCurrency = Selector('#from_currency');
const fromCurrencyOptions = fromCurrency.find('option');
const toCurrency = Selector('#to_currency');
const toCurrencyOptions = toCurrency.find('option');
const conversionMsg = Selector('.conversion-response');
const convertBtn = Selector('#convert_btn');

export const assertHomePage = () => t.expect(coversionHome.exists).ok();

export const setFromCurrency = (amount: string, currency: string) =>
  t
    .typeText(conversionValue, amount, { replace: true, speed: 0.5 })
    .click(fromCurrency)
    .click(fromCurrencyOptions.withText(currency), { speed: 0.5 });

export const setToCurrency = (currency: string) =>
  t
    .click(toCurrency)
    .click(toCurrencyOptions.withText(currency), { speed: 0.5 });

export const convertCurrency = () =>
  t.expect(convertBtn.visible).ok().click(convertBtn, { speed: 0.5 });

export const verifyConversion = (confirmationMsg: string) =>
  t.expect(conversionMsg.innerText).eql(confirmationMsg);
