import React from "react";

function NewsItem({ data }) {
  return (
    <div>
      <h1>{data.title}</h1>
    </div>
  );
}

export default NewsItem;
