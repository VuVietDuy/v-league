function Login() {
  return (
    <div>
      <div className="container m-auto flex mb-80">
        <div className="w-[500px] m-auto">
          <form action="">
            <div className="px-3">
              <div className="flex flex-col mb-3">
                <label htmlFor="">Địa chỉ email</label>
                <input
                  className="p-2 text-sm h-[58px] bg-blue-50 border-b"
                  type="email"
                />
              </div>
              <div className="flex flex-col mb-6">
                <label htmlFor="">Mật khẩu</label>
                <input
                  className="p-2 text-sm h-[58px] bg-blue-50 border-b"
                  type="email"
                />
              </div>
              <div className="flex flex-col">
                <a
                  href="/"
                  className="flex justify-center items-center p-2 font-bold text-white h-[58px] bg-primary"
                >
                  Đăng nhập
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
