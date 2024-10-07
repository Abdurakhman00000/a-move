"use client";

import React from "react";
import { useParams } from "next/navigation";
import scss from "./DisTvDetails.module.scss"
import { useGetTvDetailsQuery } from "@/redux/api/details";


const DisTvDetails = () => {
  const { id } = useParams();

  if (!id) {
    return <p>Invalid TV show ID</p>;
  }

  const {
    data: tvDetails,
    isLoading,
    error,
  } = useGetTvDetailsQuery(Number(id));

  if (isLoading) return <p>Loading TV show details...</p>;
  if (error || !tvDetails) return <p>Error loading TV show details</p>;

  return (
    <div className={scss.DisTVDetails}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.disTVimg}>
          <img
            src={`https://image.tmdb.org/t/p/w500${tvDetails.backdrop_path}`}
            alt={tvDetails.name}
          />
          </div>

          <div className={scss.disTVtext}>
            <h1>{tvDetails.name}</h1>
            <p>{tvDetails.homepage}</p>
            <p>{tvDetails.overview}</p>
            <p>First Air Date: {tvDetails.first_air_date}</p>
            <p>Rating: {tvDetails.vote_average}</p>
            <button>
              Genres: {tvDetails.genres.map((genre) => genre.name).join(", ")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisTvDetails;
