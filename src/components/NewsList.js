import React, { useContext } from "react";
import { NewsContext } from "../NewsContext";
import NewsItem from "./NewsItem";

function NewsList(props) {
  const { data } = useContext(NewsContext);
  console.log(data);

  return (
    <div>
      {data
        ? data.articles.map(news => <NewsItem data={news} key={news.url} />)
        : "Loading"}
    </div>
  );
}

export default NewsList;
