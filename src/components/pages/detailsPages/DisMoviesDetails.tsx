"use client";

import React from "react";
import { useParams } from "next/navigation"; // Импортируйте useParams
import scss from "./DisMoviesDetails.module.scss";
import { useGetMovieDetailsQuery } from "@/redux/api/details";

const DisMoviesDetails = () => {
  const { id } = useParams(); 

  if (!id) {
    return <p>Invalid movie ID</p>;
  }

  const { data: movieDetails, isLoading, error } = useGetMovieDetailsQuery(Number(id));

  if (isLoading) return <p>Loading movie details...</p>;
  if (error || !movieDetails) return <p>Error loading movie details</p>;

  return (
    <div className={scss.DisMoviesDetails}>
      <div className="container">
        <div className={scss.content}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt={movieDetails.title}
          />
          <h1>{movieDetails.title}</h1>
          <p>{movieDetails.overview}</p>
          <p>Release Date: {movieDetails.release_date}</p>
          <p>Rating: {movieDetails.vote_average}</p>
          <button>
            Genres: {movieDetails.genres.map((genre) => genre.name).join(", ")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisMoviesDetails;
