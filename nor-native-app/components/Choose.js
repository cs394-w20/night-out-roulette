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

const GetRestaurant = (cuisine, price) => {
    let options = [];

    for(let i = 0; i < data.length; i++){
        if (data[i].cuisine.includes(cuisine) == true && data[i].price.length == price){
            options.push(i);
        }
    }

    const randomNum = Math.floor(Math.random() * options.length);

    return data[randomNum];
}