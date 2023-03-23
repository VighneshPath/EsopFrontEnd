import { api } from "../../apis/api";
import { config } from "../../config";
import OrderAPI from "../../order/api";

describe("Order API test", () => {
  test("it should create an order given required order data", async () => {
    let mockResponse = { ok: true, price: 10, quantity: 10,type: "BUY", };
    let data = {
      price: 10,
      quantity: 10,
      type: "BUY",
    };
    const orderAPI = new OrderAPI();

    const fetchMock = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        json: () => Promise.resolve(mockResponse),
      });
    });
    global.fetch = fetchMock;

    let response = await orderAPI.createOrder(data);

    expect(fetchMock).toHaveBeenCalledWith(
      api.user.order.createOrder(config.userName),
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(response).toEqual(mockResponse);
  });

  test("it should return error given improper order data", async () => {
    let orderAPI = new OrderAPI();
    let data = null;
    let mockResponse = { ok: true };
    const fetchMock = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        json: () => Promise.resolve(mockResponse),
      });
    });
    global.fetch = fetchMock;
    const response = await orderAPI.createOrder(data);
    expect(response).toEqual(mockResponse);
  });
});
