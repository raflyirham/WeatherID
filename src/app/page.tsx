"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { loadEnvConfig } from "@next/env";

import WeatherCard from "@/components/WeatherCard/WeatherCard";
import WeatherSkeletonCard from "@/components/WeatherSkeletonCard/WeatherSkeletonCard";

import regions from "../../public/assets/json/regions.json";

export default function Home() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [updateLoading, setUpdateLoading] = useState<boolean>(false);
  const currentItem = useRef(0);

  const regionIdx = useRef(0);
  const cityIdx = useRef(0);

  const LIMIT = 8;

  async function fetchData(city: string, region: string) {
    const url =
      "https://weatherapi-com.p.rapidapi.com/current.json?q=" +
      city +
      ", Indonesia";

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RapidAPIKey
          ? process.env.NEXT_PUBLIC_RapidAPIKey
          : "",
        "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RapidAPIHost
          ? process.env.NEXT_PUBLIC_RapidAPIHost
          : "",
      },
    };

    fetch(url, options)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          return null;
        }
      })
      .then((response) => {
        if (response !== null) {
          setData((prev: any) => {
            return [...prev, [response, city, region]];
          });
        } else {
          console.log(`Error: ${city}, ${region}`);
        }
      })
      .then(() => {
        setUpdateLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    if (
      regionIdx.current < regions.length &&
      cityIdx.current >= regions[regionIdx.current].kota.length
    ) {
      cityIdx.current = 0;
      regionIdx.current += 1;
    }

    for (
      let i = regionIdx.current;
      i < regions.length && currentItem.current < LIMIT;
      i++, regionIdx.current += 1
    ) {
      for (
        let j = cityIdx.current;
        j < regions[i].kota.length && currentItem.current < LIMIT;
        j++, cityIdx.current += 1
      ) {
        fetchData(regions[i].kota[j], regions[i].provinsi);
        currentItem.current += 1;
        if (cityIdx.current + 1 == regions[i].kota.length) {
          cityIdx.current = 0;
          break;
        }
      }
    }
  }, []);

  useEffect(() => {
    {
      data.length > 0 ? setLoading(false) : setLoading(true);
    }
  }, [loading, data]);

  const loadMoreCities = () => {
    setUpdateLoading(true);
    if (
      regionIdx.current < regions.length &&
      cityIdx.current >= regions[regionIdx.current].kota.length
    ) {
      cityIdx.current = 0;
      regionIdx.current += 1;
    }

    for (
      let i = regionIdx.current;
      i < regions.length && currentItem.current < LIMIT;
      i++, regionIdx.current += 1
    ) {
      for (
        let j = cityIdx.current;
        j < regions[i].kota.length && currentItem.current < LIMIT;
        j++, cityIdx.current += 1
      ) {
        fetchData(regions[i].kota[j], regions[i].provinsi);
        currentItem.current += 1;
        if (cityIdx.current + 1 == regions[i].kota.length) {
          cityIdx.current = 0;
          break;
        }
      }
    }
  };

  function moreCities() {
    currentItem.current = 0;
    loadMoreCities();
  }

  return (
    <>
      <header className="flex flex-row px-10 py-5 justify-start shadow-lg">
        <h1 className="font-roboto text-2xl font-bold text-sky-500">
          WeatherID
        </h1>
      </header>

      <main className="flex flex-col px-10 py-12">
        <section className="w-3/6">
          <h2 className="font-roboto font-bold text-6xl text-transparent bg-clip-text from-sk bg-gradient-to-r from-cyan-500 to-blue-500 leading-normal">
            See the current weather status in any cities in Indonesia.
          </h2>
        </section>

        <section className="flex flex-row flex-wrap gap-x-4 gap-y-7 justify-start mt-5 py-12">
          {loading ? (
            <>
              <WeatherSkeletonCard />
              <WeatherSkeletonCard />
              <WeatherSkeletonCard />
              <WeatherSkeletonCard />
              <WeatherSkeletonCard />
              <WeatherSkeletonCard />
              <WeatherSkeletonCard />
              <WeatherSkeletonCard />
            </>
          ) : (
            <>
              {data.map((item: any, index: number) => (
                <WeatherCard
                  key={index}
                  weather={item[0].current.condition.text}
                  icon={item[0].current.condition.icon}
                  city={item[1]}
                  region={item[2]}
                />
              ))}
            </>
          )}
          {updateLoading && (
            <>
              <WeatherSkeletonCard />
              <WeatherSkeletonCard />
              <WeatherSkeletonCard />
              <WeatherSkeletonCard />
              <WeatherSkeletonCard />
              <WeatherSkeletonCard />
              <WeatherSkeletonCard />
              <WeatherSkeletonCard />
            </>
          )}
        </section>
        <button onClick={moreCities}>More Cities</button>
      </main>
    </>
  );
}
