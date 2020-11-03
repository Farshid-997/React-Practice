import React, { Profiler } from 'react';
import logo from './logo.svg';
import './App.css';
// import Learn from './Components/hello' 
// import Welcome from './Components/hunter'
// import Check from './Components/check'
// import  Fuck   from './Components/apps'
// import List     from     './Components/list'
// import LOL    from     './Components/nav'

import Hail from './Components/hooks'
class App extends React.Component {
  render()
  {
  return (
  <div className="App">
          <h2>This is our HomePage</h2>
          <Hail></Hail>
  </div>   
      
    
  )
}
}
export default App;
