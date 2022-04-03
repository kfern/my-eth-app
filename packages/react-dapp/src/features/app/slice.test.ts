import reducerUnderTest, { initialState } from "./slice";

import { Show } from "./types";

describe("app reducer", () => {
  it("should handle initial state", () => {
    expect(reducerUnderTest(undefined, { type: "unknown" })).toStrictEqual(initialState);
  });

  it(" by default", () => {
    const expected: Show = {
      wallet: true,
    };
    expect(initialState.show).toStrictEqual(expected);
  });
});
