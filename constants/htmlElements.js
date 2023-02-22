export const htmlElements = {
  order: {
    successfulOrderResponse: (id, response) => `<div style="clear: both;">
      <p class="alignleft">${id}</p> <p class="alignright">${response}</p></div>`,
    successfulOrderDetails: (orderDetails) => `
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
  `,
    esopDiv: ` 
    <label for="order-esop-type">Esop Type</label>
    <select name="order-esop-type" id="order-esop-type">
        <option value="NON_PERFORMANCE">Non Performance</option>
        <option value="PERFORMANCE">Performance</option>
    </select>
    `,
  },
};
