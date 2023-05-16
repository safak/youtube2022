import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts";
// import Update from "../../components/update/Update"
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { useState } from "react";


const Profile = () => {
  const [openUpdate, setOpenUpdate] = useState(false);
  const { currentUser } = useContext(AuthContext);

  const userId = parseInt(useLocation().pathname.split("/")[2]);

  const { isLoading, error, data } = useQuery(["user"], () =>
    makeRequest.get("/users/find/" + userId).then((res) => {
      return res.data;
    })
  );
  //   const { isLoading, error, data } = useQuery(["comments"], () =>
  //   makeRequest.get("/comments?postId=" + postId).then((res) => {
  //     return res.data;
  //   })
  // );


  // const { isLoading: rIsLoading } = useQuery(
  //   ["relationship"],
  //   () =>
  //     makeRequest.get("/relationships?followedUserId=" + userId).then((res) => {
  //       return res.data;
  //     })
  // );

  const queryClient = useQueryClient();

  
  
  // Mutations
  const mutation = useMutation({
    mutationFn: (Users)=>{
      return makeRequest.post("/users", Users);
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["users"] })
    },
  });

  // const mutation = useMutation(
  //   (following) => {
  //     if (following)
  //       return makeRequest.delete("/relationships?userId=" + userId);
  //     return makeRequest.post("/relationships", { userId });
  //   },
  //   {
  //     onSuccess: () => {
  //       // Invalidate and refetch
  //       queryClient.invalidateQueries(["relationship"]);
  //     },
  //   }
  // );

  // const handleFollow = () => {
  //   mutation.mutate(relationshipData.includes(currentUser.id));
  // };

  return (
    <div className="profile">
      <div className="images">
        <img
          src={currentUser.cover}
          alt=""
          className="cover"
        />
        <img
          src={currentUser.profile}
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <div className="item">
              <AccountCircleIcon />
              <span>{currentUser.fullname}</span>
            </div>
            <br/>
            <div className="item">
              <EmailOutlinedIcon />
              <span>{currentUser.email}</span>
            </div>
          </div>
          <div className="center">
            <span>@{currentUser.username}</span>
            <div className="info">
              <div className="item">
                <span>{currentUser.bio}</span>
              </div>
            </div>

          
            {/* {isLoading ? (
                  "loading"
                ) : userId === currentUser.id ? (
                  <button onClick={() => setOpenUpdate(true)}>update</button>
                ) 
                : (
                  <button >
                    {relationshipData.includes(currentUser.id)
                      ? "Following"
                      : "Follow"}
                  </button>
                )
                } */}
       
          </div>
          {/* <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div> */}
          
        </div>
      {/* <Posts userId={userId}/> */}
      {/* <Update /> */}
      </div>

      
    </div>
  );
};

export default Profile;
