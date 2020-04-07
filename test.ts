import { Selector } from "testcafe";

fixture("currency convertor").page("https://cash-conversion.dev-tester.com/");

test("Should be able to convert currency", async (t) => {
    await t.maximizeWindow;
});
