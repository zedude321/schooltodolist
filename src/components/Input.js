import { BiSolidHide } from "react-icons/bi";

const InputLogin = ({ mp, placeholder, isHide }) => {
  return (
    <div className="w-[80%] h-[100px] flex justify-around items-start flex-col font-roboto">
      <div className="h-[20px] w-full flex justify-between items-center">
        {" "}
        <p className="text-sm text-[#F7F7F799] h-full">{mp}</p>
      </div>
      <input
        className="w-full h-[56px] border rounded-xl bg-dark-1 text-white/60 text-md p-5 outline-0"
        placeholder={placeholder}
      ></input>
    </div>
  );
};
export default InputLogin;
