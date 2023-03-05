
import RestaurantCard from '../components/restaurantCard'
import {restaurantData} from '../constants'
import Searchbar from '../components/searchbar';

const BodyComponent = () => {
    return (
      <>
        <Searchbar/>
      <div className="restaurentList">
        {restaurantData.map((restaurent) => {
          return <RestaurantCard  key={restaurent.data.id} {...restaurent.data} />;
        })}
      </div>
      </>
    );
  };


  export default BodyComponent;