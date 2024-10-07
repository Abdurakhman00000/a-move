"use client";

import React from "react";
import { useParams } from "next/navigation";
import scss from "./SearchResultsDetails.module.scss"; // Импортируйте стили, если есть
import { useGetSearchItemDetailsQuery } from "@/redux/api/details";

const SearchDetails = () => {
  const { id, mediaType } = useParams();

  if (!id || !mediaType) {
    return <p>Invalid search item ID or media type</p>;
  }

  const { data: itemDetails, isLoading, error } = useGetSearchItemDetailsQuery({ id: Number(id), mediaType });

  if (isLoading) return <p>Loading item details...</p>;
  if (error || !itemDetails) return <p>Error loading item details</p>;

  return (
    <div className={scss.SearchResultsDetails}>
      <div className="container">
        <div className={scss.content}>
          <img
            src={`https://image.tmdb.org/t/p/w500${itemDetails.poster_path}`}
            alt={itemDetails.title || itemDetails.name}
          />
          <h1>{itemDetails.title || itemDetails.name}</h1>
          <p>{itemDetails.overview}</p>
          {itemDetails.release_date && (
            <p>Release Date: {itemDetails.release_date}</p>
          )}
          {itemDetails.vote_average && (
            <p>Rating: {itemDetails.vote_average}</p>
          )}
          {itemDetails.genres && (
            <button>
              Genres: {itemDetails.genres.map((genre) => genre.name).join(", ")}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchDetails;
