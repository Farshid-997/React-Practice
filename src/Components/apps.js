import React from 'react';
import './apps.css';
class apps extends React.Component{

state={
 email:"",
 password:"",
 emailError:"",
 passError:"",
 age:""
}
    // clickChange=(el)=>{
    //     //let val= el.target.value;
    //     //this.setState({name:val});
    //     let val=el.target.name; //get the name
    //     let myvalue=el.target.value; // get the value 
    //     this.setState({[val]:myvalue}); //put value into name

    // }

    validate(){
        if(!this.state.email>0 && !this.state.password>0){
             this.setState({emailError:"Email and Password Required!"});
        }
    
         else if(!this.state.email>0){
            this.setState({emailError:"Email is required!"});
    }
             else if(!this.state.password>0){
             this.setState({passError:"password is required"});
    }
         else{
          return true;
    }
}
    clickSubmit=(event)=>{
        event.preventDefault();
       // console.log(this.state.email,this.state.password);
       if(this.validate()){
           alert("Form validation is OK!");
       }
    }

    
    render(){
        return(
            <div >
                <strong>Login Panel</strong><br></br>
                <h6>Your age is {this.state.age}</h6>
                
              <div>
                  <form onSubmit={this.clickSubmit}>
                      <div class="form">

                         Email:<input type="email" name="email" onChange={(event)=>{this.setState({email:event.target.value})}} ></input><br></br>
                          <strong style={{color:'red'}}>{this.state.emailError}</strong> <br></br>

                         Password:<input type="password" name="password" onChange={(event)=>{this.setState({password:event.target.value})}}></input><br></br>
                         <strong style={{color:'red'}}>{this.state.passError}</strong>
                          Your Age: <br></br>
                          <select onChange={(event)=>{this.setState({age:event.target.value})}} name="age">
                          <option value="" selected disabled>Select Your Age</option>
                          <option value="15-20">15-20</option>
                          <option value="20-30">20-30</option>
                          <option value="30+">30+</option>
                          
                         </select><br></br>
                          <button  type="submit">Submit</button>
                      </div>
                  </form>
              </div>
            </div>
        )
    }

}

export default apps;