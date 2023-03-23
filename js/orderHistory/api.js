import { api } from "../apis/api.js";
import { config } from "../config.js";

export default class OrderHistoryAPI {
  getOrderHistory = () => {
    return fetch(api.user.order.orderHistory(config.userName))
      .then((response) => response.json()).then((data) => {
        if (data.ok) {
          return data;
        }
        return Promise.reject(data);
      })
      .then((data) => {
        return data
      })
      .catch((error) => {
        error.json().then((json) => {return json});
      });
  };
}
