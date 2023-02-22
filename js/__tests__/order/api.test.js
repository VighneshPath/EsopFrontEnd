import OrderAPI from "../../order/api";

class OrderAPIStub extends OrderAPI {
  createOrder = (
    data,
    successResponse = () => {},
    failureResponse = () => {}
  ) => {
    if (data) {
      successResponse({ ...data, orderId: 1 });
    } else {
      failureResponse("No data sent");
    }
  };
}

describe("Order API test", () => {
  test("it should create an order given required order data", () => {
    let orderAPIStub = new OrderAPIStub();
    let data = {
      price: 1,
      quantity: 2,
      type: "BUY",
    };
    orderAPIStub.createOrder(
      data,
      (response) => {
        expect({ ...data, orderId: 1 }).toEqual(response);
      },
      () => {}
    );
  });

  test("it should return error given improper order data", () => {
    let orderAPIStub = new OrderAPIStub();
    let data = null;
    orderAPIStub.createOrder(
      data,
      () => {},
      (error) => {
        expect(error).toEqual("No data sent");
      }
    );
  });
});
