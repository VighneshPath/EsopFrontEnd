import {URL, api} from "../apis/api.js";
import {config} from "../config.js";
import {APIClient} from "../apis/client.js";

const createOrder = (
  apiClient,
  data,
  successResponse = () => {},
  failureResponse = () => {}
) => {
  apiClient.post(api.user.order.createOrder(config.userName), data)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      console.log(response);
      return Promise.reject(response);
    })
    .then((data) => {
      console.log(data);
      successResponse(data);
    })
    .catch((error) => {
      console.log(error);
      error.json().then((json) => failureResponse(json));
    });
};

const getOrderHistory = (
  successResponse = () => {},
  failureResponse = () => {}
) => {
  fetch(allAPI.api.user.order.orderHistory(apiConfig.config.userName))
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response);
    })
    .then((data) => {
      console.log(data);
      successResponse(data);
    });
};

export {createOrder, getOrderHistory}
