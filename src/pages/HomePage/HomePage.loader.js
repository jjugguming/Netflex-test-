import { getMovieDetail } from "../../api/api";

async function movieDetailPageLoader({ params }) {
  const { movieId } = params;
  const movie = await getMovieDetail(movieId);

  return movie;
}

export default movieDetailPageLoader