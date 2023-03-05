import { useState } from "react";
import {restaurantData} from "../constants"

const Searchbar = () => {
  //const  inputText = "KFC"; // js variables

  const [seachText, setSearchText] = useState(""); // react variables
  const [resData, setResData] = useState(restaurantData); // react variables

  function onChangeSeachText() {
    // restaurantData
    console.log("before-",resData);
    console.log(seachText);
    const data = resData.filter(function(res) {
      return res.data.name.includes(seachText);
    })
    
    console.log("data-",data);
    setResData(data);
  }

  return (
    <>
      <div className="inputBox">
        <input
          type="text"
          placeholder="search"
          className="searchbar"
          value={seachText}
          onChange={(e)=> setSearchText(e.target.value)}
        />
        <button className="btn">Search</button>
      </div>
    </>
  );
};



export default Searchbar;
