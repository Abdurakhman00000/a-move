// components/DisMovies.tsx
"use client";

import React from "react";
import scss from "./DisMovies.module.scss";
import Link from "next/link";
import { useGetDiscoverMoviesQuery } from "@/redux/api/discoverMovies";



interface Movie {
  id: number;
  title: string;
  backdrop_path: string | null;
  release_date: string;
}

const DisMovies = () => {
  const { data } = useGetDiscoverMoviesQuery();

  const truncateText = (text: string, maxLength: number) => {
    if (!text) return "";
    return text.length > maxLength ? text.slice(0, maxLength) + "...": text;
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
    <section className={scss.DisMovies}>
      <div className="container">
        <div className={scss.content}> 
          <h2>Explore movies</h2>
          <div className={scss.main_disMovies_list}>
            {data?.results.map((item: Movie) => (
              <Link key={item.id} href={`/exMovie/${item.id}`}>
                <div className={scss.disMoviesCard}>
                  {item.backdrop_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                      alt=""
                    />
                  ) : (
                    <img
                      src="https://ecomovie.life/assets/no-poster-4xa9LmsT.png"
                      alt=""
                    />
                  )}
                  <h3>{truncateText(item.title, 18)}</h3>
                  {item.release_date && (
                    <p>{getFormattedDate(item.release_date)}</p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisMovies;
