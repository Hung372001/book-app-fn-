import instance from "../utils/axiosConfig";
class HttpRequest {
    constructor(){
    }
    getRequest(url, options){
      return  instance({
            method: "GET",
            url,
            ...options
        })
    }
    postRequest(url, data, options){
      return  instance({
            method: "POST",
            url,
            data,
            ...options
        })
    }
}
export default HttpRequest