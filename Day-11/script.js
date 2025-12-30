// const arr=[]
// const aRR= arr.map((arr)=>arr.length)
// console.log (aRR);


// console.log(!!'false'==!!'true')
// console.log(typeof 1)
// const config={}
// console.log(config.ui.theme?.color);

//                    Immutable in JavaScript means:
//          A value that cannot be changed after it is created.

                        //array.map--immutable
// const arr=[10,20,30,40,50]
//  const result=(arr.map(arr=>arr+10))      // output--[20,30,40,50,60]
//  console.log(result,typeof result)       //  output--object
// console.log(typeof arr)                  //  ouput--object

           //array.filter--immutable
// const arr=[10,20,30,40,50]
// const result=arr.filter(arr=>arr>20)       //  output--[30,40,50]
// console.log(result,typeof result)          //  output--object
// console.log(typeof arr)                    //  output--object

                  //array.reduce--immutable
 // const arr=[1,2,3,4,5]
 // const total=arr.reduce((acc,arr)=>acc+arr,0)     //  output--[15]   
 // console.log(total,typeof total,typeof arr)       // output-- number
 // console.log(typeof arr)                          // output-- object

                //array.every--immutable
                // all elements are same means the condition becomes true or false
// const arr=[1,1,1,1,2]
// const result=arr.every(arr=>arr==1)                   //  output--false
// console.log(result,typeof result)                     // ouput--boolean


                //array.fill--immutable
// const arr=[1,2,3,4,5]
// const newArr=arr.fill(8)                                  // ouput--[8,8,8,8,8]
// console.log(newArr)                                       // output--object
// console.log(typeof newArr)

               //arry.toReversed--immutable
    //    const arr=[1,2,3,4,5]
    //    const reverseArr=arr.toReversed(arr)                   // output--[5,4,3,2,1]
    //    console.log(reverseArr,typeof reverseArr)              // output--[1,2,3,4,5]
    //    console.log(arr,typeof arr)