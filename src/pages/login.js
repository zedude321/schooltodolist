import InputLogin from "./components/input";

const Login = () => {
  return (
    <div className="w-screen h-screen bg-dark-1 flex justify-center items-center flex-col gap-10 font-roboto">
      <img src="https://i.ibb.co/kgHXn2N/image.png" className="h-12"></img>
      <div className="w-[50%] h-[70%] border rounded-3xl flex justify-center gap-10 items-center flex-col">
        <h1 className="text-2xl text-white-1 font-bold">Бүртгэлд Нэвтрэх</h1>
        <div className="w-[100%] h-auto flex justify-center gap-4 items-center flex-col">
          <InputLogin
            label="Имэйл"
            placeholder="Amjuulay@gmail.com"
            isHide="true"
          />
          <InputLogin
            label="Нууц Үг"
            placeholder="Amjuulay123456"
            isHide="false"
          />
        </div>

        <div className="w-[80%]">
          <div className="w-full h-[40px] bg-white text-dark text-md flex justify-center items-center rounded-3xl">
            Нэвтрэх
          </div>
        </div>
        <div className="w-[80%] flex justify-center items-center ">
          <div className="text-white-1/60 text-xs flex justify-center gap-1">
            Та Бүртгэлгүй бол? <div className="underline"> Бүртгүүлэх</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
