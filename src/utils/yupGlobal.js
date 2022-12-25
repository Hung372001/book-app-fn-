import * as yup from 'yup'


export const SignupSchema = yup.object().shape({
    email: yup.string().required("Email Không được bỏ trông").email("email Không đúng định dạng"),
    phoneNumber: yup.string().matches(
        /^((09|03|07|08|05)+([0-9]{8})\b)/g, "Số điện thoại Không đúng định dạng.").required('Số điện thoại Không được bỏ trống'),
    FirstName: yup.string().required('Họ Không được bỏ trống'),
    LastName: yup.string().required('Tên Không được bỏ trống'),
    password: yup.string().min(6, 'Mật Khẩu phải lớn hơn 6 kí tự').required('Mật Khẩu Không được bỏ trống'),
});

export const SigninSchema = yup.object().shape({
    email: yup.string().required("Email Không được bỏ trông").email("email Không đúng định dạng"),

    password: yup.string().min(6, 'Mật Khẩu phải lớn hơn 6 kí tự').required('Mật Khẩu Không được bỏ trống'),

});


export const OrderSchema = yup.object().shape({
    nameNguoiNhan: yup.string().required(' Không được bỏ trống'),
    email: yup.string().required("Email Không được bỏ trông").email("email Không đúng định dạng"),
    SoDienThoai: yup.string().matches(
        /^((09|03|07|08|05)+([0-9]{8})\b)/g, "Số điện thoại Không đúng định dạng.").required('Số điện thoại Không được bỏ trống'),
    DiaChi: yup.string().required(' Không được bỏ trống'),

});