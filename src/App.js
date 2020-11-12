import { useState,useEffect } from 'react';
import './App.css';
import Loader from './components/loader';
import MainPageContent from './components/mainpageContent';

function App() {
  const[loadingSwitch,setLoader]=useState(true)
  
  useEffect(() => {
    let myVar = setTimeout(function(){ setLoader(false) }, 3000);
  },[] )


  return (
    <div className="App">
      {loadingSwitch? 
        <Loader/>:
        <MainPageContent/>
      }
    </div>
  );
}

export default App;
