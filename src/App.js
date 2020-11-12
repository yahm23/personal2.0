import { useState,useEffect } from 'react';
import './App.css';
import Loader from './components/loader';

function App() {
  const[loadingSwitch,setLoader]=useState(true)
  
  useEffect(() => {
    let myVar = setTimeout(function(){ setLoader(false) }, 4000);
    // setTimeout(setLoader(false), 7000);
    
  },[] )


  return (
    <div className="App">
      {loadingSwitch? 
        <Loader></Loader>:
        <div>
          <h1 className="test fade-in">Application shit.</h1>
        </div>
        }
    </div>
  );
}

export default App;
