import React from "react";
import Image from "next/image";
import { HandThumbUpIcon } from "@heroicons/react/24/outline";

const myLoader = ({ src, width, quality }: any) => {
  const Base_URL: String = "https://image.tmdb.org/t/p/original/";
  return `${Base_URL}${src.backdrop_path || src.poster_path}${src}?w=${width}&q=${quality || 75}`;
};
function ClipVertical({ Data }: { Data: any }) {
  const Base_URL: String = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="  overflow-x-scroll flex flex-row scrollbar-thin">
      {Data.map((data: any) => (
        <Image
          key={data.id}
          className="object-contain justify-center m-1 rounded-lg h-auto transition duration-200 transform sm:hover:scale-105 hover:z-50 cursor-pointer"
          src={`${Base_URL}${data.backdrop_path || data.poster_path}`}
          width={200}
          height={100}
          alt={data.title}
          loading="lazy"
        />
      ))}
    </div>
  );
}

export default ClipVertical;
