import React, { Component } from 'react'

class Check extends Component
{
    // constructor(props)
    // {
    //     super(props);

    //     this.state={
    //      men:[
    //          {name:'Learn Hunter'}
    //      ]

        
    // }
    state={
        men:"Learn Hunter"
    }

 changeName=(event)=>{
   this.setState({
       men:event.target.value
   })
 }
    
  render()
{
return (
    <div>
        <input type="text" onChange={this.changeName} />
       <h1>Hello {this.state.men}</h1>
</div>
  )
}

}
export default Check