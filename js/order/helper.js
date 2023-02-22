import { htmlElements } from "../../constants/htmlElements.js";

export default class OrderHelper {
  successfulOrder = (orderResponse) => {
    let orderDetails = "";

    for (let details in orderResponse) {
      orderDetails += htmlElements.order.successfulOrderResponse(
        details,
        orderResponse[details]
      );
    }

    let successfulOrderDetails =
      htmlElements.order.successfulOrderDetails(orderDetails);

    let formBody = document.getElementById("place-order-form");
    document.getElementById("order-content").removeChild(formBody);

    let orderResponseDiv = document.getElementById("order-response");
    orderResponseDiv.innerHTML = successfulOrderDetails;
    return successfulOrderDetails;
  };

  unSuccessfulOrder = (errors) => {
    let errorDetails = "";
    for (let error in errors) {
      errorDetails += `<p class="error-message">${errors[error]}</p>`;
    }
    let orderResponseDiv = document.getElementById("order-response");
    orderResponseDiv.innerHTML = errorDetails;
  };

  getOrderDataFromOrderForm = () => {
    let quantity = document.getElementById("order-quantity").value;
    let price = document.getElementById("order-price").value;
    let type = document.getElementById("order-type").value;
    let esopType =
      type === "SELL"
        ? document.getElementById("order-esop-type").value
        : "NON_PERFORMANCE";

    return { quantity, price, type, esopType };
  };
}
