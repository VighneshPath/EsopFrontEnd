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
    orderDetails += `<div style="clear: both;"><p class="alignleft">${details}</p> <p class="alignright">${orderResponse[details]}</p></div>`;
  }

  console.log(orderDetails);

  let successfulOrderDetails = `
      <div>
          <h1>
              Your order has been placed successfully!!!!
          </h1>
          <div id="order-details">
          <h3>Order Details: </h3>
          <div>
            ${orderDetails}
          </div>
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
const temp = ()=>{
  return true;
}

module.exports = {temp}