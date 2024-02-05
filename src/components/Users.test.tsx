import { render, screen } from "@testing-library/react";
import Users from "./Users";
import { SERVER_HOST } from "../constants";

// const nock = require("nock");
import * as nock from 'nock'

describe("User", () => {
  // afterEach(() => nock.cleanAll());

  it.only("renders a list of users", async () => {
    nock(SERVER_HOST).get("/users").reply(200, [{x:1}]);

    // .reply(200, [
    //   {
    //     id: 1,
    //     name: "Leanne Graham",
    //     username: "Bret",
    //     email: "Sincere@april.biz",
    //     address: {
    //       street: "Kulas Light",
    //       suite: "Apt. 556",
    //       city: "Gwenborough",
    //       zipcode: "92998-3874",`
    //       geo: {
    //         lat: "-37.3159",
    //         lng: "81.1496",
    //       },
    //     },
    //     phone: "1-770-736-8031 x56442",
    //     website: "hildegard.org",
    //     company: {
    //       name: "Romaguera-Crona",
    //       catchPhrase: "Multi-layered client-server neural-net",
    //       bs: "harness real-time e-markets",
    //     },
    //   },
    // ]);

    await render(<Users />);
    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(10);
  });
});
