import React, { useState } from "react";
import data from "./data";
import Tours from "./component/Tours";


const App = () => {

  const [tours , setTours] = useState(data);

// removing cards
function removeTourHandler(id){
  const newtour = tours.filter( (tour) => {
    return(
      tour.id !== id
    );
  });
  setTours(newtour);
}

// refresh tour
if( tours.length === 0 ){
  return(
    <div className="refresh" >
      <h2>No Tours Left</h2>
      <button className="btn_white" onClick={() => setTours(data)} >
        Refresh
      </button>
    </div>

  );
}


  return (
    <div className="App" >
      <Tours ttours = {tours} removeTour = {removeTourHandler} ></Tours>
    </div>
  );
};

export default App;
