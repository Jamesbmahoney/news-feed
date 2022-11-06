import React from "react";

function NewsItem({ data }) {
  return (
    <div className="news background">
      <h1 className="news__title">{data.title}</h1>
      <p className="news__desc">{data.description}</p>
      <h5 className="news__author">{data.author}</h5>
    </div>
  );
}

export default NewsItem;
