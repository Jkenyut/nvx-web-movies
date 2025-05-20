import React from "react";
import Thumbnail from "./Thumbnail";

export default function Results({results}: { results: any }) {
    return (
        <div
            className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 flex-wrap justify-center">
            {results.map((result: any) => (
                <Thumbnail key={result.id} Result={result}/>
            ))}
        </div>
    );
}
