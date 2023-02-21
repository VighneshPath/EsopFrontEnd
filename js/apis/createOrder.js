const createOrder = (
  data,
  successResponse = () => {},
  failureResponse = () => {}
) => {
  console.log(api.user.order.createOrder(config.userName));
  fetch(api.user.order.createOrder(config.userName), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => successResponse(data))
    .catch((e) => failureResponse(e));
};
