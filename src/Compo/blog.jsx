import React, {Component} from 'react';
import axios from 'axios';
import Write from './write';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class  Blog extends React.Component {
  state={
    posts:[],
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts') 
     
    .then((response) => {
      this.setState({posts:response.data});
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  render()
  {
       const posts=this.state.posts;
       const allpost=posts.map((post,idx)=>{
         return(
           <div>
             <a href="" key={idx}>{post.title}</a><br></br>
                  <p>{post.body}</p>
           </div>
         )
       });




  return (
  <div >
          <h1>This is Blog component</h1>
          <Link to="/write">Write Post</Link>
          <div class="media">
  
           <div class="media-body text-center">
              <h5 class="mt-0">Blog Post</h5>
               {allpost}
             </div>
         </div>
  </div>   
      
    
  )
}
}
export default Blog;

