import { Order } from "../src/scripts/order/order.js";
import { APIClient } from "../src/scripts/apis/client.js";

jest.mock("../src/scripts/docs/doc.js");

import {CustomDocument} from "../src/scripts/docs/doc.js";

describe("Order", () => {
    let order;

    test("it should place order", () => {
        const jsdomAlert = window.alert;  // remember the jsdom alert
        window.alert = () => {};  // provide an empty implementation for window.alert
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
        CustomDocument.mockImplementation(()=>{
            return{
                getElement: jest.fn(()=>{
                    return {
                        removeChild(){
                            return 1;
                        }
                    }
                }),
                querySelector: jest.fn(()=>{})
            }
        });
        let doc = new CustomDocument(document);
        let orderData = {
            quantity: 1,
            price: 1,
            type: "BUY"
        };
        let submitEvent = document.createEvent("HTMLEvents");
        let apiClient = new APIClient(fetch);
        order = new Order(apiClient, doc); 

        order.placeOrder(submitEvent, orderData);

        expect(fetch.mock.calls).toHaveLength(1);
        console.log(CustomDocument.mock.contexts[0].getElement.mock);
        //expect(doc.getElement.mock.calls).toHaveBeenCalled();
    });

    test("it should place a failing order", () => {
        const jsdomAlert = window.alert;  // remember the jsdom alert
        window.alert = () => {};  // provide an empty implementation for window.alert
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
        CustomDocument.mockImplementation(()=>{
            return{
                getElement: jest.fn(()=>{
                    return {
                        removeChild(){
                            return 1;
                        }
                    }
                }),
                querySelector: jest.fn(()=>{})
            }
        });
        let doc = new CustomDocument(document);
        let orderData = {
            quantity: 1,
            price: 1,
            type: "BUY"
        };
        let submitEvent = document.createEvent("HTMLEvents");
        let apiClient = new APIClient(fetch);
        order = new Order(apiClient, doc); 

        order.placeOrder(submitEvent, orderData);

        expect(fetch.mock.calls).toHaveLength(1);
        let allEle = document.getElementsByClassName("error-message");
        for(var i = 0; i < allEle.length; i++){
            console.log(allEle[i]);
        }
        console.log(allEle.length);
        window.alert = jsdomAlert;
    });
});