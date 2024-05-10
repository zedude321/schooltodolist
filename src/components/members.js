export const Members = () => {
  return (
    <>
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
            <span className=" text-xs text-white-1">Багийн ахлагч </span>
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
    </>
  );
};
