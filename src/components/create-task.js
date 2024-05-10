import data from "../utils/members.json"
import appereance from "../utils/appereance.json"
import { Poppins, Inter } from "next/font/google";


export default function CreateTask() {
  return (
    <div className="w-[702px] h-[491px] flex justify-center items-center border-dark/60 border-[2px] rounded-3xl">
        <div className="w-[606px] h-[395px] gap-y-[32px] flex flex-col items-center justify-center">
            <span className="text-dark-1 text-36">Create Task</span>
            <div className="w-full flex flex-col ">
                <div className="h-full w-full flex">
                    <span className="text-16 text-dark/60">Task name</span>
                </div>
                <input className="w-full h-full border rounded-xl flex p-3"></input>
            </div>
            <div className="w-full flex flex-col ">
                <div className="h-full w-full flex">
                    <span className="text-16 text-dark/60">Task's end date</span>
                </div>
                <input className="w-full h-full border rounded-xl flex p-3"></input>
            </div>
            <div className="h-full w-full flex flex-col gap-y-[8px]">
                <button className="w-full h-[56px] rounded-3xl bg-dark-1 flex flex-col items-center justify-center">
                    <button className="font-16 text-white-1 flex items-center justify-center">Create Teams</button>
                </button>
                <div className="h-[28px] w-full flex justify-center items-center">
                    <span className="p-2 text-14">Already have an account? Log in</span>
                </div>
            </div>
        </div>
    </div>
  );
}
