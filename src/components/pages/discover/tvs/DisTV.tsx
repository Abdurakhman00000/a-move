"use client";

import React from "react";
import "./DisTV.css";
import { useGetDiscoverTVQuery } from "@/redux/api/discoverTV";

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
            {data?.results.map((item) => (
              <div key={item.id} className="disTVCard">
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                  alt=""
                />
                <h3>{truncateText(item.name, 18)}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisTV;
