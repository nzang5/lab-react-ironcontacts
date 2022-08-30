import "./App.css";
import  allContacts from "./contacts.json";
import React, { useState } from 'react';


// Iteration 1
const firstFive = allContacts.slice(0 , 5);
console.log(firstFive);


// iteration 3
// const addRandom = () => {
//   let randomCeleb = Math.floor(Math.random() * allContacts.length);
//   if (!firstFive.includes(allContacts[i])){
//     firstFive.push(allContacts);
//   }
//   setCelebs();
// }




function App() {

  const [celebs, setCelebs] = useState(firstFive);

  return <div className="App">

<table>
<h1>IronContacts</h1>
<button> Add Random Contact</button>
<br/>

<tr>
  <th>Picture</th>
  <th>Name</th>
  <th>Popularity</th>
  <th>Won Oscar</th>
  <th>Won Emmy</th>


  </tr>

{celebs.map(function(oneCeleb){

  return(
  <tr>
  <td> <img src={oneCeleb.pictureUrl}/>   </td> 
  <td>  {oneCeleb.name} </td>
  <td>   {oneCeleb.popularity} </td>
  <td>   {oneCeleb.wonOscar ? "🏆" : ""} </td>
  <td>   {oneCeleb.wonEmmy ? "🏆" : ""} </td>
</tr>
)

})
}
</table>


  </div>;
}


export default App;
