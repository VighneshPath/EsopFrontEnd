window.onload = () => {
  orderHistory();
};

const orderHistory = () => {
  getOrderHistory(
    (orderResponse) => {
      successfulOrderHistory(orderResponse);
    },
    ({ errors }) => {
      unSuccessfulOrderHistory(errors);
    }
  );
};

const successfulOrderHistory = (orderHistoryResponse) => {
  let orderHistoryDiv = document.getElementById("order-history");
  console.log(orderHistoryResponse);
  console.log(orderHistoryDiv);

  let orderHistoryOutput = prettifyOrderHistory(
    JSON.stringify(orderHistoryResponse, undefined, 4)
  );

  orderHistoryDiv.appendChild(document.createElement("pre")).innerHTML =
    orderHistoryOutput;
};

const unSuccessfulOrderHistory = (errors) => {
  let errorDetails = "";
  for (let error in errors) {
    errorDetails += `<p class="error-message">${errors[error]}</p>`;
  }
  let orderResponseDiv = document.getElementById("order-response");
  orderResponseDiv.innerHTML = errorDetails;
};
