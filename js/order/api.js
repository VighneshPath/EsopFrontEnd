const createOrder = (
  data,
  successResponse = () => {},
  failureResponse = () => {}
) => {
  fetch(api.user.order.createOrder(config.userName), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response);
    })
    .then((data) => {
      console.log(data);
      successResponse(data);
    })
    .catch((error) => {
      error.json().then((json) => failureResponse(json));
    });
};

const getOrderHistory = (
  successResponse = () => {},
  failureResponse = () => {}
) => {
  fetch(api.user.order.orderHistory(config.userName))
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
  // .catch((error) => {
  //   error.json().then((json) => failureResponse(json));
  // });
};
