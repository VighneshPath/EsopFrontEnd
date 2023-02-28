import { Order } from "../src/scripts/order/order.js";
import { APIClient } from "../src/scripts/apis/client.js";


global.document.getElementById = jest.fn((id)=>{
    return document.createElement(id = id.substring(1, id.length));
})


describe("Order", () => {
    let order;

    test("it should place order", () => {
        const dummyReturnData = 
            {orderId: '2', quantity: '1', price: '1'};
        fetch = jest.fn(() => {
            return new Promise((resolve, reject)=>{
                resolve({
                    ok:true,
                    json: () => dummyReturnData
                })
            })
        });
        let orderData = {
            quantity: 1,
            price: 1,
            type: "BUY"
        };
        let submitEvent = document.createEvent("HTMLEvents");
        let apiClient = new APIClient(fetch);
        order = new Order(apiClient); 

        order.placeOrder(submitEvent, orderData);

        expect(fetch.mock.calls).toHaveLength(1);
        expect(document.getElementById("order-details")).toBeInstanceOf(HTMLElement);
    });

    test("it should place a failing order", () => {
        const dummyReturnData = 
            {errors:["Invalid quantity"]};
        fetch = jest.fn(() => {
            return new Promise((resolve, reject)=>{
                resolve({
                    ok:false,
                    json: () => new Promise((resolve, reject)=>resolve(dummyReturnData))
                })
            })
        });
        let orderData = {
            quantity: 1,
            price: 1,
            type: "BUY"
        };
        let submitEvent = document.createEvent("HTMLEvents");
        let apiClient = new APIClient(fetch);
        order = new Order(apiClient); 

        order.placeOrder(submitEvent, orderData);

        expect(fetch.mock.calls).toHaveLength(1);
        let allEle = document.getElementsByClassName("error-message");
        for(var i = 0; i < allEle.length; i++){
            console.log(allEle[i]);
        }
        console.log(allEle.length);
        expect(document.getElementById("order-details")).toBeInstanceOf(HTMLElement);
    });
});