import React ,{useState} from 'react';

 export const Bail= ()=>{
    const [count,lhcount] =useState(0)

    return(
        <div>
            <h1>Counting {count}</h1>
            <button onClick={()=>{ lhcount(count+2)}}>Click me</button>
        </div>
    )
}
export  default Bail;