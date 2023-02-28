import { Order } from "../src/scripts/order/order.js";
import { APIClient } from "../src/scripts/apis/client.js";

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

global.document.getElementById = jest.fn((id)=>{
    return document.createElement(id = id.substring(1, id.length));
})


describe("Order", () => {
    let order;
    beforeEach(() => {
        let apiClient = new APIClient(fetch);
        order = new Order(apiClient); 
    });


    test("it should place order", () => {
        let orderData = {
            quantity: 1,
            price: 1,
            type: "BUY"
        };
        let submitEvent = document.createEvent("HTMLEvents");

        order.placeOrder(submitEvent, orderData);
        
        expect(fetch.mock.calls).toHaveLength(1);

    });
});