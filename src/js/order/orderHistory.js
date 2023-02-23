window.onload = () => {
  orderHistory();
};

export const orderHistory = () => {
  getOrderHistory(
    (orderResponse) => {
      successfulOrderHistory(orderResponse);
    },
    ({ errors }) => {
      unSuccessfulOrderHistory(errors);
    }
  );
};

export const successfulOrderHistory = (orderHistoryResponse) => {
  let orderHistoryTableBody = document.getElementById(
    "order-history-table-body"
  );

  orderHistoryResponse.map((order, index) => {
    let tableRow = "";
    Object.keys(order)
      .filter((key) => {
        return key !== "filled";
      })
      .map((key) => {
        tableRow += `<td>${order[key]}</td>`;
      });
    tableRow += `<td>-</td>`;

    orderHistoryTableBody.appendChild(document.createElement("tr")).innerHTML =
      tableRow;
  });
};

export const unSuccessfulOrderHistory = (errors) => {
  let errorDetails = "";
  for (let error in errors) {
    errorDetails += `<p class="error-message">${errors[error]}</p>`;
  }
  let orderResponseDiv = document.getElementById("order-response");
  orderResponseDiv.innerHTML = errorDetails;
};
