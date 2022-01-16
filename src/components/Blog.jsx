import React, { useEffect, useState } from "react";

const serverDomain = "https://lukas-backend.herokuapp.com/";

function Blog() {
  const [data, setData] = useState("");

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
      <h1>{!data && "Server je offline!"}</h1>
    </div>
  );
}

export default Blog;
