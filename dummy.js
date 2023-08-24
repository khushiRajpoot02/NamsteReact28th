// function add(){
//     let a = 10; let b = 20;
//     console.log(a+b);
// }
// add();
// function calculation(a,b,c){
//          let sum =  a+b+c;
//          let sub = a+b-c;
//          let multi = a*b*c; 
//          console.log(sum);
//          console.log(sub);
//          console.log(multi);        
// }
// const variable = calculation(10, 20, 30);
// console.log(variable);
//sum=a+b
//sub=a-b
//multi=a*b
// let tel = prompt("what would you like to enter");
// let num1 = prompt("enter 1st no");
// let num2 = prompt("enter 2nd no");

// function  calculate (a, b){
//     switch(tel){
//         case "+":
//             return  a+b;
//         case "-":
//             return a-b;
    
//         case "*" : 
//             return a*b;
//         default : 
//         return "nothing";
//     }
// }

// alert(calculate(+num1, +num2));


/*
-----Revision---Switch-------Statement----
*/
// const tell = prompt("enter expretion");
// let a = prompt("enter 1st no");
// let  b = prompt("enter 2nd no");
// function xyz(a, b){
//     switch(tell){
//         case "+":
//             return a+b;
//         case "-":
//                 return a-b;
//         case "*":
//             return a*b;
//         case "/":
//             return a/b;
//         default:
//             return "hii honey";
//     }
// }
// alert(xyz(+a, +b));
// template literals--
// for(let num = 1; num <= 10 ; num++){
//     let tableOf = 12;
//     // console.log(tableOf*num);
//     console.log(`${tableOf} * ${num} = ${tableOf*num}`);
// }
// Arrow function
// const sum = ()=>
// {
//     const  sub = ()=>{
//         console.log(10+20);
//     }
//     sub();
//     return 20+30;
// }
// console.log(sum());

// map filter reduce
/*
Bro this is the simple but not for you , make this moment yours and make it happen.
you have worked realy hard and now it's time to not give up keep working hard you are gonna kill it...
*/

// const input = [1, 2, 3, 4, 5];
// // [1, 4, 9, 16, 25]
//   function sqFun(curEle){
//     return curEle*curEle;
// }
// const square = input.map((sqFun))
// console.log(square);
//sum of every +ve elements
// const input = [1, -4, 12, 0, -3, 29, -150]; 
// const posEl = input.filter((ele, idx, arr)=>{
//              return ele>0;
// })
// console.log(posEl);

// const sum = posEl.reduce((acc, curEle)=>{
//            return acc+curEle;
// }, 0);
// console.log(sum);
// find median and mean
// median = if no of elements are even then it would be (mid+mid+1)/2;
// mean = (sum of all elements )/ no of elements 
//const input = [12, 46, 32, 64];
// Result
// { mean: 38.5, median: 39 }

// const input = [12, 46, 32, 64];
// input.sort((a,b)=>a-b);
// const meanA = input.reduce((acc, curEl, idx , arr)=>{
//         acc.mean += curEl/input.length;
//         if(input.length%2===0){
//             if(idx === (input.length/2)-1){
//                acc.median += curEl;
//             }
//             else if(idx === input.length/2){
//                 acc.median += curEl;
//                 acc.median/=2;
//             }  
//         }
//         else{
//             if(idx === input.length-1/2){
//                 acc.median = curEl;
//             }
//         }
//         return acc;
// },{median : 0, mean : 0}); console.log(meanA);
//const input = "George Raymond Richard Martin";Result "GRRM";
// ----------get initials of input--------
// const input = "George Raymond Richard Martin";
// console.log(input);
// const spliInput = input.split(" ");
// console.log(spliInput);
// const ans = spliInput.map((cur, idx, arr)=>{
//     return cur[0];
// });
// console.log(ans);
// console.log(ans.join(""));
//Age difference from the youngest and oldest
// result= [13, 67, 54];
// const input = [
//     {
//       name: "John",
//       age: 13,
//     },
//     {
//       name: "Mark",
//       age: 56,
//     },
//     {
//       name: "Rachel",
//       age: 45,
//     },
//     {
//       name: "Nate",
//       age: 67,
//     },
//     {
//       name: "Jennifer",
//       age: 65,
//     },
//   ];
// const ages = input.map((person)=>{
//    return person.age;
// });
// console.log(ageAns);
// const reduAns = ageAns.reduce((accu, cur, idx, arr)=>{
//       if(accu.min > cur){
//         accu.min = cur;
//       }
//       if(accu.mx < cur){
//         accu.mx = cur;
//         // accu.diff = accu.mx - accu.min;
//       }
//       accu.diff = accu.mx - accu.min;
//       return accu;

