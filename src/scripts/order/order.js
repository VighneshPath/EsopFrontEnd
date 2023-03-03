import {getOrderDataFromOrderForm} from "./orderData.js";
import {createOrder} from "./api.js"
import { APIClient } from "../apis/client.js";
import {CustomDocument} from "../docs/doc.js"

class Order{
  constructor(apiClient, customDoc){
    this.apiClient = apiClient;
    this.customDoc = customDoc;
  }
  placeOrder = (event, orderData)=>{
    createOrder(
      this.apiClient,
      orderData,
      (orderResponse) => {
        this.successfulOrder(orderResponse);
      },
      ({ errors }) => {
        this.unSuccessfulOrder(errors);
      }
    );
    event.preventDefault();
  
    return false;
  };
  
  successfulOrder = (orderResponse) => {
    console.log("SUCCESS CALLED");
    let orderDetails = "";
  
    for (let details in orderResponse) {
      orderDetails += `<div style="clear: both;"><p class="alignleft">${details}</p> <p class="alignright">${orderResponse[details]}</p></div>`;
    }
  
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
  
    let formBody = this.customDoc.getElement("place-order-form");
    console.log(this.customDoc);
    this.customDoc.getElement("order-content").removeChild(formBody);
    let orderResponseDiv = this.customDoc.getElement("order-response");
    orderResponseDiv.innerHTML = successfulOrderDetails;
  };
  
  unSuccessfulOrder = (errors) => {
    let errorDetails = "";
    for (let error in errors) {
      errorDetails += `<p class="error-message">${errors[error]}</p>`;
    }
    let orderResponseDiv = this.customDoc.getElement("order-response");
    orderResponseDiv.innerHTML = errorDetails;
  };
}
const temp = ()=>{
  return true;
}

document.addEventListener("DOMContentLoaded", ()=>{
  const selectForm = document.querySelector("#place-order-form")

  selectForm.addEventListener("submit", (event)=>{
    let apiClient = new APIClient();
    let orderData = getOrderDataFromOrderForm();
    let customDoc = new CustomDocument(document);
    let order = new Order(apiClient, customDoc); 
    order.placeOrder(event, orderData);
  });
})

export {temp, Order}