class CustomDocument{
    constructor(doc){
        this.doc = doc;
    }

    getElement(...args){
        return this.doc.getElementById(...args);
    }

    querySelect(...args){
        return this.doc.querySelector(...args);
    }
}

export {CustomDocument}