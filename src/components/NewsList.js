import React, { useContext } from "react";
import { NewsContext } from "../NewsContext";
import NewsItem from "./NewsItem";

function NewsList(props) {
  const { data } = useContext(NewsContext);
  console.log(data);

  return (
    <div>
      {data
        ? data.articles
            .sort((a, b) => a.title  !== b.title ? a.title < b.title ? -1 : 1 : 0)
            .map((news) => <NewsItem data={news} key={news.url} />)
        : "Loading"}
    </div>
  );
}

export default NewsList;
