import { REACT_APP_API_KEY } from "react-native-dotenv";

export default async function GetRestaurant(
  cuisine,
  price,
  term = "food",
  radius = "40000",
  limit = 3,
  latitude = 42.05784,
  longitude = -87.67614,
  open_now = true
) {
  queryString = "https://api.yelp.com/v3/businesses/search?";

  // TERM
  queryString = queryString + "term=" + term;

  // LATITUDE
  queryString = queryString + "&latitude=" + latitude;

  // LONGITUDE
  queryString = queryString + "&longitude=" + longitude;

  // RADIUS
  queryString = queryString + "&radius=" + radius;

  // LIMIT
  queryString = queryString + "&limit=" + limit;

  // CATEGORIES
  queryString = queryString + "&categories=" + cuisine.toLowerCase();

  // PRICE
  queryString = queryString + "&price=" + price.length;

  // OPEN NOW
  queryString = queryString + "&open_now=" + open_now;
  let responseData = [];
  fetch(queryString, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + REACT_APP_API_KEY
    }
  })
    .then(response => response.json())
    .then(response => {
      reponseData = response.businesses;

      const randomNum = Math.floor(Math.random() * responseData.length);

      const chosenRestaurant = reponseData[randomNum];

      chosenRestaurant.cuisine = cuisine;

      console.log(chosenRestaurant);
      return chosenRestaurant;
    });
}
