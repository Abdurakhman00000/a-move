"use client";

import React from "react";
import scss from "./TopRated.module.scss";
import { useGetTopRatedQuery } from "@/redux/api/topRated";
import Link from "next/link";

const TopRated = () => {
  const { data } = useGetTopRatedQuery();

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
    <section className={scss.TopRated}>
      <div className="container">
        <div className={scss.content}>
          <h2>Top Rated</h2>
          <div className={scss.main_topRated_list}>
            {data?.results.slice(0, 5).map((item) => (
              <div key={item.id} className={scss.topRatedCard}>
                <Link href={`/topRated/${item.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                    alt=""
                  />
                  <h3>{truncateText(item.title, 18)}</h3>
                </Link>
                {item.release_date && (
                  <p>{getFormattedDate(item.release_date)}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopRated;
