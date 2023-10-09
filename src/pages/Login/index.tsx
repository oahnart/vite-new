import { loginApi } from "apis/auth";

function Login() {
  console.log(import.meta.env.VITE_TEST);
  console.log(import.meta.env.VITE_TEST1);

  const onSubmit = async () => {
    const res: any = await loginApi({
      userName: "user1",
      password: "abc123",
    });
  };

  return (
    <div>
      <div onClick={onSubmit}>login</div>
      <div className="title">test css</div>
    </div>
  );
}

export default Login;
