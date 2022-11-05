import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = "ba83428ae1ea48ccabe481b023da977a";

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=Apple&from=2022-11-05&sortBy=popularity&apiKey=${apiKey}`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};
