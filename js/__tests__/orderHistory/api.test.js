import { api } from "../../apis/api";
import { config } from "../../config";
import OrderHistoryAPI from "../../orderHistory/api";

describe("OrderHistory API test", () => {
  test("it should return an order history", async () => {
    let mockResponse = { ok: true };

    const orderHistoryAPI = new OrderHistoryAPI();

    const fetchMock = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        json: () => Promise.resolve(mockResponse),
      });
    });
    global.fetch = fetchMock;

    let response = await orderHistoryAPI.getOrderHistory();

    expect(fetchMock).toHaveBeenCalledWith(
      api.user.order.orderHistory(config.userName)
    );
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(response).toEqual(mockResponse);
  });

  // test("it should return error given improper order data", async () => {
  //   let orderAPI = new OrderAPI();
  //   let data = null;
  //   let mockResponse = { ok: true };
  //   const fetchMock = jest.fn().mockImplementation(() => {
  //     return Promise.resolve({
  //       json: () => Promise.resolve(mockResponse),
  //     });
  //   });
  //   global.fetch = fetchMock;
  //   const response = await orderAPI.createOrder(data);
  //   expect(response).toEqual(mockResponse);
  // });
  
});
