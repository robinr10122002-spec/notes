- ## - using max-width:30rem---> means this width will not grow above 30 rem in a particular container.
- margin:0 auto;--> means it is used to center the align items (recommended).
- "strong" tag is used for increase the font weight or to bold the text.
- "em" tag is used for styling the text into italic.
  -##- windows:
- window refers to the browser context.
- document refers to the pages DOM.
- windows.prompt && windows.alert(username) &&window.confirm.
- in prompt it show a popup image.
- in alert only it confirms then only the elements will show and it has only one button that is "ok".
- in confirm it has two buttons one is"ok" and the another one is "cancel". for confirming purpose.
- prompt and alert generally nowadays we dont use.
- now we are using confirm.
-
- ## windows.setTimeout or setTimeout---> it takes in a function like map.
  setTimeout(()=>{},2000)-->it works like after 2 seconds the function is called.
- setInterval(()=>{},3000)-->for every 3seconds it will print the output.
  -window.clearInterval---> it will clears the setInterval output.
  -- user interaction in website is said to be an event .
  for example--button.

- ## -map,filter,reduce,some,find,sort,every, (these are called higher order function) -->function which takes function as an argument is said to be an HIGHER ORDER FUNCTION.
- ## - CALL BACK FUNCTION-->
- type of callback function-1. synchronous and asynchronous.
- for example: setTimeout(printHi,2000)-->setTimeout- higherOrderFunction and printHi-call back function.
- 1.synchronous-no time involves.
- 2. asynchronous-time involves.(event completes then the action taken).
- ## - Nested callback: callback function inside an another callback function is said to be nested callback function.

- ## callback hell- very bad pattern (the code looks like a iluminaty pyramid on the left side).
- debugging are difficult.
- harder to read.