// }, {min : 100, mx :0, diff : 0});
// const x = [Math.min(...ages), Math.max(...ages), Math.max(...ages) - Math.min(...ages)];
// console.log(x);
// console.log(reduAns);
// const input = "Every developer likes to mix kubernetes and javascript";
// // Result
// // "E3y d7r l3s to mix k8s and j8t"
//  const createNumeronym = (word)=> word[0]+(word.length-2) + word[word.length-1];

// const splitArray = input.split(" ");
// console.log(splitArray);
// const resArray = splitArray.map((cur)=>{
//    if(cur.length >=4){
//     return numero(cur);
//    }
//   else return cur;
           
// }).join("");

// console.log(resArray);
// const createNumeronym = (word) =>
//   word[0] + (word.length - 2) + word[word.length - 1];
// const ans = input
//   .split(" ")
//   .map((word) => (word.length >= 4 ? createNumeronym(word) : word))
//   .join(" ");
//   console.log(ans);
// find factorial of a no
// const input = 6;

// const arr= new Array(input).fill(null);
// for(let i = 1; i <= n ; i++){
//     arr.push(i);
// }
// console.log(arr);
// const ans = arr.reduce((acc, cur)=>{
//     return acc=acc*cur;
// }, 1);
// console.log(ans);
// const ans = arr.map((cur, idx)=>{
//     return idx+1;
// }).reduce((acc, cur)=>{
//  acc=acc*cur;
//  return acc;
// }, 1);
// console.log(ans);
// Result
// {
//   a: 1,
//   b: 1,
//   c: 2,
//   d: 2,
//   f: 2,
//   g: 1,
// }
// const input = [
//     ["a", "b", "c"],
//     ["c", "d", "f"],
//     ["d", "f", "g"],
//   ];
//   // breaking list of list into single list
//   const flatArray = input.flat();
//   console.log(flatArray);
//   const ans = flatArray.reduce((acc, curVal)=>{
//         if(acc[curVal]){
//             acc[curVal]+=1;
//         }
//         else{
//             acc[curVal] =1;
//         }
//         return acc;
      
//   }, [])
// console.log(ans);

// Result
// [ 
//   { name: 'Jack', average: 100 }
// ]
// const students = [
//   { name: "Alice", scores: [90, 85, 92] },
//   { name: "Bob", scores: [75, 80, 85] },
//   { name: "Charlie", scores: [90, 95, 85] },
//   { name: "David", scores: [100, 100, 100] }
// ];
// const splitArray = students.map((student, idx, arr)=>{
//     const sum =  student.scores.reduce((acc, cur)=>acc+cur);
//     return { name: student.name, average: sum / student.scores.length };

// });
// console.log(splitArray);
// const x = splitArray.filter(student => student.average > 90 );
// console.log(x);

//const input = "Every developer likes to mix kubernetes and javascript";
// Result
// "E3y d7r l3s to mix k8s and j8t";
// const input = "Every developer likes to mix kubernetes and javascript";
// const splitArray = input.split(" ");
// console.log(splitArray);
// const  fun = (word)=>{
//     return word[0] + (word.length-2) + word[word.length-1];
// }
// const mapArray = splitArray.map((word, idx, arr)=>{
//   if(word.length >= 4)return fun(word);
//   else return word;
// }).join(" ");
// console.log(mapArray);

