"use client";

import React from "react";
import "./DisTV.css";
import { useGetDiscoverTVQuery } from "@/redux/api/discoverTV";
import Link from "next/link";

interface TVShow {
  id: number;
  name: string;
  backdrop_path: string | null;
}

const DisTV = () => {
  const { data } = useGetDiscoverTVQuery();

  const truncateText = (text: string, maxLength: number) => {
    if (!text) return "";
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return (
    <section className="DisTvs">
      <div className="container">
        <div className="content">
          <h2>Explore movies</h2>
          <div className="main_disTV_list">
            {data?.results.map((item: TVShow) => (
              <Link key={item.id} href={`/exTv/${item.id}`}>
              <div key={item.id} className="disTVCard">
                {item.backdrop_path ? (
                   <img
                   src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                   alt=""
                 />
                ) : (
                  <img src="https://ecomovie.life/assets/no-poster-4xa9LmsT.png" alt="" />
                )}
                <h3>{truncateText(item.name, 18)}</h3>
              </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisTV;
