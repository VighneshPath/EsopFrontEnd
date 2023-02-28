import {getOrderDataFromOrderForm} from "./orderData.js";
import {createOrder} from "./api.js"
import { APIClient } from "../apis/client.js";


class Order{
  constructor(apiClient){
    this.apiClient = apiClient;
  }
  placeOrder = (event, orderData)=>{
    console.log(this);
    console.log(event);
    console.log(orderData);
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
    console.log("1");
    console.log(formBody);
    //document.getElementById("order-content").removeChild(formBody);
    console.log("2");
    let orderResponseDiv = document.getElementById("order-response");
    orderResponseDiv.innerHTML = successfulOrderDetails;
  };
  
  unSuccessfulOrder = (errors) => {
    console.log(errors);
    let errorDetails = "";
    for (let error in errors) {
      errorDetails += `<p class="error-message">${errors[error]}</p>`;
    }
    let orderResponseDiv = document.getElementById("order-response");
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
    let order = new Order(apiClient); 
    order.placeOrder(event, orderData);
  });
})

export {temp, Order}