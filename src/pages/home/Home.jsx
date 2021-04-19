import Button from "../../components/Button";
import HomeScreen from "../../components/HomeScreen";
import Input from "../../components/Input";
import SelectBox from "../../components/SelectBox";
import hero from "../../img/mobil.jpg";

import "./Home.css";
function Home() {
  return (
    <div>
      <div className="hero">
        <img src={hero} alt="" />
      </div>
      <div className="container-search-vehicle">
        <div className="container-flex">
          <div className="container-location-date">
            <Input outPlaceholder="Select Location" />
            <Input outPlaceholder="Select Date" />
          </div>
          <div className="container-category-date">
            <SelectBox selectCategory="category" selectValue="cars" />
            <SelectBox selectCategory="date" selectValue="1Day" />
          </div>
        </div>
        <div className="button-search-vehicle">
          <Button textButton="Search Vehicle" />
        </div>
      </div>
      <div className="container-vehic">
        <div className="recommended">
          <p>Recommended</p>
        </div>
        <div className="view-more">
          <p>View more </p>
        </div>
        <div className="container-image-vehicle">
          <img src={hero} alt="" />
          <img src={hero} alt="" />
          <img src={hero} alt="" />
          <img src={hero} alt="" />
        </div>
        <HomeScreen />
      </div>
    </div>
  );
}

export default Home;
