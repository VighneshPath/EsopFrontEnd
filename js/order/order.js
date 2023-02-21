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

const successfulOrder = (orderResponse) => {
  let orderDetails = "";

  for (let details in orderResponse) {
    orderDetails += `<p>${details}: ${orderResponse[details]}</p>`;
  }

  console.log(orderDetails);

  let successfulOrderDetails = `
      <div>
          <h3>
              Your order has been placed successfully!!!!
          </h3>
          <h5>Order Details: </h5>
          <div id="order-details">
            ${orderDetails}
          </div>
      </div>
  `;

  let formBody = document.getElementById("place-order-form");
  document.getElementsByTagName("body")[0].removeChild(formBody);

  let orderResponseDiv = document.getElementById("order-response");
  orderResponseDiv.innerHTML = successfulOrderDetails;
};

const unSuccessfulOrder = (errors) => {
  let errorDetails = "";
  for (let error in errors) {
    errorDetails += `<p class="error-message">${errors[error]}</p>`;
  }
  let orderResponseDiv = document.getElementById("order-response");
  orderResponseDiv.innerHTML = errorDetails;
};
