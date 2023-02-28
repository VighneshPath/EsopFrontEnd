import {config} from "../config.js";

const URL = `${config.baseURL}:${config.port}`;
const api = {
  user: {
    order: {
      createOrder: (userName) => `${URL}/user/${userName}/order`,
      orderHistory: (userName) => `${URL}/user/${userName}/orderHistory`,
    },
  },
};

export {URL, api}
