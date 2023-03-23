import { api } from "../apis/api.js";
import { config } from "../config.js";
export default class OrderAPI {
  createOrder = (data) => {
    return fetch(api.user.order.createOrder(config.userName), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data)=>{
        if (data.ok) {
          return data;
        }
        return Promise.reject(data);
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        error.json().then((json) => {
          return json;
        });
      });
  };
}
