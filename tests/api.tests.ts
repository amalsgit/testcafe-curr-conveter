import * as apiClient from "../api_calls/api_helpers";
import { ClientFunction } from "testcafe";
import { RequestLogger } from "testcafe";

const clientFunction = ClientFunction(() => {
  return new Promise((resolve) => {
    apiClient.getToDo;
  });
});

const logger = RequestLogger("https://jsonplaceholder.typicode.com/todos/1");

fixture("Should be able to test api calls").page(
  "https://jsonplaceholder.typicode.com/"
);

test("Verify axios get api call", async (t) => {
  const response = await apiClient.getToDo;
  console.log("response code is: " + response.status);
  await t.expect(response.status).eql(200);
});

test.only.requestHooks(logger)(
  "Verify axios get api call as a client function",
  async (t) => {
    const response = await clientFunction;
    console.log(logger.requests.map(r => r.request.url));
    const request = logger.requests[0];

    console.log(request.request.method);
    console.log(request.response.statusCode);
    console.log(request.response.body);
    t.debug();
  }
);