// //const input = 6;
// Result
// 720;
// const input = 6;
// const arr = new Array(input).fill(null);
// const mapArray = arr.map((cur, idx, arr)=>{
//      return idx+1;
// })
// console.log(mapArray);
// const res = mapArray.reduce((accu, cur, idx, arr)=>{
//          return accu*cur;
// }, 1);
// console.log(res);
//Result
// {
//   a: 1,
//   b: 1,
//   c: 2,
//   d: 2,
//   f: 2,
//   g: 1,
// }
// const input = [
//   ["a", "b", "c"],
//   ["c", "d", "f"],
//   ["d", "f", "g"],
// ];
// const array = input.flat();
// console.log(array);
// const res = array.reduce((acc, cur, idx, arr)=>{
//    if(acc[cur]){
//    acc[cur]=acc[cur]+1;
//    }else  acc[cur] = 1;
//    return acc;
// },{});
// console.log(res);
// Result
// [ 
//   { name: 'Jack', average: 100 }
// ]
// const students = [
//   { name: "Product 1", price: 20, category: "Electronics" },
//   { name: "Product 2", price: 30, category: "Clothes" },
//   { name: "Product 3", price: 40, category: "Electronics" },
//   { name: "Product 4", price: 50, category: "Clothes" },
//   { name: "Product 5", price: 60, category: "Clothes" },
//   { name: "Product 6", price: 70, category: "Electronics" },
//   { name: "Product 7", price: 80, category: "Clothes" },
//   { name: "Product 8", price: 90, category: "Electronics" },
// ];
// // Result
// // [ 
// //   { category: 'Clothes', average: 55 },
// //   { category: 'Electronics', average: 55 }
// // ]
// // 1 find scores array 
// // 2 find sum and avg
// // 3 find which one is greater
// //  function fun(avgSc){
// //      return Math.max(...avgSc);
// // }
// const scoresOfstu = students.map((student, idx, arr)=>{
//   const sum =  student.scores.reduce((acc, cur, idx, arr)=>{
//    return acc+cur; 
//   }, 0);
//   return{name :student.name,  average :sum/ student.scores.length};
// });
// console.log(scoresOfstu);
// const studentAverages = students.map(student => {
//   const sum = student.scores.reduce((acc, score) => acc + score);
//   return { name: student.name, average: sum / student.scores.length };
// });
// // console.log(studentAverages);
// // Use filter to only select students with an average above 90
// const highPerformers = studentAverages.filter(student => student.average > 90);
// // console.log(highPerformers);
// const res = scoresOfstu.filter((student, idx)=>{
//   return student.average>50;
// })
// console.log(res);

// -----------Array de-structuring and spread operator----
// const arr1 = ['it1', 'it2', 'it3', 'it4', 'it5'];
// const[v1, v2, ...myNewArray] = arr1;
// console.log(v1, v2, myNewArray);
// // Objects 
// //How to create objects
// const person = {
//   name : "Khushi",
//   age : 22,
//  "my hobbies":["Reading", "listening Music", "Pllanting"]
// // Key value pairs
// }
// console.log(person);
// // how to get value in obj
// console.log(person.name);
// console.log(person["name"]);
// // console.log(person.hobbies);
// // console.log(person["hobbies"]);
// // how to add value in obj
// person.education = "BE Computer Science";
// console.log(person["my hobbies"]);
// Learning points:-
// We can get and add values in obj,  using . operator and also [] operator
// In objec all keys are in string form so we can use ["key"]
//if i want to add key using [] and want
//key = "email"
// person.key="khusi@gmail.com";// person["key"]="khusi@gmail.com"
// console.log(person);
//{name: 'Khushi', age: 22, my hobbies: Array(3), education: 'BE Computer Science', key: 'khusi@gmail.com'}
// person[key] = "khusi@gmail.com";
// console.log(person);
//----------Iterate through object---------------
// for(let key in person){
//   console.log(`key of object ${key} : value of person : ${person[key]}`);
// }
// person["Class"] = 12;
// console.log(Object.keys(person));

