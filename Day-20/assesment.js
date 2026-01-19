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

// ---------------------------------3rd question completed-----------------------------------------------------------

// const mergeOrders = (baseOrders, extraOrders = []) => {

//   return[...baseOrders,...extraOrders]

//completed

// };

// const merged1 = mergeOrders(orders, moreOrders);
// console.log(merged1.length);
// // 7

// const merged2 = mergeOrders(orders);
// console.log(merged2.length);
// // 5

// //-------------------------2nd question completed:-----------------------------------------------------------------

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

//                                                //1st question completed--------------------------------------------
// };

// console.log(getHighRatedDishes(orders));
// // Burger, Sushi, Pasta

// console.log(getHighRatedDishes(orders, moreOrders));
// // Burger, Sushi, Pasta, Tacos, Ramen

// console.log(getHighRatedDishes([], moreOrders));
// Tacos, Ramen

// 4th-completed ----------------------------------------------------------------------------------------------------

//first version:

// const getDishNamesByIds2 = (orderList, id) => {
//   const result =
//     orderList.find((order) => order.id == id)?.dishName ?? "unknown dish";
//   return result;
// };
//second version:

// const getDishNamesByIds4 = (orderList, ...ids) => {
//   console.log(ids);
//   const result = ids
//     .map(
//       (id) =>
//         orderList.find((order) => order.id == id)?.dishName ?? "unknown dish"
//     )
//     .join(", ");
//   return `Selected Dishes: ${result}`;
// };

// //final simplified one:

// const getDishNamesByIds = (orderList, ...ids) =>
//    `Selected Dishes: ${ids
//     .map(
//       id =>
//         orderList.find(order => order.id == id)?.dishName ?? "unknown dish"
//     )
//     .join(", ")}`;

// console.log(getDishNamesByIds(orders, 1, 3, 5));
// Selected Dishes: Burger, Sushi, Pasta

//console.log(getDishNamesByIds(orders, 1, 6));
// Selected Dishes: Burger, Unknown Dish

//console.log(getDishNamesByIds(orders, 5, 1));
// Selected Dishes: Pasta, Burger

//console.log(getDishNamesByIds(orders, 3, 3, 999));
// Selected Dishes: Sushi, Sushi, Unknown Dish

// //-------------------5th  completed--------------------------------------------------------------------------------
// const listOrders = (...orderItems) => {
// return orderName=orderItems.map((order)=>`${order?.dishName??"unknown dish"}(${order?.category??"unknown category"})`).join(", ")

// };

// console.log(listOrders(...orders));
// // Burger (Fast Food), Pizza (Italian), Sushi (Japanese), Salad (Healthy), Pasta (Italian)

// console.log(listOrders(orders[0], orders[1], orders[111]));
// // Burger (Fast Food), Pizza (Italian), Unknown Dish (Unknown Category)

//------------------6th problem  ------------------------------------------------------------------------------------

const chefOrders = [
  { id: 1, chef: "John Doe", dishName: "Burger", ratings: [5, 4, 5] },
  { id: 2, chef: "John Doe", dishName: "Fries", ratings: [4, 4] },
  { id: 3, chef: "Jane Smith", dishName: "Pizza", ratings: [4, 3, 5] },
  { id: 4, chef: "Jane Smith", dishName: "Gelato", ratings: [5, 5, 4, 4] },
  { id: 5, chef: "Tom Brown", dishName: "Sushi", ratings: [5, 5, 4] },
];

const getTotalRatingsForChefs = (orderList) => {

  const result=orderList.map((orders)=>`${orders.chef}: ${orders.ratings.length}`)
  return result;
};

console.log(getTotalRatingsForChefs(chefOrders));
//{ "John Doe": 5, "Jane Smith": 7, "Tom Brown": 3 }

// ---------------7th-task-completed------------------------------------------------------------------------------------

// const orderA = {
//   dish: { name: "Burger", category: "Fast Food" },
//   quantity: 2,
//   price: 5,
// };
// const orderB = { dish: { name: "Pizza" }, quantity: 1, price: 8 }; // category missing
// const orderC = { quantity: 0, price: 0 }; // 0 values are valid
// const orderD = { dish: null, quantity: 3, price: null }; // dish missing, price null

// const getOrderLine = (order) => {
//   return `${order?.dish?.name ?? "Unknown Dish"} (${
//     order?.dish?.category ?? "Unknown Category"
//   }) x${order?.quantity ?? "0"}
//   $${order?.price ?? "0"}`;
// };

// console.log(getOrderLine(orderA));
// console.log(getOrderLine(orderB));
// console.log(getOrderLine(orderC));
// console.log(getOrderLine(orderD));
// console.log(getOrderLine(undefined));

// Burger (Fast Food) x2 $5
// Pizza (Unknown Category) x1 $8
// Unknown Dish (Unknown Category) x0 $0
// Unknown Dish (Unknown Category) x3 $0
// Unknown Dish (Unknown Category) x0 $0


//8th-task-in-assessment--------------------------------------------------------------------------------------------

// const receipts = [
//   { id: 1, customer: "Riya", tip: 20 },
//   { id: 2, customer: "Arun", tip: 0 }, // 0 is valid
//   { id: 3, customer: null }, // tip missing
//   { id: 4 }, // almost everything missing
// ];

// const formatReceipt = (id, defaultTip = 0) => {
// const gettingId=receipts.find((ids)=>ids.id==id)
// return gettingId?`Receipt #${gettingId.id}: ${gettingId.customer??"Guest"} | Tip: $${gettingId.tip??defaultTip}`:"Receipt not found."

  
//   // const gettingId = receipts.find((ids) => ids.id === id);
//   // return gettingId
//   //   ? `Receipt #${gettingId.id} ${gettingId.customer ?? "guest"} | Tip: ${
//   //       gettingId.tip ?? defaultTip
//   //     }`
//   //   : "receipt not found";
// }

// console.log(formatReceipt(1));
// console.log(formatReceipt(2));
// console.log(formatReceipt(3));
// console.log(formatReceipt(3, 15));
// console.log(formatReceipt(4));
// console.log(formatReceipt(4, 5));
// console.log(formatReceipt(999));

// Receipt #1: Riya | Tip: $20
// Receipt #2: Arun | Tip: $0
// Receipt #3: Guest | Tip: $0
// Receipt #3: Guest | Tip: $15
// Receipt #4: Guest | Tip: $0
// Receipt #4: Guest | Tip: $5
// Receipt not found.
