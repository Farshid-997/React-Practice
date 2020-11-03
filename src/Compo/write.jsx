import React, {Component} from 'react';
import axios from 'axios';
export default class  Write extends React.Component {
  state={
    title:'',
    body:''
  }
  formSubmit=(e)=>{
     e.preventDefault();
     axios.post('/user', {  // kon url e jabe(jei url e data insert hobe)
     title: this.state.title,    // kon valu gula niya jabe
      body: this.state.body
    })
    .then(function (response) {  //jokhon success hobe
      console.log(response);
    })
    .catch(function (error) {  //success nah hole
      console.log(error);
    });
  }
  render()
  {
  return (
              <div >
              <div class="jumbotron col-lg-4">
              <form onSubmit={this.formSubmit}>
                <div class="form-group">
  <label for="exampleInputEmail1">Title</label>
                <input type="text" class="form-control" id="title" name="title" required onChange={(event)=>{this.setState({title:event.target.value})}} />
         
          </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Details</label>
    <textarea class="form-control" name="body" onChange={(event)=>{this.setState({body:event.target.value})}}>Write Here</textarea>
  </div>
  
  <button type="submit" class="btn btn-primary">Publish</button>
</form>
              </div>
             
         
  </div>   
      
    
  )
}

}
