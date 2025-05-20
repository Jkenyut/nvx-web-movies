"use client";
import {Carousel} from "flowbite-react";
import Link from "next/link";
import {useRouter} from "next/navigation";
import Category from "../utils/request";
import ClipVertical from "./Clip";
import Image from "next/image";
import {Key} from "react";

export default function Nav({trendingDay, trendingWeek, populer}: any) {
    const router = useRouter();
    const Base_URL: String = "https://image.tmdb.org/t/p/original/";
    return (
        <div className="my-5 px-5">
            <div className="h-36 sm:h-48 md:h-96 ">
                <Carousel slideInterval={2000}>
                    {trendingDay
                        .slice(0, 3)
                        .map(
                            (data: {
                                id: Key | null | undefined;
                                backdrop_path: string;
                                poster_path: string;
                            }) => (
                                <Image
                                    key={data.id}
                                    src={`${Base_URL}${data.backdrop_path || data.poster_path}`}
                                    alt="ok"
                                    className=" h-full transform rounded-lg object-fill pb-2 transition duration-100 hover:scale-[0.95]"
                                    height={1000}
                                    width={1000}
                                />
                            )
                        )}
                </Carousel>
            </div>

            <p className="text-xl text-white">Trending Day</p>
            <ClipVertical Data={trendingDay}/>
            <p className="text-xl text-white">Trending Week</p>
            <ClipVertical Data={trendingWeek}/>
            <p className="text-xl text-white">Populer</p>
            <ClipVertical Data={populer}/>

            <nav className="relative">
                <div
                    className="flex space-x-10 overflow-x-scroll whitespace-nowrap px-10 text-lg scrollbar-thin sm:space-x-20 sm:px-20 sm:text-xl">
                    {Object.entries(Category).map(([key, {title, url}]) => (
                        <Link key={key} href={`/?genre=${key}`}>
                            <h1
                                // onClick={() => router.push(`/?genre=${key}`)}
                                className="transform cursor-pointer transition duration-100 last:pr-24 hover:scale-125 hover:text-white active:text-red-400"
                            >
                                {title}
                            </h1>
                        </Link>
                    ))}
                </div>
                <div className="absolute top-0 right-0 h-10  w-1/12 bg-gradient-to-l from-[#06202A]"></div>
            </nav>
        </div>
    );
}
