import OrderHistoryAPI from "../../orderHistory/api.js";

const orderData = {
  order: {
    id: 1,
    price: 3,
  },
};

class OrderHistoryAPIStub extends OrderHistoryAPI {
  constructor(promise) {
    super();
    this.promise = promise;
  }

  getOrderHistory = (
    successResponse = () => {},
    failureResponse = () => {}
  ) => {
    this.promise
      .then((response) => {
        successResponse(response);
      })
      .catch((error) => {
        failureResponse(error);
      });
  };
}

describe("Order history API test", () => {
  test("it should return order history", () => {
    let successPromise = new Promise((resolve) => {
      resolve(orderData);
    });

    const orderHistoryAPIStub = new OrderHistoryAPIStub(successPromise);
    orderHistoryAPIStub.getOrderHistory(
      (response) => expect(response).toEqual(orderData),
      () => {}
    );
  });

  test("it should return an error message", () => {
    let failurePromise = new Promise((resolve, reject) => {
      reject(new Error("No data to send"));
    });
    const orderHistoryAPIStub = new OrderHistoryAPIStub(failurePromise);
    orderHistoryAPIStub.getOrderHistory(
      () => {},
      (err) => expect(err.message).toEqual("No data to send")
    );
  });
});
