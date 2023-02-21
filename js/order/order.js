function placeOrder(event) {
  let quantity = document.getElementById("order-quantity").value;
  let price = document.getElementById("order-price").value;
  let type = document.getElementById("order-type").value;

  let orderData = {
    quantity,
    price,
    type,
  };

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
