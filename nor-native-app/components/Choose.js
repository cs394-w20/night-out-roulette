const data = [
    {
        "name": "Dave's New Kitchen",
        "cuisine": "Italian",
        "price": "$$"
    },
    {
        "name": "Soban Korea",
        "cuisine": "Korean",
        "price": "$$"
    },
    {
        "name": "Tomate Fresh Kitchen",
        "cuisine": "Mexican",
        "price": "$"
    },
    {
        "name": "Burger King",
        "cuisine": "American",
        "price": "$"
    },
    {
        "name": "The Barn",
        "cuisine": "Steak",
        "price": "$$$$"
    },
    {
        "name": "Potbelly's",
        "cuisine": "American,Sandwich",
        "price": "$$"
    },
    {
        "name": "Chipotle",
        "cuisine": "Mexican",
        "price": "$"
    },
    {
        "name": "Andy's Frozen Custard",
        "cuisine": "Dessert",
        "price": "$$"
    },
    {
        "name": "Bat 17",
        "cuisine": "American",
        "price": "$$$"
    },
    {
        "name": "Taco Diablo",
        "cuisine": "Mexican",
        "price": "$$$"
    },
    {
        "name": "Clarke's",
        "cuisine": "Breakfast",
        "price": "$$"
    },
    {
        "name": "Le Peep",
        "cuisine": "Breakfast",
        "price": "$$"
    },
    {
        "name": "Nobu",
        "cuisine": "Japanese",
        "price": "$$$$"
    },
    {
        "name": "Todoroki",
        "cuisine": "Japanese",
        "price": "$$$"
    }
]

function GetRestaurant(cuisine, price) {
    let options = [];
    console.log(cuisine)
    console.log(price)

    for(let i = 0; i < data.length; i++){
        if (data[i].cuisine.includes(cuisine) === true && data[i].price === price){
            options.push(i);
        }
    }

    const randomNum = Math.floor(Math.random() * options.length);
    console.log(options)

    return data[options[randomNum]];
}

const GetRestaurantYelp = async(cuisine, price, term = "food", radius = "10000", latitude = 42.057840, longitude = -87.676140, open_now = true) => {

    queryString = "https://api.yelp.com/v3/businesses/search?"

    // TERM
    queryString = queryString + "term=" + term;

    // LATITUDE
    queryString = queryString + "&latitude=" + latitude;

    //LONGITUDE
    queryString = queryString + "&longitude=" + longitude;
    
    //RADIUS
    queryString = queryString + "&radius=" + radius;

    //CATEGORIES
    queryString = queryString + "&categories=" + cuisine.toLowerCase();

    //PRICE
    queryString = queryString + "&price=" + price.length;

    //OPEN NOW
    queryString = queryString + "&open_now=" + open_now;

    
    let responseData = [];

    fetch(queryString, {
        method: "GET"
    })
    .then(response => {
        responseData = response;
    })

    console.log(responseData);
}