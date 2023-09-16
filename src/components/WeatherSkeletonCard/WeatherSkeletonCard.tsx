import Image from "next/image";

function WeatherSkeletonCard() {
  return (
    <div className="flex flex-col rounded pl-8 pr-8 pt-8 pb-8 shadow-lg min-w-[24%] bg-white animate-pulse">
      {/* <Image
        src="/assets/icons/rainy.svg"
        width={100}
        height={100}
        alt={weather}
        className="mb-5"
      /> */}
      <div className="bg-gray-300 w-[100px] h-[100px] mb-5 rounded"></div>
      <div className="bg-gray-300 w-[180px] h-[20px] mb-5 rounded"></div>
      <div className="bg-gray-300 w-[120px] h-[20px] mb-5 rounded"></div>
      <div className="bg-gray-300 w-[120px] h-[20px] mb-5 rounded"></div>
      {/* <p className="font-roboto font-light text-white mb-3"></p>
      <h3 className="font-roboto font-bold text-xl text-white"></h3> */}
    </div>
  );
}

export default WeatherSkeletonCard;
