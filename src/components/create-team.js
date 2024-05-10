import data from "../utils/members.json"
import appereance from "../utils/appereance.json"
import { Poppins, Inter } from "next/font/google";


export default function CreateTeam() {
  return (
    <div className={`w-[654px] h-[762px] p-[48px] bg-white rounded-3xl border-dark/60 border-[2px] flex justfiy-center items-center`}>
        <div className={`w-full h-full flex flex-col items-center gap-y-[32px]`}>
            <span className={`text-36 text-dark1 font-poppins font-medium`}>Create teams</span>
            <div className="w-full flex flex-col ">
                <div className="h-full w-full flex">
                    <span className="text-16 text-dark/60">Team name</span>
                </div>
                <input className="w-full h-full border rounded-xl flex p-3"></input>
            </div>
            <div className="h-[62px] w-full flex justify-between items-end">
                <div className="h-full w-[350px] text-dark/60"> 
                    <span>Appereance</span>
                    <div className="w-full h-[30px] flex justify-between">
                        {
                            appereance.map((item) => {
                                return (
                                    <button className={`bg-${item.color} h-[20xp] w-[20px] rounded-full`}></button>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="w-[160px] h-[20px] flex justify-between items-center">
                    <span className="h-full font-14 text-dark/60 flex items-center ">Custom color</span>
                    <input className="w-[60px] h-full border-[2px] border-dark/60 text-dark-1 rounded p-2 text-14" ></input>
                </div>
            </div>
            <div className="w-full h-full flex flex-col gap-y-[20px]">
                <div className="h-[84px] w-full flex flex-col justify-between">
                    <div className="h-full w-full flex">
                        <span className="font-16 text-dark/60">Team members</span>
                    </div>
                    <input className="w-full h-full border rounded-xl flex p-3"></input>
                </div>

                <div className="w-full h-[190px] flex flex-col gap-y-[20px] overflow-y-scroll no-scrollbar">
                    {
                        data.map((item) => {
                            return (
                                <div className="h-[50px] w-full flex justify-between items-center">
                                    <div className="h-full w-fit flex gap-x-[20px]">
                                        <img 
                                            className="h-[50px] w-[50px] rounded-full"
                                            src={item.img}
                                        />
                                        <div className="flex flex-col h-full space-between">
                                            <div className="text-dark-1 font-16 h-[24px]">
                                                <span className="">{item.name}</span>
                                            </div>
                                            <span className="text-dark/60 font-14">{item.mail}</span>
                                        </div>
                                    </div>
                                    <div className="w-[88px] h-[24px] flex justify-between">
                                        <span className="font-16 text-dark-1">{item.type}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
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
