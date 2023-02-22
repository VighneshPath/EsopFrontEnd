export default class Order {
  orderHelper = new OrderHelper();
  placeOrder = (event) => {
    let orderData = this.orderHelper.getOrderDataFromOrderForm();

    createOrder(
      orderData,
      (orderResponse) => {
        this.orderHelper.successfulOrder(orderResponse);
      },
      ({ errors }) => {
        this.orderHelper.unSuccessfulOrder(errors);
      }
    );
    event.preventDefault();

    return false;
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
}
