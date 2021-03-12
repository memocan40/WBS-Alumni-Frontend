import React, { useState } from 'react';

import "./style.css";

export default function Searchbar({searchOption,inputValue, batches, cities}) {
    let [inputvalue,setinputvalue]=useState("");

    console.log(batches,cities);

    const batchesOptions = batches.map(el => {
        return <option className="reach-out-option" key={el.name} value={el.name}>{el.name}</option>
    })
    const citiesOptions = cities.map(el => {
        return <option className="reach-out-option" key={el.name} value={el.name}>{el.name}</option>
    })
    
    if(inputvalue){inputValue(inputvalue)}
    if(searchOption == "name") {

        return (
            <input className="reach-out-input" type="text" onChange={(e)=>{setinputvalue(e.target.value)}} ></input>
        )
    } else if (searchOption == "batch" && batches) {

        return (
            <select className="reach-out-select" onChange={(e)=> (setinputvalue(e.target.value))}>
               {batchesOptions}
            </select>
        )
    } else if (searchOption == "interests") {

        return (
            <input className="reach-out-input" type="text" onChange={(e)=>{setinputvalue(e.target.value)}} ></input>
        )
    } else if (searchOption == "city" && cities) {

        return (
            <select className="reach-out-select" onChange={(e)=> (setinputvalue(e.target.value))}>
               {citiesOptions}
            </select>
        ) 
    } else {
        return <>nothing selected</>
    }
    
}