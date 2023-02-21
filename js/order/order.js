const placeOrder = (event) => {
  let orderData = getOrderDataFromOrderForm();

  createOrder(
    orderData,
    (data) => {
      console.log(data);
    },
    (error) => {
      console.log(error);
    }
  );
  event.preventDefault();

  return false;
}
