export const getOrderDataFromOrderForm = () => {
  let quantity = document.getElementById("order-quantity").value;
  let price = document.getElementById("order-price").value;
  let type = document.getElementById("order-type").value;
  let esopType =
    type === "SELL"
      ? document.getElementById("order-esop-type").value
      : "NON_PERFORMANCE";

  return { quantity, price, type, esopType };
};
