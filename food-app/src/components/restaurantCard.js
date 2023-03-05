import {IMG_URL} from '../constants'

const RestaurantCard = ({
    name,
    cuisines,
    cloudinaryImageId,
    costForTwo,
    avgRating,
  }) => {
    return (
      <div>
        <div className="container">
          <div className="card">
            <img
              src={IMG_URL+cloudinaryImageId}
              alt={name}
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>Cost For 2 - {costForTwo}</h4>
            <h4>{avgRating} - Ratings</h4>
          </div>
        </div>
      </div>
    );
  };

  export default RestaurantCard;