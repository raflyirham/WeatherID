import Image from "next/image";

type Props = {
  weather: string;
  city: string;
  icon: string;
  region: string;
};

function WeatherCard({ weather, city, icon, region }: Props) {
  return (
    <div className="flex flex-col rounded pl-8 pr-8 pt-8 pb-8 shadow-lg xl:min-w-[24%] lg:min-w-[32%] md:min-w-[48.5%] sm:min-w-[100%] max-sm:min-w-[100%] bg-gradient-to-b from-cyan-500 to-blue-500">
      <Image
        src={`https:` + icon}
        width={100}
        height={100}
        alt={weather}
        className="mb-5"
      />

      <p className="font-roboto font-light text-white mb-3">{weather}</p>
      <h3 className="font-roboto font-bold text-xl text-white">{city}</h3>
      <h4 className="font-robot font-bold text-lg text-white">
        Provinsi {region}
      </h4>
    </div>
  );
}

export default WeatherCard;
