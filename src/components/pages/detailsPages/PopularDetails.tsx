"use client";

import React from "react";
import { useParams } from "next/navigation";
import scss from "./PopularDetails.module.scss";
import { CiPlay1 } from "react-icons/ci";
import { useGetPopularQuery } from "@/redux/api/popular";

const PopularDetails = () => {
  const { id } = useParams();

  const { data: PopularData } = useGetPopularQuery();
  const movieDetails = PopularData?.results.find(
    (movie) => movie.id === parseInt(Array.isArray(id) ? id[0] : id)
  );
  

  if (!movieDetails) return <div>Loading...</div>;

  const getYearFromDate = (releaseDate: string): string => {
    if (!releaseDate) return "";
    return releaseDate.split("-")[0];
  };

  const getFormattedDate = (dateString: string): string => {
    if (!dateString) return "";
    const date = new Date(dateString);

    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const roundToOneDecimal = (num: number): number => {
    return Math.round(num * 10) / 10;
  };

  return (
    <section className={scss.TrandingDetails}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.content_img}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
              alt={movieDetails.title}
            />
          </div>

          <div className={scss.content_text}>
            <div className="container_for_details">
              <h1>
                {movieDetails.title} ({" "}
                {getYearFromDate(movieDetails.release_date)} )
              </h1>

              <div className={scss.watched_block}>
                <div className={scss.movie_rate}>
                  <p>{roundToOneDecimal(movieDetails.vote_average)}</p>
                </div>
                <div className={scss.play_icon}>
                  <CiPlay1 />
                </div>
                <div className={scss.text}>
                  <h4>Watch Trailer</h4>
                </div>
              </div>

              <h2>Overview</h2>
              <p>{movieDetails.overview}</p>
              <p>
                Release Date:{" "}
                <span>{getFormattedDate(movieDetails.release_date)}</span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularDetails;
