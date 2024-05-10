import { InputLogin } from "@/components";
import { GoDotFill } from "react-icons/go";

const SignUp = () => {
  return (
    <div className="w-screen h-screen bg-dark-1 flex justify-center items-center flex-col gap-10 font-roboto">
      <img src="https://i.ibb.co/kgHXn2N/image.png" className="h-12"></img>
      <div className="w-[50%] h-[80%] border rounded-3xl flex justify-center gap-10 items-center flex-col">
        <h1 className="text-2xl text-white font-bold">Бүртгэл Үүсгэх</h1>
        <div className="w-[100%] h-auto flex justify-center gap-4 items-center flex-col">
          <InputLogin label="Имэйл" placeholder="Amjuulay@gmail.com" />
          <InputLogin
            type="password"
            label="Нууц Үг"
            placeholder="Amjuulay123456"
          />
          <InputLogin
            type="password"
            label="Нууц Үгээ Баталгаажуулах"
            placeholder="Amjuulay123456"
          />
        </div>
        <div className="w-[80%] h-auto gap-4 text-white/60 text-[13px] grid grid-cols-2">
          <p className="text-xs flex justify-start items-center gap-1">
            <GoDotFill />8 ба түүнээс дээш тэмдэгт ашиглах
          </p>
          <p className="text-xs flex justify-start items-center gap-1">
            <GoDotFill />
            Том, жижиг үсэг ашиглах (Жишээ нь: Aa)
          </p>
          <p className="text-xs flex justify-start items-center gap-1">
            <GoDotFill />
            Тоо ашиглах (Жишээ нь: 1234)
          </p>
        </div>
        <button className="w-[80%]">
          <div className="w-full h-[40px] active:bg-white-1/60 bg-white-1 text-dark text-md flex justify-center items-center rounded-3xl transition-all">
            Бүртгүүлэх
          </div>
        </button>
        <div className="w-[80%] flex justify-center items-center">
          <div className="text-white-1/60 text-xs flex justify-center gap-1">
            Та бүртгэлтэй бол?{" "}
            <a href="/login" className="underline cursor-pointer"> Нэвтрэх</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
