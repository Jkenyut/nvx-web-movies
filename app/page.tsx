import Header from "./Header";
import Nav from "./Nav";
import Results from "./Results";
import Category from "@/utils/request";

const getCategory = async (genre: keyof typeof Category) => {
  const uri = Category[genre].url;
  const res = await fetch(`https://api.themoviedb.org/3${uri}`, {
    cache: "no-store",
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
  const res = await getCategory(searchParams?.genre || "fetchTrending");

  return (
    <div>
      {/* header */}
      <Header />

      {/* Nav */}
      <Nav />

      {/* Result */}
      <Results results={res.results} />
    </div>
  );
}

export default Home;
