class APIClient{
    constructor(apiClient = (...args) => window.fetch(...args)){
        this.apiClient = apiClient;
    }
    post = (url, data)=>{
        return this.apiClient(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
          })
    }
}

export {APIClient}