# NamsteReact28th
# Namaste React 🚀
/*
read me
*/
---------------------------General--------------------
Key Points:
1. named import->import {resList} from "../utils/mockData"
2.default import->import resList from "../utils/mockData"
React Hooks-> React hooks are normal js function. It is like utility function which gives some super powers of react.
useState()
useEffect()
--------------------Key points:-----------------
1 whenever a state variable updates, react will re-render the components.
2. React is fast bcz it use DOM manupulation very fast.
3.React uses virtual DOM, they are the virtual re-presentation of Actual DOM
Actual DOM : tags, div etc
4.Virtual DOM : Js objects
"Whenever something changes in UI it is known as Reconciliation"
5.React-fiber is a new way to finding the diff and updating the UI
6. When ever the state variables change react will find the difference b/w the virtual DOM and it will re-render the component this is called Diff Algo in react

--------------------Lecture-6----
#useEffect() comes from library and will import it inside our component
🚀 useEffect(()=>{
   console.log("use effect);
   }, [])
  working of useEffect => 1st our whole page renders, and when renders complete useEffect calls it's callback function and print it on console

-------------------Shimmer UI-------------
Shimmer UI is like making fake cards or user experience for anticipating 
it basically use when we get data from API and until data come shimmer UI will be dispalyed

----------------useState()---------------------------
useState() is a react hook, which make changes in UI. Basically whenever useState variable changes the component re-rendered and all the const and other things will be changed with the updated value. Now the Diff algo comes into the picture and it find diff b/w the old UI and new UI and update it on UI.

Ques.  const[loginbtn, setLoginbtn] = useState("Login");
while writing like above, when component re-rendered we are updating  the const variable but it is not possible in js then how does it works?
Ans => when component re-render whole UI layer will be re-intialized and their values would be read.
---------------------------------------------------
Completed search restaurant functionality------