// for(let key of Object.keys(person)){
//   console.log(key, person[key]);
// }
// //------practice-------
// const key1 = "objKey1";
// const key2 = "mobjKey2";
// const val1 = "myvar3";
// const val2 = "myvar";
// const obj = { 

// }
// obj[key1] = val1;
// obj[key2] = val2;
// console.log(obj);
// //---Done------
// //----spread operator in objects----
// const obj1 = {
//   key1 : "val1",
//   key2 : "val2"
// }
// const newObj = {...obj1, keyUni : "valUn"};
// console.log(newObj);
// -----------Destructring in objects------
// const obj2 = {
//   key3 : "val3",
//   key4 : "val4"
// }
// const {key3,  key4} = obj2;
// console.log(key3, key4);
// const {key3 : tmp1 , key4 : tmp2} = obj2;
// console.log(tmp1, tmp2);
// //------Objects inside Arrays--------------//
// const users = [
// {
//   userId: 1, firstName : "Khushi", gender : "Female"
// },
// {
//   userId: 2, firstName : "Raushani", gender : "Female"
// },
// {
//   userId: 3, firstName : "Manvi", gender : "Female3"
// }
// ]
// console.group(users);
// //-----Destructuring in object-----
// const[user1, user2, user3] = users;
// console.log(user1);
// console.log(user2);
// console.log(user3);
// // console.log(firstName);
// const [{userId, firstName : user1Name}, , {gender : user3Gender}] = users;
// console.log(userId);
// console.log(user1Name);
// console.log(user3Gender);
////----iterating objects----//
// for(let user in users){
//   console.log(users[user]);
// }
//----Functions in Js-----
//Tyep 1:
// function calculation(){

// }
//-----Rest operator-----
//Key Point:- any no of arrguments we can pass in function without having the sme no of parameters  
// function myFunction(...c){
//   let sum = 0;
//        for(let i = 0 ; i<c.length; i++){
//         sum+=c[i];
//        }
//        console.log(sum);
// }
// myFunction(1,2,3,4,5,6);
// // ------ Parameter De-structuring-----
// // mainly used in react
// const obj = {
//   name : "Khushi",
//   age : 22,
//   gender : "Female"
// }
// function printObject(obj){
//       console.log(obj.name);
//       console.log(obj.age);
//       console.log(obj.gender);

// }
// printObject(obj);
// function printObject({name, age, gender}){// ---parameter de-structuring--
//   console.log(name);
//   console.log(age);
//   console.log(gender);
// }
// printObject(obj);
// ///-------------Sort method in js------------
// console.log("execution start");
// const id = setTimeout(()=>{
//   console.log("inside setTimeOut");
// }, 1000);
// for(let i = 0 ; i<100; i++){
//   console.log("printing dot 99 times .");
// }
// console.log("out from loop");
// console.log(id);
// clearTimeout(id);
// console.log("End here!");
// if you want to clear setTimeOut function call 
//then call clearTimeout(id)
//------DOM------
// document.getElementById("title").innerHTML = "Good Bye";
// const x = document.querySelector("a").getAttribute("href");
// console.log(x);
// document.querySelector("a").setAttribute("href", "https://www.google.com");
// // Add event listner 
// document.querySelector("button").addEventListener("click",()=>{
//   console.log("I got clicked");
// })

//------setTimeOut Interval()-------
// const body = document.body;
// console.log(body)
// const id2 = setInterval(()=>{
//   const red = Math.floor(Math.random()*126);
//   const blue = Math.floor(Math.random()*126);
//   const green = Math.floor(Math.random()*126);
//   const rgb = `rgb(${red}, ${blue}, ${green})`;
//   body.style.background = rgb
// }, 1000);
// const button = document.querySelector("button");
// button.addEventListener("click",()=>{
//      clearInterval(id2);
//      button.textContent = "I got clicked";
// });
//-------Callback , callback hell, async programs-----
// const heading1 = document.querySelector(".heading1");
// const heading2 = document.querySelector(".heading2");
// const heading3 = document.querySelector(".heading3");
// const heading4 = document.querySelector(".heading4");
// const heading5 = document.querySelector(".heading5");
// const heading6 = document.querySelector(".heading6");
// const heading7 = document.querySelector(".heading7");

