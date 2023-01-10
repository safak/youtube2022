import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import D30 from "../../components/D30/Chart";
import DAU from "../../components/DAU/Chart";
import Table from "../../components/table/Table";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
          <Widget type="liveshows" />
        </div>
        <div className="charts">
          <DAU title="Daily Active Users" aspect={1 / 1} />
          <Chart title="Monthly Active Users" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle"></div>
          <D30 title="D30 Retention Graph" aspect={3 / 1} />
        </div>
      </div>
    </div>
  );
};

export default Home;
