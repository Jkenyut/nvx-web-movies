"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Category from "../utils/request";
import ClipVertical from "./Clip";

export default function Nav({ trendingDay, trendingWeek, populer }: any) {
  const router = useRouter();
  return (
    <div>
      <div className="px-5 my-5">
        <p className="text-xl text-white">Trending Day</p>
        <div className="justify-center px-0 my-2 ">
          <ClipVertical Data={trendingDay} />
        </div>
        <p className="text-xl text-white">Trending Week</p>
        <div className="justify-center px-0 my-2 ">
          <ClipVertical Data={trendingWeek} />
        </div>
        <p className="text-xl text-white">Populer</p>
        <div className="justify-center px-0 my-2 ">
          <ClipVertical Data={populer} />
        </div>
      </div>

      <nav className="relative">
        <div className="flex px-10 sm:px-20 sm:text-xl text-lg whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-thin">
          {Object.entries(Category).map(([key, { title, url }]) => (
            <Link key={key} href={`/?genre=${key}`}>
              <h1
                // onClick={() => router.push(`/?genre=${key}`)}
                className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-400"
              >
                {title}
              </h1>
            </Link>
          ))}
        </div>
        <div className="absolute top-0 right-0 bg-gradient-to-l  from-[#06202A] h-10 w-1/12"></div>
      </nav>
    </div>
  );
}
