import { htmlElements } from "../../constants/htmlElements";

class OrderHelper {
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
  };

  unSuccessfulOrder = (errors) => {
    let errorDetails = "";
    for (let error in errors) {
      errorDetails += `<p class="error-message">${errors[error]}</p>`;
    }
    let orderResponseDiv = document.getElementById("order-response");
    orderResponseDiv.innerHTML = errorDetails;
  };

  updateEsopDiv = () => {
    let orderEsopDiv = document.getElementById("order-esop-type-div");
    let typeSelect = document.getElementById("order-type");

    let newELement = htmlElements.order.esopDiv;

    if (typeSelect.value === "SELL") {
      orderEsopDiv.innerHTML = newELement;
    } else {
      orderEsopDiv.innerHTML = "";
    }
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
