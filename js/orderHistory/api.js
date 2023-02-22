export default class OrderHistoryAPI {
  getOrderHistory = (
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
        successResponse(data);
      })
      .catch((error) => {
        error.json().then((json) => failureResponse(json));
      });
  };
}
