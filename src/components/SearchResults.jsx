import React, { useEffect, useState } from 'react'
import "./SearchResults.css";

function SearchResults({result,setResult,val,setVal}) {
    const [Filter,setFilter]=useState([]);
    function changeresult(){
        const arr=result.filter(obj=> obj.name.toLowerCase().includes(val.toLowerCase()));
       setFilter(arr);
    }

    useEffect(() => {
        if(val!== "") changeresult();
        else setFilter([]);
    //   console.log("useeffect");
    }, [val])

  return (
    
    <div className='card'>
    { Filter.map((item,index) => ( <div className='search-result' key={index} onClick={()=>setVal(item.name)}>{item.name}</div>))}
    </div>
    
  )
}

export default SearchResults