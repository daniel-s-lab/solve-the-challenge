// Given variables
const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
]
const tax = 1.20;

// Implement getPrices()
function getPrices(taxBoolean) {
    for(let i = 0;i < dishData.length;i++ ){
        let finalPrice;
        if (taxBoolean = true){
finalPrice = dishData[i].price*tax
        }
        else if(taxBoolean = false){
            finalPrice = dishData[i].price
        }
        else{
            console.log("you need to pass a boolean to the getPrices call!")
       return;
        }
        console.log(`Dish:${dishData[i].name}Price:$${finalPrice}`)
    }
}

// Implement getDiscount()
function getDiscount(taxBoolean,guest) {
    getPrices(taxBoolean)
var discount;
    if (guest){
        discount = 0
     }  else if(guest < 5){
discount = 5
       }
     else if(guest >= 5){
           discount = 10
       }
       
     else{
        console.log(`the secound argument must be a nuber between 0 and 30`)
    }
    console.log(`Discount is : $${discount}`)
}

// Call getDiscount()
getDiscount(true,10)
