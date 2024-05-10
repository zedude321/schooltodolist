import { InputLogin } from "./input";
import { Members } from "./members";

export const UpdateTeam = () => {
  return (
    <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center backdrop-blur-sm p-4">
      <div className="w-[50%] h-[90%] bg-dark-1 border rounded-3xl flex justify-center items-center flex-col">
        <h1 className="text-2xl text-white-1 font-bold">Багаа өөрчлөх</h1>
        <div className="w-[100%] h-auto flex justify-around gap-8 items-center flex-col">
          <InputLogin label="Багын нэр" placeholder="11A" isHide="true" />
          <div className="w-[80%] h-[56px] flex justify-between items-start flex-col font-roboto">
            <div className="h-[16px] w-full flex justify-between items-center">
              <p className="text-sm text-white-1/60 h-full">Өнгөө сонгох</p>
            </div>
            <div className="w-full h-[40px] flex justify-between items-center text-white-1 text-md">
              <div className="flex justify-center items-center gap-2">
                {" "}
                <button className="w-6 h-6 rounded-full bg-black"></button>
                <button className="w-6 h-6 rounded-full bg-purple-d"></button>
                <button className="w-6 h-6 rounded-full bg-purple-l"></button>
                <button className="w-6 h-6 rounded-full bg-blue-d"></button>
                <button className="w-6 h-6 rounded-full bg-blue-l"></button>
                <button className="w-6 h-6 rounded-full bg-yellow-d"></button>
                <button className="w-6 h-6 rounded-full bg-yellow-l"></button>
                <button className="w-6 h-6 rounded-full bg-green-d"></button>
                <button className="w-6 h-6 rounded-full bg-green-l"></button>
              </div>
              <div className="flex justify-center items-center gap-2">
                <p className="text-xs text-white-1/60">Өнгөө сонгох</p>
                <input
                  className="w-20 h-6 bg-dark-1 outline-0 border rounded p-2 text-sm text-white-1 placeholder:text-white-1/60 placeholder:text-xs"
                  placeholder="#f5f5f5"
                ></input>
              </div>
            </div>
          </div>
          <InputLogin
            type="text"
            label="Багын гишүүд"
            placeholder="Имэйлээр багын гишүүдээ нэмэх"
            isHide="false"
          />
          <Members />

          <Members />

          <Members />
        </div>

        <button className="w-[80%] h-[60px] flex justify-center items-center">
          <div className="w-full h-[40px] active:bg-white-1/60 bg-white-1 text-dark text-md flex justify-center items-center rounded-3xl transition-all">
            Хадгалах
          </div>
        </button>
      </div>
    </div>
  );
};
