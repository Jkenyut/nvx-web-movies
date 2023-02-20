import React from "react";
import Image from "next/image";
import { HandThumbUpIcon } from "@heroicons/react/24/outline";

function Thumbnail({ Result }: { Result: any }) {
  const Base_URL: String = "https://image.tmdb.org/t/p/original/";
  return (
    <div className=" transition duration-200 transform sm:hover:scale-105 hover:z-50 group cursor-pointer h-[225px] object-cover">
      <Image
        className="rounded-xl mx-2 "
        src={`${Base_URL}${Result.backdrop_path || Result.poster_path}`}
        height={100}
        width={200}
        alt={Result.title}
        loading="lazy"
      />
      <div className="p-2">
        <p className="truncate max-w-sm w-[200px]"> {Result.overview}</p>
        <h2 className="mt-1 test-2xl text-white transition duration-100 ease-in-out group-hover:font-bold w-[200px] ">
          {Result.title || Result.original_name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {Result.release_date || Result.first_air_date}
          <HandThumbUpIcon className="h-5 mx-2" />
          {Result.vote_count}
        </p>
      </div>
    </div>
  );
}

function ClipVertical({ Data }: { Data: any }) {
  const Base_URL: String = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="  px-2 my-2 flex flex-row  overflow-x-scroll scrollbar-thin">
      {Data.map((result: any) => (
        <Thumbnail key={result.id} Result={result} />
      ))}
    </div>
  );
}

export default ClipVertical;
