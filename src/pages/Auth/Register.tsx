import { DatePicker, Form } from "antd";
import { Formik } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import fetcher from "@/api/fetcher";
import { loginUser } from "@/store/slice/user.slice";
import { setToken } from "@/store/slice/token.slice";

type SignupFieldType = {
  email: string;
  name: string;
  password: string;
  gender: string;
  dateOfBirth: string;
};

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values: SignupFieldType) => {
    console.log(values);
    const data = {
      email: values.email,
      name: values.name,
      password: values.password,
      gender: values.gender,
      dateOfBirth: "2001-10-10",
    };
    fetcher.post("auth/signup", data).then((res) => {
      console.log(res);
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
              onSubmit={handleSubmit}
            >
              {({ values, handleSubmit, handleChange, setFieldValue }) => (
                <Form onFinish={handleSubmit}>
                  <label className="text-sm font-semibold mb-1">Họ tên</label>
                  <input
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    className="p-2 text-sm h-[58px] w-full bg-blue-50 border-b mb-4"
                    type="text"
                  />
                  <label htmlFor="" className="text-sm font-semibold mb-1">
                    Địa chỉ email
                  </label>
                  <input
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    className="p-2 text-sm h-[58px] w-full bg-blue-50 border-b mb-4"
                    type="text"
                  />
                  <label htmlFor="" className="text-sm font-semibold mb-1">
                    Mật khẩu
                  </label>
                  <input
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    className="p-2 text-sm h-[58px] w-full bg-blue-50 border-b mb-4"
                    type="password"
                  />
                  <label htmlFor="" className="text-sm font-semibold mb-1">
                    Giới tính
                  </label>
                  <select
                    name="gender"
                    value={values.gender}
                    onChange={handleChange}
                    className="p-2 text-sm h-[58px] w-full bg-blue-50 border-b mb-4"
                  >
                    <option value="MALE">Nam</option>
                    <option value="FEMALE">Nữ</option>
                    <option value="DEFFERENCE">Khác</option>
                  </select>
                  <label htmlFor="" className="text-sm font-semibold mb-1">
                    Ngày sinh
                  </label>
                  <DatePicker
                    name="dateOfBirth"
                    value={values.dateOfBirth}
                    onChange={(date, dateString) => {
                      console.log(dateString);
                    }}
                    className="p-2 text-sm h-[58px] w-full bg-blue-50 border-none border-b rounded-none mb-4"
                    placeholder=""
                  />
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
