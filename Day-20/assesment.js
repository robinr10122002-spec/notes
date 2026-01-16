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

// 3rd question completed

// const mergeOrders = (baseOrders, extraOrders = []) => {
//   // const merged1 =baseOrders;
//   // const merged2=extraOrders;
//   return[...baseOrders,...extraOrders]

//completed

// };

// const merged1 = mergeOrders(orders, moreOrders);
// console.log(merged1.length);
// // 7

// const merged2 = mergeOrders(orders);
// console.log(merged2.length);
// // 5

// //2nd question completed:

// const getFirstNDishNames=(orderList, n)=>{
//  const result=orderList.slice(0,n)
//  .map(order=>order.dishName)
//  .join(", ")
// return(result)            // 2nd question completed
// }

// console.log(getFirstNDishNames(orders, 3));
// // Burger, Pizza, Sushi

// console.log(getFirstNDishNames(orders, 1));
// // Burger

//1st question completed

// const getHighRatedDishes = (baseOrders, extraOrders = []) => {
//   const total = [...baseOrders, ...extraOrders];
//   const result = total
//     .filter((order) => order.ratings.every((rating) => rating >= 4))
//     .map((order) => order.dishName).join(", ");
//   return result;

//                                                //1st question completed
// };

// console.log(getHighRatedDishes(orders));
// // Burger, Sushi, Pasta

// console.log(getHighRatedDishes(orders, moreOrders));
// // Burger, Sushi, Pasta, Tacos, Ramen

// console.log(getHighRatedDishes([], moreOrders));
// // Tacos, Ramen

// fourth  completed --------


//first version:

const getDishNamesByIds2 = (orderList, id) => {
  const result =
    orderList.find((order) => order.id == id)?.dishName ?? "unknown dish";
  return result;
};
//second version:

const getDishNamesByIds4 = (orderList, ...ids) => {
  console.log(ids);
  const result = ids
    .map(
      (id) =>
        orderList.find((order) => order.id == id)?.dishName ?? "unknown dish"
    )
    .join(", ");
  return `Selected Dishes: ${result}`;
};


//final simplified one:

const getDishNamesByIds = (orderList, ...ids) => 
   `Selected Dishes: ${ids
    .map(
      id =>
        orderList.find(order => order.id == id)?.dishName ?? "unknown dish"
    )
    .join(", ")}`;


console.log(getDishNamesByIds(orders, 1, 3, 5));
// Selected Dishes: Burger, Sushi, Pasta

//console.log(getDishNamesByIds(orders, 1, 6));
// Selected Dishes: Burger, Unknown Dish

//console.log(getDishNamesByIds(orders, 5, 1));
// Selected Dishes: Pasta, Burger

//console.log(getDishNamesByIds(orders, 3, 3, 999));
// Selected Dishes: Sushi, Sushi, Unknown Dish

// const listOrders=(...orderItems)=>{

//   const result=orders.map((orders)=>ord)
//  console.log(result)
// }

// console.log(listOrders(...orders));
// // Burger (Fast Food), Pizza (Italian), Sushi (Japanese), Salad (Healthy), Pasta (Italian)

// console.log(listOrders(orders[0], orders[1], orders[111]));
// // Burger (Fast Food), Pizza (Italian), Unknown Dish (Unknown Category)