// calback hell...
// setTimeout(()=>{
//    heading1.textContent = "hd1";
//    heading1.style.color = "red";
   
// setTimeout(()=>{
//   heading2.textContent = "hd2";
//   heading2.style.color = "blue";
//   setTimeout(()=>{
//     heading2.textContent = "hd2";
//     heading2.style.color = "voilet";
//     setTimeout(()=>{
//       heading3.textContent = "hd3";
//       heading3.style.color = "purple";
//       setTimeout(()=>{
//         heading4.textContent = "hd4";
//         heading4.style.color = "yellow"; 
//         setTimeout(()=>{
//           heading5.textContent = "hd5";
//           heading5.style.color = "green"; 
//         }, 3000);
//       }, 2000);
//     }, 1000);
//   }, 2000);
// }, 2000);
// }, 1000);
//--------Promises----------

//produce
// const bucket = ["cofee", "milk", "sugar", "vegetable", "salt", "rice"];

// const friedRicePromice = new Promise((resolve, reject)=>{
//   if(bucket.includes("vegetable") && bucket.includes("salt") && bucket.includes("rice")){
//     resolve("Made friedRice");
//   }
//   else{
//     reject("could not do it");
//   }
// })
//promice consume
// friedRicePromice.then(
//   (myfriedrice)=>{
//      console.log("let's eat: ", myfriedrice);
//   }
// ).catch(
//   (error)=>{
//     console.log("Oops error!", error);
//   }
// )
// ------------------how to return promice
//put 1st promise inside function and call that function 
// function ricePromice(){
// const bucket = ["cofee", "milk", "sugar", "vegetable", "salt", "rice"];
// const friedRicePromice = new Promise((resolve, reject)=>{
//   if(bucket.includes("vegetable") && bucket.includes("salt") && bucket.includes("rice")){
//     resolve("Made friedRice");
//   }
//   else{
//     reject("could not do it");
//   }
// })
// }
// ricePromice().then(
//   (myfriedrice)=>{
//      console.log("let's eat: ", myfriedrice);
//   }
// ).catch(
//   (error)=>{
//     console.log("Oops error!", error);
//   }
// )
//-----------setTimeOut with promise----
// function learnPromise(){
//   return new Promise((resolve, reject)=>{
//     let x = false;
//    setTimeout(()=>{
//     if(x===true){
//       resolve("Resolved");
//     }
//     else{
//       reject("Rejected");
//     }
//    }, 3000);
//   })
// }
// learnPromise().then(
//   (pr)=>{
//     console.log("resolved :", pr);
//   }
// ).catch(
//   (er)=>{
//     console.log("error:", er);
//   }
// )

//---------Promise.resolve------&&&--Promise chaining 
//key points :  promise.resolve returns promise and we can chain using the returned value
// .then() method always returns promise.
// function promiseChaining(){
//   return new Promise((resolve, reject)=>{
//     resolve("foo");// it always returns promise
//   })
// }
//  promiseChaining().then(
//   (val)=>{
//       console.log(val);
//       val += "buz";
//       return val;// here returning promise not string 
//   }
//  ).then(
//   (val)=>{
//     console.log(val);
//     val += "bar";
//     return val;
//   }
//  ).then(
//   (val)=>{
//     console.log(val);
//     return val;
//   }
//  )
// //---------Promisifying the callback hell code----------//

// const heading1 = document.querySelector(".heading1");
// const heading2 = document.querySelector(".heading2");
// const heading3 = document.querySelector(".heading3");
// const heading4 = document.querySelector(".heading4");
// const heading5 = document.querySelector(".heading5");
// const heading6 = document.querySelector(".heading6");
// const heading7 = document.querySelector(".heading7");

