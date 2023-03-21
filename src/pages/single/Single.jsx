import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

import DataTable from "./table";
import { Box, Stack } from "@mui/system";
import CardHeader from "./CardHeader";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <Box className="left">
            <div className="editButton">Expediente</div>
            <h1 className="title">Information</h1>
            <Stack className="item">
              <div className="cardHeader">
                {/* <div className="details">
                  <h1 className="itemTitle">Jane Doe</h1>
                  <div className="detailItem">
                    <span className="itemKey">Email:</span>
                    <span className="itemValue">janedoe@gmail.com</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Phone:</span>
                    <span className="itemValue">+1 2345 67 89</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Address:</span>
                    <span className="itemValue">
                      Elton St. 234 Garden Yd. NewYork
                    </span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Country:</span>
                    <span className="itemValue">USA</span>
                  </div>
                </div> */}
                <CardHeader />
              </div>

              <div>
                <DataTable />
              </div>
            </Stack>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Single;
