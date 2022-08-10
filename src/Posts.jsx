import React, { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  //HOW TO FETCH DATA PROPERLY
  useEffect(() => {
    let subscribed = true;
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        if (subscribed) {
          alert("posts are ready!")
          setPosts(data);
          console.log(data)
        }
      });

      return () => {
        console.log("cancelled!")
        subscribed = false;
      };
  }, []);

  return (
    <div>
      {posts.map((p) => (
        <p key={p.id}>{p.title}</p>
      ))}
    </div>
  );
};

export default Posts;
