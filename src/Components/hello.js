import React,{ useState } from 'react' 
const Hello = props=>
{
    const [fruitState,setFruitState] = useState({
        fruits:[
            {name:'Mango',weight:'20gm'},
            {name:'Melon',weight:'20gm'},
            {name:'Orange',weight:'50gm'},
            
        ]
    })
    const clickhandler = () =>{
        setFruitState({
            fruits:[
                {name:'samsung',weight:'20gm'},
                {name:'Apple',weight:'20gm'},
                {name:'Nokia',weight:'50gm'},
                
            ]
        })
    }

    return(
       <div>
        <button  onClick={clickhandler}>Click Me</button>
        <h6>Fruit is {fruitState.fruits[0].name}</h6>
        <h6>Fruit is {fruitState.fruits[1].name}</h6>
        <h6>Fruit is {fruitState.fruits[2].name}</h6>
       </div>
    )
}


export default Hello

    