// function headingPromise(element, text, color, time){
//      return new Promise((resolve, reject)=>{
//       setTimeout(()=>{
//         if(element){
//           element.textContent = text;
//           element.style.color = color;
//           resolve();
//         }else{
//           reject();
//         }
//      }, time);
//      })
// }
// headingPromise(heading1, "one", "red", 1000).then(
//   ()=>{
//       return headingPromise(heading1, "one", "red", 1000);
//   }
// ).then(
//  ()=>{
//   return headingPromise(heading2, "two", "blue", 2000);
//  } 
// ).then(
//   ()=>{
//    return headingPromise(heading3, "three", "yellow", 3000);
//   } 
//  ).then(
//   ()=>{
//    return headingPromise(heading4, "four", "purple", 1000);
//   } 
//  ).then(
//   ()=>{
//    return headingPromise(heading5, "five", "green", 2000);
//   } 
//  ).then(
//   ()=>{
//    return headingPromise(heading6, "six", "gray", 3000);
//   } 
//  ).then(
//   ()=>{
//    return headingPromise(heading7, "seven", "pink", 5000);
//   } 
//  )

// //----XML-----HTTP Request---Hyper Text Transform Protocol---(sending request to get data)
// // const URL = "https://jsonplaceholder.typicode.com/posts";
// // const xhr = new XMLHttpRequest();
// // xhr.open("GET", URL);
//   // xhr.onreadystatechange = function(){
//   //   if(xhr.readyState === 4){
//   //     const data = JSON.parse(xhr.response);
//   //     console.log(data);
//   //   }
//   // }
// // instead of above commented code we can use (xhr.onload) method
// // xhr.onload = function(){
// //   console.log(xhr.readyState);
// //   const data = JSON.parse(xhr.response);
// //   console.log(data);
// // }

// // xhr.send();
// // console.log(xhr);
// // browser automatic by default does get request
// ///---------send request using Fetch---------//
// // Key points : fetch always returns promise
// const URL = "https://jsonplaceholder.typicode.com/posts";
// const val = fetch(URL);
// console.log(val);
// fetch(URL).then(
//   (response=>{
//     if(response.ok){
//       const data = response.json();
//       console.log(data);
//       return data;
//     }
//     else{
//       throw new Error("something went wrong");
//     }
//   })
// ).then(
//   (data)=>{
//     console.log("Iside then", data);
//   }
// ).catch(
//   (error)=>{
//     console.log("inside cath");
//     console.log("error");
//   }
// )

// const swiggy_api_URL =
//   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.3176452&lng=82.9739144&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
//   fetch(swiggy_api_URL).then(
//     (response)=>{
//         if(response.ok){
//             const data = response.json();
//             console.log(data);
//             return data;
//         }
//         else{
//             throw new Error("something went wrong");
//         }   
//     }
//   ).then(
//     (data)=>{
//         console.log("inside the then", data);
//     }
//   ).catch(
//     (error)=>{
//         console.log("inside cath block", error);
//     }
//   )


  // fetch(swiggy_api_URL).then(
  //   (responce)=>{
  //     if(responce.ok){
  //       const data = responce.json();
  //       console.log(data);
  //       return data;
  //     }
  //     else{
  //       throw new Error("something went wrong");
  //     }
  //   }
  // ).then(
  //   (data)=>{
  //     console.log(data);
  //   }
  // ).catch(
  //   (error)=>{
  //     console.log("inside catch", error);
  //   }
  // )
  const swiggy_api_URL =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.3176452&lng=82.9739144&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
  
  async function getPost(){
      const response = await fetch(swiggy_api_URL);
      if(!response.ok){
        throw new Error("something went wrong"); 
      } 
      const data = await response.json();
      return data;
  }
  getPost().then(
    (myData)=>{
      console.log(myData);
    }
  ).catch(
    (error)=>{
      console.log("inside catch block", error);
    }
  )