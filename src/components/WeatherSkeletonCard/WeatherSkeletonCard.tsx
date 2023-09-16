import Image from "next/image";

function WeatherSkeletonCard() {
  return (
    <div className="flex flex-col rounded pl-8 pr-8 pt-8 pb-8 shadow-lg min-w-[24%] bg-white animate-pulse">
      <div className="bg-gray-300 w-[100px] h-[100px] mb-5 rounded"></div>
      <div className="bg-gray-300 w-[180px] h-[20px] mb-5 rounded"></div>
      <div className="bg-gray-300 w-[120px] h-[20px] mb-5 rounded"></div>
      <div className="bg-gray-300 w-[120px] h-[20px] mb-5 rounded"></div>
    </div>
  );
}

export default WeatherSkeletonCard;
