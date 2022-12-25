import
AuthAPI
from './../api/auth.api'
class Book {
    async getAllBook() {
        let res = await AuthAPI.getbook();
        if (res.status != 200) {
            return []
        }
        return res.data.book;
    }
    async getNXP() {
        let res = await AuthAPI.getNXP();
        if (res.status != 200) {
            return []
        }
        return res.data.nhaXuatBan;
    }
    async getNgonNguSach() {
        let res = await AuthAPI.getNgonNguSach();
        if (res.status != 200) {
            return []
        }
        return res.data.ngonNguSach;
    }
}
export default new Book