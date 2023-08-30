# NamsteReact28th
# Namaste React 🚀
/*
read me
# Class Base Component
*/
---------------------------General--------------------
<<<<<<< HEAD
Fetching data from API in class base component=>
1.using componentDidMount(){}
Life cycle->
Mounting()-----fisrt render happens in mouting phase
.. First when clas base component loads then cunstructor is called 
..then render method is called and then react updated with some dummy data 
..Now componentDidMount calls..it's call API then setState is called
Updating()----2nd phase starts
=======
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

----------------Ques.  const[loginbtn, setLoginbtn] = useState("Login");
while writing like above, when component re-rendered we are updating  the const variable but it is not possible in js then how does it works?
Ans => when component re-render whole UI layer will be re-intialized and their values would be read.
---------------------------------------------------
Completed search restaurant functionality------
>>>>>>> 506b48a6826b701220b21fc8b05e008ee3de9ffd

------------------React Router-------------------------------
Higher Order Component<==>
component which takes another component as an argument and return the component. It is used to return inhanced version of component.
Key Points:
1. Higher Ordered Components are Pure Component
2. Pure component or pure functions are the functions which will always return the same output for the given same input.
3. Pure function does not change any objects or variables that existed before it was called.
-----------------------------------------------------------------

