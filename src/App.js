import React from 'react';
import PropType from "prop-types";

const foodList = [{id:1,name:"a"},{id:2,name:"b"}];

function Food({names}){
return <h1>헷갈린다. {names}</h1>
}

function foodmap(dish){
  return<Food names ={dish.name} />
}

function App() {
 return <div>{foodList.map(foodmap)}</div>;
}

export default App;
