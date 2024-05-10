import { InputLogin } from "./input";
import { ColorButton } from "./color-button";
import { Members } from "./members";
import appereance from "../utils/appereance.json";
import members from "../utils/members.json";
import { useState } from "react";
export function AddMember() {
  const [selected, setSelected] = useState(-1);

  return (
    <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center backdrop-blur-sm p-4">
      <div className="w-[50%] h-[70%] bg-dark-1 border rounded-3xl flex justify-center items-center flex-col gap-4">
        <h1 className="text-2xl text-white-1 font-bold">Гишүүн урих</h1>
        <div className="w-[100%] h-auto flex justify-around gap-8 items-center flex-col">
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
}
