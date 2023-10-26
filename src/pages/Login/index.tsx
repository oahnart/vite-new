import { loginApi } from "apis/auth";
import "./style.scss";

import ImageMain from "assets/images/login/img-main.png";

function Login() {
  // console.log(import.meta.env.VITE_TEST);
  // console.log(import.meta.env.VITE_TEST1);

  const onSubmit = async () => {
    const res: any = await loginApi({
      userName: "user1",
      password: "abc123",
    });
  };

  return (
    <div className="max-w-[1170px] mx-auto px-[16px] pt-[100px] pb-[225px]">
      {/* <div onClick={onSubmit}>login1</div>
      <div className="text-3xl font-sp600">test css</div> */}
      <div className="flex">
        <div>
          <img src={ImageMain} alt="img" />
        </div>
        <div className="px-[100px] pt-[70px] pb-[100px] flex-1">
          <div className="text-[#0d0d0d] mb-[10px] text-[40px] font-sp400 leading-[1.35]">
            LOGIN
          </div>
          <div>
            아트앤가이드의 다양한 서비스를 이용하시려면 로그인을 해주세요
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
