const URL = `${config.baseURL}:${config.port}`;
const api = {
  user: {
    order: {
      createOrder: (userName) => `${URL}/user/${userName}/order`,
      orderHistory: (userName) => `${URL}/user/${userName}/order`,
    },
  },
};
