import React, { useEffect, useState } from "react";
import loading from "./imgs/loading.gif"

const serverDomain = "https://lukas-backend.herokuapp.com/";

function Blog() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getBlogs() {
      try {
        const response = await fetch(serverDomain + "blogs");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log(error);
      }
    }
    getBlogs();
  }, []);

  return (
    <div>
      <title>Blog</title>
      <h1 className="pageName">Blog</h1>
      {data &&
        data.map((d) => {
          console.log(d.id);
          return (
            <div
              key={d.id}
              onClick={() => (window.location = `/blog/${d.id}`)}
              className="blog"
            >
              <h3 className="date">{d.posted_date}</h3>
              <h3>{d.title}</h3>
              <p>{d.body}</p>
              <p className="id">{d.id}</p>
            </div>
          );
        })}
      <img src={!data ? loading : undefined} alt="" className="spinner" />
    </div>
  );
}

export default Blog;
