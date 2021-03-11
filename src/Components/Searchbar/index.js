import React, { useState } from 'react';

import "./style.css";

export default function Searchbar(searchOption) {
    const [option, setOption] = useState(searchOption);
    
    if(searchOption == "name") {

        return (
            <>name</>
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