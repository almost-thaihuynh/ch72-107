

const catalog = [
    {
        "title":"Chocolate",
        "category":"Candy",
        "price":"5.99",
        "image":"chocolate-candy.png",
        "_id":"1"

    },
    {
        "title":"Strawberry",
        "category":"Cake",
        "price":"19.99",
        "image":"strawberry-cake.png",
        "_id":"2"

    },
    {
        "title":"Sugar",
        "category":"Cookies",
        "price":"2.99",
        "image":"sugar-cookies.png",
        "_id":"3"

    },
];

class DataService{
    getProducts(){
        return catalog;
    }
}

export default DataService;