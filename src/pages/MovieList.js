import { Card } from "../components/Card";
import Spinner from "../components/Spinner";
import useFetch from "../hooks/useFetch";
import useTitle from "../hooks/useTitle";

export const MovieList = ({ apiPath, title }) => {
  const { isLoading, data: movies } = useFetch(apiPath);

  useTitle(title);

  return (
    <main>
      {isLoading ? (
        <Spinner />
      ) : (
        <section className="max-w-7xl mx-auto py-7">
          <div className="flex justify-start flex-wrap other:justify-evenly">
            {movies.map((movie) => (
              <Card key={movie.id} movie={movie} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
};
