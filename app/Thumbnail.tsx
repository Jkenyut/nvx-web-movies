import Image from "next/image";
import React from "react";
import {HandThumbUpIcon} from "@heroicons/react/24/outline";

export default function Thumbnail({Result}: { Result: any }) {

    const Base_URL: String = "https://image.tmdb.org/t/p/original/";
    return (
        <div className="p-2 transition duration-200 transform sm:hover:scale-105 hover:z-50 group cursor-pointer">
            <Image
                src={`${Base_URL}${Result.backdrop_path || Result.poster_path}`}
                height={1080}
                width={1920}
                alt={Result.title}
                loading="lazy"
            />
            <div className="p-2">
                <p className="truncate max-w-sm"> {Result.overview}</p>
                <h2 className="mt-1 test-2xl text-white transition duration-100 ease-in-out group-hover:font-bold">
                    {Result.title || Result.original_name}
                </h2>
                <p className="flex items-center opacity-0 group-hover:opacity-100">
                    {Result.release_date || Result.first_air_date}
                    <HandThumbUpIcon className="h-5 mx-2"/>
                    {Result.vote_count}
                </p>
            </div>
        </div>
    );
}
