import logo from "./logo1.png";
import "./App.css";

/** Application Layout
 * Header
 *  - logo
 *  - nav items
 * Body
 *  - search bar
 *  - restaurant List
 *    - restaurant card
 *      - Image
 *      - name
 *      - rating
 *      - price
 * Footer
 *  - links
 *
 * @returns
 */
const restaurantData = [{
  "type": "restaurant",
  "data": {
    "type": "F",
    "id": "307050",
    "name": "Call Me Chow",
    "uuid": "b9bf2a17-faf9-4e4a-a6a7-61197d4bafa0",
    "city": "1",
    "area": "Koramangala",
    "totalRatingsString": "1000+ ratings",
    "cloudinaryImageId": "soegobqsiqvhmkfvnnkj",
    "cuisines": [
      "Chinese",
      "Pan-Asian"
    ],
    "tags": [],
    "costForTwo": 40000,
    "costForTwoString": "₹400 FOR TWO",
    "deliveryTime": 36,
    "minDeliveryTime": 36,
    "maxDeliveryTime": 36,
    "slaString": "36 MINS",
    "lastMileTravel": 5.599999904632568,
    "slugs": {
      "restaurant": "call-me-chow-koramangala-koramangala",
      "city": "bangalore"
    },
    "cityState": "1",
    "address": "Call Me Chow, No. 364/A, Ground Floor, 3rd Cross, VSR Layout, Koramangala 8th Block, Bengaluru, Karnataka - 560095",
    "locality": "8th Block",
    "parentId": 18560,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "aggregatedDiscountInfo": {
      "header": "40% off",
      "shortDescriptionList": [
        {
          "meta": "40% off | Use SPECIALS",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "40% off up to ₹80 on select items | Use code SPECIALS",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "aggregatedDiscountInfoV2": {
      "header": "40% OFF",
      "shortDescriptionList": [
        {
          "meta": "Use SPECIALS",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "40% off up to ₹80 on select items | Use code SPECIALS",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "ribbon": [
      {
        "type": "PROMOTED"
      }
    ],
    "chain": [],
    "feeDetails": {
      "fees": [],
      "totalFees": 0,
      "message": "",
      "title": "",
      "amount": "",
      "icon": ""
    },
    "availability": {
      "opened": true,
      "nextOpenMessage": "",
      "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "cid=6108301~p=1~eid=00000186-a305-4969-0557-05e800910153",
    "badges": {
      "imageBased": [],
      "textBased": [],
      "textExtendedBadges": []
    },
    "lastMileTravelString": "5.5 kms",
    "hasSurge": false,
    "sla": {
      "restaurantId": "307050",
      "deliveryTime": 36,
      "minDeliveryTime": 36,
      "maxDeliveryTime": 36,
      "lastMileTravel": 5.599999904632568,
      "lastMileDistance": 0,
      "serviceability": "SERVICEABLE",
      "rainMode": "NONE",
      "longDistance": "NOT_LONG_DISTANCE",
      "preferentialService": false,
      "iconType": "EMPTY"
    },
    "promoted": true,
    "avgRating": "4.3",
    "totalRatings": 1000,
    "new": false
  },
  "subtype": "basic"
},
{
  "type": "restaurant",
  "data": {
    "type": "F",
    "id": "3241",
    "name": "Meghana Foods",
    "uuid": "93695df0-56e1-417e-b9a8-32084ebaadaf",
    "city": "1",
    "area": "Ashok Nagar",
    "totalRatingsString": "1000+ ratings",
    "cloudinaryImageId": "e0vvulfbahjxjz6k4uwi",
    "cuisines": [
      "Biryani",
      "Andhra",
      "South Indian",
      "North Indian",
      "Chinese",
      "Seafood"
    ],
    "tags": [],
    "costForTwo": 50000,
    "costForTwoString": "₹500 FOR TWO",
    "deliveryTime": 37,
    "minDeliveryTime": 37,
    "maxDeliveryTime": 37,
    "slaString": "37 MINS",
    "lastMileTravel": 2.4000000953674316,
    "slugs": {
      "restaurant": "meghana-foods-central-bangalore",
      "city": "bangalore"
    },
    "cityState": "1",
    "address": "57/1, 1st Floor, Jayalaxmi Chambers, Next to Old Galaxy Theatre,Residency Road, Bangalore",
    "locality": "Residency Road",
    "parentId": 635,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "aggregatedDiscountInfo": {
      "header": "FREE DELIVERY",
      "shortDescriptionList": [
        {
          "meta": "FREE DELIVERY",
          "discountType": "FREE_DELIVERY",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "FREE DELIVERY",
          "discountType": "FREE_DELIVERY",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "aggregatedDiscountInfoV2": {
      "header": "",
      "shortDescriptionList": [
        {
          "meta": "Free Delivery",
          "discountType": "FREE_DELIVERY",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "FREE DELIVERY",
          "discountType": "FREE_DELIVERY",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "chain": [],
    "feeDetails": {
      "fees": [],
      "totalFees": 0,
      "message": "",
      "title": "",
      "amount": "",
      "icon": ""
    },
    "availability": {
      "opened": true,
      "nextOpenMessage": "",
      "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
      "imageBased": [],
      "textBased": [],
      "textExtendedBadges": []
    },
    "lastMileTravelString": "2.4 kms",
    "hasSurge": false,
    "sla": {
      "restaurantId": "3241",
      "deliveryTime": 37,
      "minDeliveryTime": 37,
      "maxDeliveryTime": 37,
      "lastMileTravel": 2.4000000953674316,
      "lastMileDistance": 0,
      "serviceability": "SERVICEABLE",
      "rainMode": "NONE",
      "longDistance": "NOT_LONG_DISTANCE",
      "preferentialService": false,
      "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "4.6",
    "totalRatings": 1000,
    "new": false
  },
  "subtype": "basic"
},
{
  "type": "restaurant",
  "data": {
    "type": "F",
    "id": "121603",
    "name": "Kannur Food Point",
    "uuid": "51983905-e698-4e31-b0d7-e376eca56320",
    "city": "1",
    "area": "Tavarekere",
    "totalRatingsString": "5000+ ratings",
    "cloudinaryImageId": "bmwn4n4bn6n1tcpc8x2h",
    "cuisines": [
      "Kerala",
      "Chinese"
    ],
    "tags": [],
    "costForTwo": 30000,
    "costForTwoString": "₹300 FOR TWO",
    "deliveryTime": 37,
    "minDeliveryTime": 37,
    "maxDeliveryTime": 37,
    "slaString": "37 MINS",
    "lastMileTravel": 6.5,
    "slugs": {
      "restaurant": "kannur-food-point-btm",
      "city": "bangalore"
    },
    "cityState": "1",
    "address": "6/21,9TH CROSS ,1ST MAIN, VENKATESHWARA LAYOUT,SG PALYA, BENGALURU, - 560093",
    "locality": "SG Palya",
    "parentId": 20974,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "aggregatedDiscountInfo": {
      "header": "50% off",
      "shortDescriptionList": [
        {
          "meta": "50% off on all orders",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        },
        {
          "meta": "FREE DELIVERY",
          "discountType": "FREE_DELIVERY",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "50% off on all orders",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        },
        {
          "meta": "FREE DELIVERY",
          "discountType": "FREE_DELIVERY",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "aggregatedDiscountInfoV2": {
      "header": "50% OFF",
      "shortDescriptionList": [
        {
          "meta": "Free Delivery",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "50% off on all orders",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        },
        {
          "meta": "FREE DELIVERY",
          "discountType": "FREE_DELIVERY",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "chain": [],
    "feeDetails": {
      "fees": [],
      "totalFees": 0,
      "message": "",
      "title": "",
      "amount": "",
      "icon": ""
    },
    "availability": {
      "opened": true,
      "nextOpenMessage": "",
      "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
      "imageBased": [],
      "textBased": [],
      "textExtendedBadges": []
    },
    "lastMileTravelString": "6.5 kms",
    "hasSurge": false,
    "sla": {
      "restaurantId": "121603",
      "deliveryTime": 37,
      "minDeliveryTime": 37,
      "maxDeliveryTime": 37,
      "lastMileTravel": 6.5,
      "lastMileDistance": 0,
      "serviceability": "SERVICEABLE",
      "rainMode": "NONE",
      "longDistance": "NOT_LONG_DISTANCE",
      "preferentialService": false,
      "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "3.8",
    "totalRatings": 5000,
    "new": false
  },
  "subtype": "basic"
},
{
  "type": "restaurant",
  "data": {
    "type": "F",
    "id": "574263",
    "name": "Rahhams",
    "uuid": "9ddbdf8d-e73c-4a33-81f2-3713c4193b39",
    "city": "1",
    "area": "Frazer Town",
    "totalRatingsString": "500+ ratings",
    "cloudinaryImageId": "edkut9gmhjqq6urnnmwv",
    "cuisines": [
      "Biryani",
      "Mughlai",
      "North Indian",
      "Kebabs",
      "Chinese",
      "Seafood",
      "Beverages"
    ],
    "tags": [],
    "costForTwo": 70000,
    "costForTwoString": "₹700 FOR TWO",
    "deliveryTime": 40,
    "minDeliveryTime": 40,
    "maxDeliveryTime": 40,
    "slaString": "40 MINS",
    "lastMileTravel": 4.599999904632568,
    "slugs": {
      "restaurant": "rahhams-frazer-town-frazer-town-2",
      "city": "bangalore"
    },
    "cityState": "1",
    "address": "82, Maiganda Deva Mudaliar Rd, Pulikeshi Nagar, Bengaluru, Karnataka 560005, India",
    "locality": "Pulikeshi Nagar",
    "parentId": 2534,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "aggregatedDiscountInfo": {
      "header": "FREE DELIVERY",
      "shortDescriptionList": [
        {
          "meta": "FREE DELIVERY",
          "discountType": "FREE_DELIVERY",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "FREE DELIVERY",
          "discountType": "FREE_DELIVERY",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "aggregatedDiscountInfoV2": {
      "header": "",
      "shortDescriptionList": [
        {
          "meta": "Free Delivery",
          "discountType": "FREE_DELIVERY",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "FREE DELIVERY",
          "discountType": "FREE_DELIVERY",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "ribbon": [
      {
        "type": "PROMOTED"
      }
    ],
    "chain": [],
    "feeDetails": {
      "fees": [],
      "totalFees": 0,
      "message": "",
      "title": "",
      "amount": "",
      "icon": ""
    },
    "availability": {
      "opened": true,
      "nextOpenMessage": "",
      "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "cid=6084271~p=4~eid=00000186-a305-4969-0557-05e900910467",
    "badges": {
      "imageBased": [],
      "textBased": [],
      "textExtendedBadges": []
    },
    "lastMileTravelString": "4.5 kms",
    "hasSurge": false,
    "sla": {
      "restaurantId": "574263",
      "deliveryTime": 40,
      "minDeliveryTime": 40,
      "maxDeliveryTime": 40,
      "lastMileTravel": 4.599999904632568,
      "lastMileDistance": 0,
      "serviceability": "SERVICEABLE",
      "rainMode": "NONE",
      "longDistance": "NOT_LONG_DISTANCE",
      "preferentialService": false,
      "iconType": "EMPTY"
    },
    "promoted": true,
    "avgRating": "4.4",
    "totalRatings": 500,
    "new": false
  },
  "subtype": "basic"
},
{
  "type": "restaurant",
  "data": {
    "type": "F",
    "id": "30531",
    "name": "Hotel Empire",
    "uuid": "b6535450-6f4c-434f-8cae-425317928346",
    "city": "1",
    "area": "Brigade Road",
    "totalRatingsString": "1000+ ratings",
    "cloudinaryImageId": "qltgnkyywuo5gmnpqzbm",
    "cuisines": [
      "North Indian",
      "Kebabs",
      "Biryani"
    ],
    "tags": [],
    "costForTwo": 45000,
    "costForTwoString": "₹450 FOR TWO",
    "deliveryTime": 30,
    "minDeliveryTime": 30,
    "maxDeliveryTime": 30,
    "slaString": "30 MINS",
    "lastMileTravel": 2.200000047683716,
    "slugs": {
      "restaurant": "empire-restaurant-central-bangalore-central-bangalore",
      "city": "bangalore"
    },
    "cityState": "1",
    "address": "Empire SuitesNo.35, Castle Street, Off Brigade Road,Bengaluru, Karnataka 560025",
    "locality": "",
    "parentId": 475,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "aggregatedDiscountInfo": {
      "header": "10% off",
      "shortDescriptionList": [
        {
          "meta": "10% off | Use TRYNEW",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "10% off up to ₹40 | Use code TRYNEW",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "aggregatedDiscountInfoV2": {
      "header": "10% OFF",
      "shortDescriptionList": [
        {
          "meta": "Use TRYNEW",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "10% off up to ₹40 | Use code TRYNEW",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "chain": [],
    "feeDetails": {
      "fees": [],
      "totalFees": 0,
      "message": "",
      "title": "",
      "amount": "",
      "icon": ""
    },
    "availability": {
      "opened": true,
      "nextOpenMessage": "",
      "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
      "imageBased": [],
      "textBased": [],
      "textExtendedBadges": []
    },
    "lastMileTravelString": "2.2 kms",
    "hasSurge": false,
    "sla": {
      "restaurantId": "30531",
      "deliveryTime": 30,
      "minDeliveryTime": 30,
      "maxDeliveryTime": 30,
      "lastMileTravel": 2.200000047683716,
      "lastMileDistance": 0,
      "serviceability": "SERVICEABLE",
      "rainMode": "NONE",
      "longDistance": "NOT_LONG_DISTANCE",
      "preferentialService": false,
      "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "4.3",
    "totalRatings": 1000,
    "new": false
  },
  "subtype": "basic"
},
{
  "type": "restaurant",
  "data": {
    "type": "F",
    "id": "432976",
    "name": "KFC",
    "uuid": "defeaf4b-c573-4d7c-a223-9112847055b5",
    "city": "1",
    "area": "Shanti Nagar",
    "totalRatingsString": "100+ ratings",
    "cloudinaryImageId": "bdcd233971b7c81bf77e1fa4471280eb",
    "cuisines": [
      "Burgers",
      "Biryani",
      "American",
      "Snacks",
      "Fast Food"
    ],
    "tags": [],
    "costForTwo": 40000,
    "costForTwoString": "₹400 FOR TWO",
    "deliveryTime": 33,
    "minDeliveryTime": 33,
    "maxDeliveryTime": 33,
    "slaString": "33 MINS",
    "lastMileTravel": 2.9000000953674316,
    "slugs": {
      "restaurant": "kfc-shantinagar-shantinagar",
      "city": "bangalore"
    },
    "cityState": "1",
    "address": "K.F.C. at Ground Floor, Hotel Sabharwal Residency, Oppo. KSRTC Office, No 90, KH Road (Double Road), Sudhama Nagar, Shanti Nagar, Bengaluru, Shanthinagara , B.B.M.P East, Karnataka, 560027",
    "locality": "Double Road",
    "parentId": 547,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "aggregatedDiscountInfo": {
      "header": "FREE DELIVERY",
      "shortDescriptionList": [
        {
          "meta": "FREE DELIVERY",
          "discountType": "FREE_DELIVERY",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "FREE DELIVERY",
          "discountType": "FREE_DELIVERY",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "aggregatedDiscountInfoV2": {
      "header": "",
      "shortDescriptionList": [
        {
          "meta": "Free Delivery",
          "discountType": "FREE_DELIVERY",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "FREE DELIVERY",
          "discountType": "FREE_DELIVERY",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "ribbon": [
      {
        "type": "PROMOTED"
      }
    ],
    "chain": [],
    "feeDetails": {
      "fees": [],
      "totalFees": 0,
      "message": "",
      "title": "",
      "amount": "",
      "icon": ""
    },
    "availability": {
      "opened": true,
      "nextOpenMessage": "",
      "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "cid=6109309~p=7~eid=00000186-a305-4969-0557-05ea00910737",
    "badges": {
      "imageBased": [],
      "textBased": [],
      "textExtendedBadges": []
    },
    "lastMileTravelString": "2.9 kms",
    "hasSurge": false,
    "sla": {
      "restaurantId": "432976",
      "deliveryTime": 33,
      "minDeliveryTime": 33,
      "maxDeliveryTime": 33,
      "lastMileTravel": 2.9000000953674316,
      "lastMileDistance": 0,
      "serviceability": "SERVICEABLE",
      "rainMode": "NONE",
      "longDistance": "NOT_LONG_DISTANCE",
      "preferentialService": false,
      "iconType": "EMPTY"
    },
    "promoted": true,
    "avgRating": "4.0",
    "totalRatings": 100,
    "new": false
  },
  "subtype": "basic"
}];

const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="logo" width="150" height="100" />
      </div>
      <div className="navbar">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Profile</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = ({name, cuisines, cloudinaryImageId, costForTwo, avgRating}) => {
  return (
    <div>
      <div className="container">
        <div className="card">
          <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId} alt={restaurantData.name} />
          <h3>{name}</h3>
          <h4>{cuisines.join(", ")}</h4>
          <h4>Cost For 2 - {costForTwo}</h4>
          <h4>{avgRating} - Ratings</h4>
        </div>
      </div>
    </div>
  );
};

const BodyComponent = () => {
  return (
    <div className="restaurentList">
      {
        restaurantData.map((restaurent) => {
         return <RestaurantCard {...restaurent.data}/>
        })
      }
     
    </div>
  );
};

function App() {
  return (
    <>
      <HeaderComponent />
      <BodyComponent />
    </>
  );
}

export default App;
