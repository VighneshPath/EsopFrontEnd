const temp = require("../src/js/order/order.js")

describe("Filter function", () => {
    test("it should filter by a search term (link)", () => {
        expect(temp.temp()).toEqual(true);
    });
});