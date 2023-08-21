import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://static.zarahome.net/8/photos4/2023/I/4/1/p/7308/748/658/7308748658_2_7_2.jpg?t=1685957472849&imwidth=819&imformat=chrome"
            alt=""
          />
          <button>
            <Link className="link" to="/products/">
              Sale
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://static.zarahome.net/8/photos4/2023/I/4/1/p/6336/106/800/6336106800_2_7_2.jpg?t=1690368905664&imwidth=819&imformat=chrome"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Deco
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          {" "}
          <img
            src="https://static.zarahome.net/8/photos4/2023/I/4/1/b/4226/000/737/BH/ZZ/4226000737_12_2_1.jpg?t=1690985356935&imformat=chrome"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              New Season
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://static.zarahome.net/8/photos4/2023/I/4/1/p/4123/072/800/4123072800_2_7_2.jpg?t=1678206849124&imwidth=819&imformat=chrome"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                Furniture
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              {" "}
              <img
                src="https://static.zarahome.net/8/photos4/2023/I/4/1/p/5174/091/711/5174091711_2_7_2.jpg?t=1690987745058&imwidth=819&imformat=chrome"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  Textil
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://static.zarahome.net/8/photos4/2023/I/4/1/p/4244/047/250/4244047250_7_1_3.jpg?t=1686298891068&imformat=chrome"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Ilumination
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;