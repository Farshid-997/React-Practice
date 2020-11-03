import React from 'react';

class list extends React.Component{
     render(){
         const names=[
             {name:'Karim',age:15,grade:4.5},
             {name:'Masud',age:14,grade:4.6},
             {name:'Rahim',age:13,grade:3.5},
             {name:'Billal',age:15,grade:5.00}
         ];
         const items=names.map((item,idx)=>{
         return <li class="list-item" key={idx}>Name:{item.name}, Age:{item.age}, Grade:{item.grade} <button class="btn btn-success">E</button> <button class="btn btn-danger">D</button></li>
         })
        return(
            <div class="apps">
                <div>
                   <strong>Student's Info</strong>
                             <ul class="list">{items}</ul> 
                </div>
            </div>
        )
    }
}
export default list;