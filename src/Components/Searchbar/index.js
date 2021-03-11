import React, { useState } from 'react';

import "./style.css";

export default function Searchbar({searchOption,inputValue}) {
    const [option, setOption] = useState(searchOption);
    let [inputvalue,setinputvalue]=useState();
    
    if(inputvalue){inputValue(inputvalue)}
    if(searchOption == "name") {

        return (
            <input type="text" onChange={(e)=>{setinputvalue(e.target.value)}} ></input>
        )
    } else if (searchOption == "batch") {

        return (
            <>batch</>
        )
    } else if (searchOption == "interests") {

        return (
            <>interests</>
        )
    } else if (searchOption == "city") {

        return (
            <>city</>
        ) 
    } else {
        return <>nothing selected</>
    }
    
}