import { useContext, useState, } from "react";
import "./stories.scss";
import { AuthContext } from "../../context/authContext";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const Stories = () => {
  const { currentUser } = useContext(AuthContext);
  const [file, setFile] = useState(null);
  const { isLoading, error, data } = useQuery(["stories"], () =>
    makeRequest.get("/stories").then((res) => {
      return res.data;
    })
  );
  console.log(data)
  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const up = await makeRequest.post("/upload", formData);
      return up.data;

    } catch (err) {
      console.log(err);
    }
  };

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (newStory) => {
      return makeRequest.post("/stories", newStory);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["stories"]);
      },
    }
  );
  const handleClick = async (e) => {
    e.preventDefault();
    let imgUrl = "";
    if (file) imgUrl = await upload();
    console.log(imgUrl)
    mutation.mutate({ img: imgUrl });
    setFile(null);
  };

  //TODO Add story using react-query mutations and use upload function.

  return (
    <div className="stories">
      <div className="story">
        <img src={"/upload/" + currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        <label htmlFor="stor" className="btns">
          +
        </label>
        <input
          type="file"
          name="file"
          id="stor"
          onChange={(e) => setFile(e.target.files[0])}
          style={{ display: "none" }}
        />
        <button onClick={handleClick} className="bntes">
          Add story
        </button>
      </div>
      {error
        ? "Something went wrong"
        : isLoading
        ? "loading"
        : data.map((story) => {
          return(
            <div className="story" key={story.id}>
            <img src={"/upload/" + story.img} alt="" />
            <span>{story.name}</span>
          </div>
          )}
          )}
    </div>
  );
};

export default Stories;
