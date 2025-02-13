import { Form } from "antd";
import { ErrorMessage, Formik } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import fetcher from "@/api/fetcher";
import { loginUser } from "@/store/slice/user.slice";
import { setToken } from "@/store/slice/token.slice";
import * as Yub from "yup";

type SignupFieldType = {
  email: string;
  name: string;
  password: string;
  gender: string;
  dateOfBirth: string;
};

const validationSchema = Yub.object({
  name: Yub.string().required("Họ tên không được để trống"),
  email: Yub.string()
    .email("Email không hợp lệ")
    .required("Email không được để trống"),
  password: Yub.string().required("Mật khẩu không được để trống"),
  gender: Yub.string().required("Giới tính không được để trống"),
  dateOfBirth: Yub.string().required("Ngày sinh không được để trống"),
});

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values: SignupFieldType) => {
    const data = {
      email: values.email,
      name: values.name,
      password: values.password,
      gender: values.gender,
      dateOfBirth: values.dateOfBirth,
    };

    fetcher.post("auth/signup", data).then((res) => {
      dispatch(loginUser(res.data.data.user));
      dispatch(setToken(res.data.data.accessToken));
      navigate("/");
    });
  };
  return (
    <div>
      <div className="mt-8">
        <div className="container m-auto flex mb-80">
          <div className="w-[500px] m-auto">
            <Formik
              initialValues={{
                email: "",
                name: "",
                password: "",
                gender: "",
                dateOfBirth: "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ values, handleSubmit, handleChange, errors }) => (
                <Form onFinish={handleSubmit}>
                  <div className="flex flex-col mb-4">
                    <label className="text-sm font-semibold mb-1">
                      Họ tên *
                    </label>
                    <input
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      className="p-2 text-sm h-[58px] w-full bg-blue-50 border-b"
                      type="text"
                    />
                    <ErrorMessage name="name" className="text-red-600" />
                  </div>
                  <div className="flex flex-col mb-4">
                    <label htmlFor="" className="text-sm font-semibold mb-1">
                      Địa chỉ email *
                    </label>
                    <input
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      className="p-2 text-sm h-[58px] w-full bg-blue-50 border-b"
                      type="text"
                    />
                    <ErrorMessage name="email" className="text-red-600" />
                  </div>
                  <div className="flex flex-col mb-4">
                    <label htmlFor="" className="text-sm font-semibold mb-1">
                      Mật khẩu *
                    </label>
                    <input
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      className="p-2 text-sm h-[58px] w-full bg-blue-50 border-b"
                      type="password"
                    />
                    <ErrorMessage name="password" className="text-red-600" />
                  </div>
                  <label htmlFor="" className="text-sm font-semibold mb-1">
                    Giới tính *
                  </label>
                  <div className="flex flex-col mb-4">
                    <select
                      name="gender"
                      value={values.gender}
                      defaultValue={"MALE"}
                      onChange={handleChange}
                      className="p-2 text-sm h-[58px] w-full bg-blue-50 border-b"
                    >
                      <option value="MALE">Nam</option>
                      <option value="FEMALE">Nữ</option>
                      <option value="DEFFERENCE">Khác</option>
                    </select>
                    <ErrorMessage name="gender" className="text-red-600" />
                  </div>
                  <label htmlFor="" className="text-sm font-semibold mb-1">
                    Ngày sinh *
                  </label>
                  <div className="flex flex-col mb-4">
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={values.dateOfBirth}
                      onChange={handleChange}
                      className="p-2 text-sm h-[58px] w-full bg-blue-50 border-none border-b rounded-none"
                      placeholder=""
                    />
                    <ErrorMessage name="dateOfBirth" className="text-red-600" />
                  </div>
                  <button
                    type="submit"
                    className="flex w-full justify-center items-center p-2 font-bold text-white h-[58px] bg-primary"
                  >
                    Đăng ký
                  </button>
                </Form>
              )}
            </Formik>
            <p className="text-center mt-4">
              Bạn đã có tài khoản?{" "}
              <NavLink className={"text-blue-600"} to="/login">
                Đăng nhập
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
