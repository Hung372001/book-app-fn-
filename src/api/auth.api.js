import HttpRequest from "./httpRequest";

class AuthAPI extends HttpRequest {
    constructor() {
        super()
    }
    login(data, options) {
        return this.postRequest("/auth/sign-in", data, options)
    }
    register(data, options) {
        return this.postRequest("/auth/sign-up", data, options)
    }
    getbook(data, options) {
        return this.postRequest("/book/test", data, options)
    }

    search(stringSeacrh, page, data) {
        console.log(stringSeacrh)
        return this.postRequest(`book/search/${stringSeacrh}/page=${page}`, data)
    }
    getBookCateAndPrice(page, data, options) {

        console.log(page)
        return this.postRequest(`book/test/page=${page}`, data, options)

    }
    createOrder(data, options) {
        return this.postRequest("/order-prant/", data, options)
    }


    getNXP(data, options) {
        return this.getRequest("/nha-xuat-ban", data, options)
    }
    getbookName(data, options) {
        return this.getRequest("/book-name", data, options)
    }
    getTheLoai(data, options) {

        return this.getRequest("/loai-sach", data, options)
    }
    getBia(data, options) {
        return this.getRequest("/bia", data, options)
    }
    getBookbyId(id) {
        return this.getRequest(`/book/${id}`)
    }
    getBookbyCategory(category) {
        return this.getRequest(`/book/category/${category}`)
    }
    getBookbyTacGia(tacGia) {
        return this.getRequest(`/book/tac-gia/${tacGia}`)
    }
    getBookbyNhaXuatBan(tacGia) {
        return this.getRequest(`/book/nha-xuat-ban/${tacGia}`)
    }
    getBookToPrice(min, max) {
        return this.getRequest(`/book/fillterPrice/${min}&${max}`)
    }
    getLoaiSach() {
        return this.getRequest(`/loai-sach`)
    }
    getNgonNguSach() {
        return this.getRequest(`/ngon-ngu-sach`)
    }


    getNhaXuatBan(data, options) {
        return this.getRequest(`/nha-xuat-ban`)
    }

}

export default new AuthAPI()