"use client";

import React, { useState } from "react";
import scss from "./Trending.module.scss";
import Link from "next/link"; 
import { useGetTrendingMoviesQuery } from "@/redux/api/trending";
import SearchModal from "@/components/shared/SearchModal";

const Trending = () => {
  const [timeWindow, setTimeWindow] = useState<"day" | "week">("day");
  const { data } = useGetTrendingMoviesQuery(timeWindow);

  const truncateText = (text: string, maxLength: number) => {
    if (!text) return "";
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
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

  return (
    <section className={scss.Trending}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.trending_header}>
            <h2>Trending</h2>

            <div className={scss.buttons}>
              <div
                className={scss.switch}
                style={{
                  transform:
                    timeWindow === "day"
                      ? "translateX(0)"
                      : "translateX(100px)",
                }}
              />
              <button
                className={timeWindow === "day" ? scss.active : ""}
                onClick={() => setTimeWindow("day")}
              >
                Day
              </button>
              <button
                className={timeWindow === "week" ? scss.active : ""}
                onClick={() => setTimeWindow("week")}
              >
                Week
              </button>
            </div>
          </div>

          <div className={scss.main_movies_list}>
            {data?.results.slice(0, 5).map((movie) => (
              <div key={movie.id} className={scss.movieCard}>
                <Link href={`/movie/${movie.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className={scss.poster}
                  />
                  <h3>{truncateText(movie.title, 18)}</h3>
                </Link>
                {movie.release_date && (
                  <p>{getFormattedDate(movie.release_date)}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trending;