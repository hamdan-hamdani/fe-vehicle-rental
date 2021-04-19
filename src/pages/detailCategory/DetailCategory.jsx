import { Link } from "react-router-dom";
import HomeScreen from "../../components/HomeScreen";
import "./DetailCategory.css";
import hero from "../../img/mobil.jpg";
function DetailCategory() {
  return (
    <div className="bg">
      <Link to="/home" className="hot-deals">
        <span className="arrow-left"></span>Hot Deals
      </Link>
      <div className="container-flex">
        <div className="container-grid">
          <div className="image">
            <img src={hero} alt="" />
          </div>
          <div className="desc">
            <p>Kintamani, 1.3 miles from location</p>
          </div>
          <div className="vehicle-description">
            <div className="container-name-status">
              <p className="name">KLX Bike</p>
              <p className="status">Available</p>
            </div>
            <div className="price">
              <p className="disc-price">Rp. 320.000/day</p>
              <p className="normal-price">Rp. 200.000/day</p>
            </div>
          </div>
        </div>
        <div className="container-grid">
          <div className="image">
            <img src={hero} alt="" />
          </div>
          <div className="desc">
            <p>Kintamani, 1.3 miles from location</p>
          </div>
          <div className="vehicle-description">
            <div className="container-name-status">
              <p className="name">KLX Bike</p>
              <p className="status">Available</p>
            </div>
            <div className="price">
              <p className="disc-price">Rp. 320.000/day</p>
              <p className="price">Rp. 200.000/day</p>
            </div>
          </div>
        </div>
        <div className="container-grid">
          <div className="image">
            <img src={hero} alt="" />
          </div>
          <div className="desc">
            <p>Kintamani, 1.3 miles from location</p>
          </div>
          <div className="vehicle-description">
            <div className="container-name-status">
              <p className="name">KLX Bike</p>
              <p className="status">Available</p>
            </div>
            <div className="price">
              <p className="disc-price">Rp. 320.000/day</p>
              <p className="price">Rp. 200.000/day</p>
            </div>
          </div>
        </div>
        <div className="container-grid">
          <div className="image">
            <img src={hero} alt="" />
          </div>
          <div className="desc">
            <p>Kintamani, 1.3 miles from location</p>
          </div>
          <div className="vehicle-description">
            <div className="container-name-status">
              <p className="name">KLX Bike</p>
              <p className="status">Available</p>
            </div>
            <div className="price">
              <p className="disc-price">Rp. 320.000/day</p>
              <p className="price">Rp. 200.000/day</p>
            </div>
          </div>
        </div>
        <div className="container-grid">
          <div className="image">
            <img src={hero} alt="" />
          </div>
          <div className="desc">
            <p>Kintamani, 1.3 miles from location</p>
          </div>
          <div className="vehicle-description">
            <div className="container-name-status">
              <p className="name">KLX Bike</p>
              <p className="status">Available</p>
            </div>
            <div className="price">
              <p className="disc-price">Rp. 320.000/day</p>
              <p className="price">Rp. 200.000/day</p>
            </div>
          </div>
        </div>
      </div>
      <HomeScreen />
    </div>
  );
}

export default DetailCategory;
