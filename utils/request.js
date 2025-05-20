const API_KEY = process.env.API_KEY;

const Category = {
    fetchTrending: {
        title: "Trending",
        url: `/trending/all/week?api_key=${API_KEY}`,
    },
    fetchTV: {
        title: "Action",
        url: `/trending/tv/day?api_key=${API_KEY}`,
    },
    fetchTopRatedMovie: {
        title: "Top Rated Movie",
        url: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    },
    fetchTopRatedTV: {
        title: "Top Event TV",
        url: `/tv/top_rated?api_key=${API_KEY}&languange=en-US&page=1`,
    },
    fetchTopRatedPopuler: {
        title: "Top Event Populer",
        url: `/movie/popular?api_key=${API_KEY}&languange=en-US&page=1`,
    },
};

export default Category;
