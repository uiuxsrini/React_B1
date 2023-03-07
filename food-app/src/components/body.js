import RestaurantCard from "../components/restaurantCard";
import { restaurantData } from "../constants";
import { useState } from "react";

function filterData(seachText, resData) {
  const filter =  resData.filter((res) => res.data.name.includes(seachText));
  return filter;
}

const BodyComponent = () => {
  const [seachText, setSearchText] = useState(""); // react variables
  const [resData, setResData] = useState(restaurantData); // react variables
  return (
    <>
      <div className="inputBox">
        <input
          type="text"
          placeholder="search"
          className="searchbar"
          value={seachText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="btn" onClick={() => {
          const data = filterData(seachText, resData);
          setResData(data);
        }}>
          Search
        </button>
      </div>

      <div className="restaurentList">
        {resData.map((restaurent) => {
          return (
            <RestaurantCard key={restaurent.data.id} {...restaurent.data} />
          );
        })}
      </div>
    </>
  );
};

export default BodyComponent;
