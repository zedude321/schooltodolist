import { InputLogin } from "./input";
import { Members } from "./members";
import { ColorButton } from "./color-button";
import appereance from "../utils/appereance.json";
import members from "../utils/members.json";
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
            <div className="w-full h-[40px] flex justify-center items-center text-white-1 text-md">
              <div className="w-full flex justify-between items-center">
                {appereance.map((el, i) => {
                  return <ColorButton key={i} bg={el.color} />;
                })}
              </div>
              {/* <div className="flex justify-center items-center gap-2">
                <p className="text-xs text-white-1/60">Өнгөө сонгох</p>
                <input
                  className="w-20 h-6 bg-dark-1 outline-0 border rounded p-2 text-sm text-white-1 placeholder:text-white-1/60 placeholder:text-xs"
                  placeholder="#f5f5f5"
                ></input>
              </div> */}
            </div>
          </div>
          <InputLogin
            type="text"
            label="Багын гишүүд"
            placeholder="Имэйлээр багын гишүүдээ нэмэх"
            isHide="false"
          />
          <div className="w-full h-64 flex justify-between gap-[24px] items-center flex-col overflow-y-scroll">
            {members.map((el) => {
              return (
                <>
                  <Members img={el.img} name={el.name} mail={el.mail} />
                </>
              );
            })}
          </div>
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
