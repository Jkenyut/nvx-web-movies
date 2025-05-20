import Header from "./Header";
import Nav from "./Nav";
import Results from "./Results";
import Category from "@/utils/request";

const getCategory = async (genre: keyof typeof Category) => {
    const uri = Category[genre].url;
    console.log(uri);
    const res = await fetch(`https://api.themoviedb.org/3${uri}`, {
        cache: "no-store",
    });
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
    }
    return res.json();
};

const getData = async (uri: string) => {
    const res = await fetch(uri, {
        cache: "force-cache",
    });
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
    }
    return res.json();
};

async function Home({
                        params,
                        searchParams,
                    }: {
    params: { slug: string };
    searchParams?: { [key: string]: string | string[] | undefined | any };
}) {
    const API_KEY = process.env.API_KEY;
    const resCategory = await getCategory(searchParams?.genre || "fetchTrending");
    const trendingDay = await getData(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
    );
    const trendingWeek = await getData(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
    );
    const populer = await getData(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`
    );
    return (
        <div>
            {/* header */}
            <Header/>
            {/* <ClipVertical trendingDay={trendingDay.results}/> */}
            {/* Nav */}
            <Nav
                trendingDay={trendingDay.results}
                trendingWeek={trendingWeek.results}
                populer={populer.results}
            />
            {/* Result */}
            <Results results={resCategory.results}/>
        </div>
    );
}

export default Home;
