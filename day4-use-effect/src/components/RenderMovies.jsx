import { useEffect, useState } from "react";

function RenderMovies() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(10);

  const del = (key) => {
    let newItem = movies
      .filter((movie) => movie.id !== key)
      .map((movie) => {
        return {
          ...movie,
        };
      });
    setMovies(newItem);
  };

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch(
          "https://mimic-server-api.vercel.app/movies?_limit=" +
            limit +
            "&q=" +
            search,
        );

        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error("Error:", error);
      }
    }

    fetchMovies();
  }, [search, limit]);

  return (
    <>
      <div className="bg-gray-100  rounded-xl shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 py-5 bg-pink-600 gap-4 px-5">
          <h2 className="text-2xl font-bold text-white">
            TamilPrint ({movies.length})
          </h2>

          <div className="flex gap-3 ">
            <select
              value={limit}
              onChange={(event) => setLimit(event.target.value)}
              className="border border-gray-300 rounded px-3 py-1 bg-white outline-none">
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="30">30</option>
            </select>

            <input
              type="search"
              placeholder="Search Movies"
              onChange={(event) => setSearch(event.target.value)}
              className="border border-gray-300 rounded px-3 py-1 outline-none bg-white"
            />
          </div>
        </div>

        {movies.length === 0 && (
          <p className="text-gray-500 flex justify-center items-center py-10">
            Oops 😭! No Movies Found.
          </p>
        )}

        {/* movies */}
        <ul className="flex justify-around px-5 flex-wrap gap-6">
          {movies.map((movie) => (
            <li
              key={movie.id}
              className="bg-white rounded-xl shadow hover:shadow-lg  overflow-hidden
                       w-full sm:w-[45%] md:w-[30%] lg:w-[20%]">
              {/* image */}
              <div className="w-full  overflow-hidden">
                <img
                  src={movie.poster_path}
                  alt={movie.title}
                  className="w-full h-full object-cover hover:scale-105 "
                />
              </div>
              {/* info */}
              <div className="p-4 ">
                <h4 className="font-semibold text-lg">{movie.original_title}</h4>
                <p className="text-sm text-gray-600">{movie.release_date}</p>
                <p className="text-yellow-500 font-medium mt-1">
                  ⭐
                  {movie.vote_average != 0
                    ? `${movie.vote_average} / 10`
                    : "No Rating"}
                </p>
                <a href={movie.video} target="_blank">
                  <div className="flex items-center cursor-pointer gap-2 justify-center">
                    {" "}
                    <button className="bg-pink-600 w-full text-white py-2 rounded-lg mt-2 hover:bg-pink-800 hover:scale-105">
                      Download Now
                    </button>
                    <button
                      className="py-1.5 px-2 cursor-pointer border-2 border-pink-600 rounded-lg mt-2 hover:bg-pink-300 hover:scale-110"
                      onClick={() => {
                        del(movie.id);
                      }}>
                      ❌
                    </button>
                  </div>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default RenderMovies;
