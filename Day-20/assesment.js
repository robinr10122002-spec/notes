const orders = [
  {
    id: 1,
    dishName: "Burger",
    category: "Fast Food",
    chef: "John Doe",
    ratings: [5, 4, 5],
  },
  {
    id: 2,
    dishName: "Pizza",
    category: "Italian",
    chef: "Jane Smith",
    ratings: [4, 3, 5],
  },
  {
    id: 3,
    dishName: "Sushi",
    category: "Japanese",
    chef: "Tom Brown",
    ratings: [5, 5, 4],
  },
  {
    id: 4,
    dishName: "Salad",
    category: "Healthy",
    chef: "Alice Green",
    ratings: [3, 4, 5],
  },
  {
    id: 5,
    dishName: "Pasta",
    category: "Italian",
    chef: "Gowtam Tinnanuri",
    ratings: [4, 4, 5],
  },
];

const moreOrders = [
  {
    id: 6,
    dishName: "Tacos",
    category: "Mexican",
    chef: "Carlos Ruiz",
    ratings: [4, 5, 4],
  },
  {
    id: 7,
    dishName: "Ramen",
    category: "Japanese",
    chef: "Yuki Tanaka",
    ratings: [5, 4, 5],
  },
];

const mergeOrders = (baseOrders, extraOrders = []) => {
  const merged1 =baseOrders;
  const merged2=extraOrders;
  return[...merged1,...merged2]
   
  
 
   
  
};

const merged1 = mergeOrders(orders, moreOrders);
console.log(merged1.length);
// 7

const merged2 = mergeOrders(orders);
console.log(merged2.length);
// 5

// const getFirstNDishNames=(orderList, n)=>{
//  const result=orderList.slice(0,n)
//  .map(order=>order.dishName)
//  .join(", ")
// return(result)              completed
// }

// console.log(getFirstNDishNames(orders, 3));
// // Burger, Pizza, Sushi

// console.log(getFirstNDishNames(orders, 1));
// // Burger

// const getDishNamesByIds=(orderList, ...ids)=>{
// const orderList=orders.filter()

// }

// console.log(getDishNamesByIds(orders, 1, 3, 5));
// // Selected Dishes: Burger, Sushi, Pasta

// console.log(getDishNamesByIds(orders, 1, 6));
// // Selected Dishes: Burger, Unknown Dish

// console.log(getDishNamesByIds(orders, 5, 1));
// // Selected Dishes: Pasta, Burger

// console.log(getDishNamesByIds(orders, 3, 3, 999));
// // Selected Dishes: Sushi, Sushi, Unknown Dish

// const getDishNamesByIds = (orderList, ...ids) => {
//   const gettingId = orderList
//     .filter((orderList) => orderList.id ==...id)
//     .map((order) => order.dishName);
//   return(gettingId);
// };

// console.log(getDishNamesByIds(orders, 1, 3, 5));
// // Selected Dishes: Burger, Sushi, Pasta

// console.log(getDishNamesByIds(orders, 1, 6));
// // Selected Dishes: Burger, Unknown Dish

// console.log(getDishNamesByIds(orders, 5, 1));
// // Selected Dishes: Pasta, Burger

// console.log(getDishNamesByIds(orders, 3, 3, 999));
// // Selected Dishes: Sushi, Sushi, Unknown Dish

// const getHighRatedDishes=(baseOrders, extraOrders = [])=>{
// const result=orders.map((order)=>order.ratings)
// console.log(result)
// }

// console.log(getHighRatedDishes(orders));
// // Burger, Sushi, Pasta

// console.log(getHighRatedDishes(orders, moreOrders));
// // Burger, Sushi, Pasta, Tacos, Ramen

// console.log(getHighRatedDishes([], moreOrders));
// // Tacos, Ramen
