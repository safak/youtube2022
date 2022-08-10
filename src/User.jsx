import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const User = () => {
  const [user, setUser] = useState({});
  const id = useLocation().pathname.split("/")[2];

  //FETCH AND CLEAN-UP

  // useEffect(() => {
  //   let unsubscribed = false;
  //   fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (!unsubscribed) {
  //         setUser(data);
  //       }
  //     });

  //   return () => {
  //     console.log("cancelled!")
  //     unsubscribed = true;
  //   };
  // }, [id]);

  //FETCH AND ABORT

  // useEffect(() => {
  //   const controller = new AbortController();
  //   const signal = controller.signal;

  //   fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { signal })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setUser(data);
  //     })
  //     .catch((err) => {
  //       if (err === "AbortError") {
  //         console.log("Request canceled!");
  //       }else{ todo:handle error }
  //     });

  //   return () => {
  //     controller.abort();
  //   };
  // }, [id]);

  //FETCH AND ABORT (AXIOS)
  useEffect(() => {
    const cancelToken = axios.CancelToken.source();

    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`, {
        cancelToken: cancelToken.token,
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.log("Request canceled!");
        } else {
          //todo:handle error
        }
      });

    return () => {
      cancelToken.cancel();
    };
  }, [id]);

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <Link to="/users/1">Fetch User 1</Link>
      <Link to="/users/2">Fetch User 2</Link>
      <Link to="/users/3">Fetch User 3</Link>
    </div>
  );
};

export default User;
