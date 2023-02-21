const placeOrder = (event) => {
  let orderData = getOrderDataFromOrderForm();

  createOrder(
    orderData,
    (orderResponse) => {
      successfulOrder(orderResponse);
    },
    ({ errors }) => {
      unSuccessfulOrder(errors);
    }
  );
  event.preventDefault();

  return false;
};

const successfulOrder = (orderResponse) => {};

const unSuccessfulOrder = (errors) => {
  console.log(errors);
};
