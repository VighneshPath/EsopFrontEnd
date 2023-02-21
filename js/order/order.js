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
          <h1>
              Your order has been placed successfully!!!!
          </h1>
          <h3>Order Details: </h3>
          <div id="order-details">
            ${orderDetails}
          </div>
      </div>
  `;

  let formBody = document.getElementById("place-order-form");
  document.getElementById("order-content").removeChild(formBody);

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
