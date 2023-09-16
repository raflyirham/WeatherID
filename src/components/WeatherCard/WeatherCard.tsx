import Image from "next/image";

type Props = {
  weather: string;
  city: string;
  icon: string;
  region: string;
};

function WeatherCard({ weather, city, icon, region }: Props) {
  return (
    <div className="flex flex-col rounded pl-8 pr-8 pt-8 pb-8 shadow-lg min-w-[24%] bg-gradient-to-b from-cyan-500 to-blue-500">
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
