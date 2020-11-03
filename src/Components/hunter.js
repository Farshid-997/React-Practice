import React, { Component } from 'react'
import './hunter.css';
class hunter extends Component
{
    constructor(props)
    {
        super(props);
    this.state=
    {
        fruits:[
            {name:'Mango',weight:'20gm'},
            {name:'Orange',weight:'20gm'},
            {name:'Melon',weight:'50gm'},
            
        ]
    }
}
 clickhandler= ()=>{
      this.setState({
         fruits:[
         {name:'samsung',weight:'20gm'},
         {name:'Apple',weight:'20gm'},
         {name:'Nokia',weight:'50gm'},
        
    ]
})

    }
 
    
  render()
{
return (
    <div >
        <button onClick={this.clickhandler}>Click Me</button>
        
        <h6 class="Card">Fruit is {this.state.fruits[0].name}</h6>
        <h6 class="Card">Fruit is {this.state.fruits[1].name}</h6>
        <h6 class="Card">Fruit is {this.state.fruits[2].name}</h6>
     </div>
  )
}

}
export default hunter