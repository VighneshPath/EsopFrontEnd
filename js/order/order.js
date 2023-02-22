class Order {
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
}
