import { Selector } from "testcafe";

class HomePage {
  conversionValue = Selector("#base_amount");
  fromCurrency = Selector("#from_currency");
  fromCurrencyOptions = this.fromCurrency.find("option");
  toCurrency = Selector("#to_currency");
  toCurrencyOptions = this.toCurrency.find("option");
  conversionMsg = Selector(".conversion-response");
  convertBtn = Selector("#convert_btn");
}

export default new HomePage();
