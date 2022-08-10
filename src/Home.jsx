import { Link } from "react-router-dom";

const Home = () => {

  return (
    <div>
      <Link to="/posts">Go to posts</Link>
      <Link to="/users/1">User1</Link>
    </div>
  );
};

export default Home;
