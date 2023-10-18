import { loginApi } from "apis/auth";
import "./style.scss";

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
      <div onClick={onSubmit}>login1</div>
      <div className="text-3xl">test css</div>
    </div>
  );
}

export default Login;
