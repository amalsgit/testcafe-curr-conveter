import { t } from "testcafe";

fixture("Test testcafe hooks")
  .before(async (ctx) => console.log("before: fixure hook"))
  .beforeEach(async (t) => console.log("before each test: fixture hook"))
  .after(async (ctx) => console.log("after: fixture hook"))
  .afterEach(async (t) => console.log("after each test: fixture hook"));

test("Test specific hooks should override hooks declared at fixture level", async (t) => {})
  .before(async (t) => console.log("before test hook"))
  .after(async (t) => console.log("after test hook"));

test("Fixture level hooks should apply to the test without locally specified hooks", async (t) => {});
