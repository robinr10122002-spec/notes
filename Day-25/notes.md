- ## COMPONENT RULES:
- 1. The first letter should be capital

Bootstrap:
the first file is the html file goes to the server and then the json file goes to the server.

- ## SPA(single page application):
- initial file is the big html and the next all file is json file.the first file takes more time to respond and the other file will be visible.
- the disadvantage is seo and have low rating.
- - ## MPA(Multi page applications):
- in this case all files we are sending to the server is the html file. so it takes more time equally.
- REACT:

FEATURES OF REACT:
1.SPA(single page apps)-common data will not be changed in single page apps and this case the json file only gets reloaded . ||MPA(multi page apps)
2.Component-(UI AND LOGIC)

MPA- loading same pages again and again it is the drawback and here common data will also be changed and get reloaded the whole page.
ADVANTAGES OF SPA:
1.SMOOTH PERFORMANCE.
2.NO REFRESH.
3.DATA SERVING-BETTER CACHING.
DISADVANTAGE OF SPA:

1. INITIAL LOADING PAGE TAKES MORE TIME.
2. BAD SEO.

- ## Smart and presentation:
- smart has the logic and data.
- presentation part has the css and UI.
- ## Hook:
- it tracks the specific variable.
- Hooks types->useState,useEffect,useContext,useMemo.
- React tracks hook variable.
- the datatype of hook is a function.
- **-Component is a function of state(c=f(s))-**
- if state changes component also gets changed or re-rendered.
- state refers to the current value.
- **Event listener - should be in camelCase -->for example(onClick)-**
- const[like,setLike]=useState(100)
- here like is 100 and setLike is a function.
- setLike is used to update the like value.
- re-rending takes more time.it batches the whole value and then it gets re-rendered.
- ## HTML FORM:

1. iput type="text",password,radio->for genders,checkbox,number,date.
2. checked-> is the default selected option.
3. disabled-> it shows the option but we cant access it , it is like hidden.
4. Validation: which doesnt allow you to submit-->(min-length,required,max-length,min,max)
5. min-length and max-length--> is used in text or numbers.
6. min and max-->is used in age.

reacts only return one parent element.
**-React fragment-** is used to return two parent element(<></>)inside this we have two parent element.
