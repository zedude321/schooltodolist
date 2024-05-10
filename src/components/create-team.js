import { InputLogin } from "./input";

export function CreateTeam() {
  return (
    <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center backdrop-blur-sm p-4">
      <div className="w-[50%] h-[90%] bg-dark-1 border rounded-3xl flex justify-center items-center flex-col">
        <h1 className="text-2xl text-white-1 font-bold">Баг үүсгэх</h1>
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
          <div className="w-[80%] h-[50px] flex justify-center items-start flex-col font-roboto ">
            <div className="h-[50px] w-full flex justify-between items-center">
              <div className="h-full w-fit flex gap-x-[20px]">
                <img
                  className="h-[50px] w-[50px] rounded-full border"
                  src="https://scontent.fuln1-2.fna.fbcdn.net/v/t39.30808-1/440239017_920970493160269_5977550615180060357_n.jpg?stp=dst-jpg_p480x480&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=NH81neX1NOQQ7kNvgGjbNy2&_nc_ht=scontent.fuln1-2.fna&oh=00_AYCX_jvOya36PZGX4eRY1J4fNrxxxaFhaJId4uMgxJZdNw&oe=6643B8BA"
                />
                <div className="flex flex-col h-full space-between">
                  <div className="text-white-1 font-16 h-[24px]">
                    <span className="">Battugs Bayanbileg</span>
                  </div>
                  <span className="text-white/60 text-xs">
                    b.battugs11@gmail.com
                  </span>
                </div>
              </div>
              <div className="flex justify-center items-center gap-2">
                <span className=" text-xs text-white-1">Багиин ахлагч </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-[80%] h-[56px] flex justify-between items-start flex-col font-roboto ">
            <div className="h-[50px] w-full flex justify-between items-center">
              <div className="h-full w-fit flex gap-x-[20px]">
                <img
                  className="h-[50px] w-[50px] rounded-full border"
                  src="https://scontent.fuln6-2.fna.fbcdn.net/v/t39.30808-6/433139267_864357285376522_5205875368586891633_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=e9rOcgRrzEsQ7kNvgG8mj-b&_nc_ht=scontent.fuln6-2.fna&oh=00_AYCpYmVjwk-fppMxPoS4vnm__q9jVhzyhpI_zmkW1yDMHA&oe=6643EAC4"
                />
                <div className="flex flex-col h-full space-between">
                  <div className="text-white-1 font-16 h-[24px]">
                    <span className="">Ebo eno</span>
                  </div>
                  <span className="text-white/60 text-xs">
                    xdeboyt12@gmail.com
                  </span>
                </div>
              </div>
              <div className="flex justify-center items-center gap-2">
                <span className=" text-xs text-white-1">Багиин ахлагч </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </div>
          </div>{" "}
          <div className="w-[80%] h-[56px] flex justify-center items-start flex-col font-roboto gap-2 ">
            <div className="h-[50px] w-full flex justify-between items-center">
              <div className="h-full w-fit flex gap-x-[20px]">
                <img
                  className="h-[50px] w-[50px] rounded-full border"
                  src="https://scontent.fuln6-1.fna.fbcdn.net/v/t39.30808-1/435700389_411693624823701_8162646862932494239_n.jpg?stp=cp6_dst-jpg_p200x200&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=A8gf_LQi96cQ7kNvgE4pIJz&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fuln6-1.fna&oh=00_AYAE5nWvkS7Jmj8OGQ7ANOlWpumRq_38N3LHeC-B9fwhkA&oe=6643D4CF"
                />
                <div className="flex flex-col h-full space-between">
                  <div className="text-white-1 font-16 h-[24px]">
                    <span className="">Anar Tamir</span>
                  </div>
                  <span className="text-white/60 text-xs">
                    T1anar@gmail.com{" "}
                  </span>
                </div>
              </div>
              <div className="flex justify-center items-center gap-2">
                <span className=" text-xs text-white-1">Багиин ахлагч </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <button className="w-[80%] h-[60px] flex justify-center items-center">
          <div className="w-full h-[40px] active:bg-white-1/60 bg-white-1 text-dark text-md flex justify-center items-center rounded-3xl transition-all">
            Багаа үүсгэх
          </div>
        </button>
      </div>
    </div>
  );
}
