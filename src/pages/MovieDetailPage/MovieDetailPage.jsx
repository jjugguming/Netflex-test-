import { useParams } from "react-router-dom";
import Page from "../../components/Page/Page";
import { FaPlay } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
// import { useEffect, useState } from "react";
import { getMovieDetail } from "../../api/api";
import { MovieContext, useMovies } from "../../contexts/movie.context";
import { useQuery } from "@tanstack/react-query";

function MovieDetailPage() {
	const { checkIsLiked, toggleLikeMovie } = useMovies(MovieContext);
	const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
	const { movieId } = useParams();
	const isLiked = checkIsLiked(movieId);

	const { data: movieDetail } = useQuery({
		initialData: {},
		queryKey: ["movies", { movieId }],
		queryFn: () => getMovieDetail(movieId),
	});

	const handleClickLikeButton = () => {
		toggleLikeMovie(movieId);
	};

	if (!movieDetail) return null;

	return (
		<Page className="overflow-hidden">
			<div className="absolute top-64 left-0 z-10 text-white mx-32 flex flex-row gap-x-10">
				<div className="">
					<h1 className=" font-bold text-5xl mb-2">
						{movieDetail.title}
					</h1>
					<h2 className="font-normal text-2xl mb-8 ">
						{movieDetail.tagline}
					</h2>
					<p className="font-normal text-lg">
						{movieDetail.overview}
					</p>
					<ul className="flex gap-x-5 mt-10">
						{movieDetail.genres.map((genre) => (
							<li
								key={genre.id}
								className="bg-white rounded-md px-2 py-0.5"
							>
								<p className="text-black font-semibold text-lg">{`#${genre.name}`}</p>
							</li>
						))}
					</ul>
					{/* Buttons */}
					<div className="mt-10 flex flex-row gap-x-10">
						<button className=" bg-white text-black flex flex-row justify-center items-center gap-x-3 px-12 py-3 rounded-lg text-3xl transition-all duration-500 hover:shadow-xl hover:-translate-x-1 hover:-translate-y-1">
							재생
							<FaPlay />
						</button>
						<button
							onClick={handleClickLikeButton}
							className={`bg-gray-300 bg-opacity-30 w-14 h-14 rounded-full flex justify-center items-center border transition-all duration-500 ${
								isLiked ? "text-red-500/90" : "text-white/70"
							}`}
						>
							<FaHeart />
						</button>
					</div>
				</div>
				<img
					className="h-[500px]"
					src={`${IMAGE_BASE_URL}/${movieDetail.poster_path}`}
					alt=""
				/>
			</div>
			<div className="bg-black w-screen aspect-[16/4.5] -ml-10 overflow-auto blur-xl">
				<img
					className="w-[110vw] blur-xl -mt-64 left-0 aspect-video"
					src={`${IMAGE_BASE_URL}/${movieDetail.backdrop_path}`}
					alt=""
				/>
			</div>
		</Page>
	);
}

export default MovieDetailPage;
