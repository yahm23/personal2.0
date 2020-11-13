import { useState,useEffect } from 'react';
import './App.css';
import Loader from './components/functionalComponents/loader';
import MainPageContent from './components/pageComponents/mainpageContent';

function App() {
  const[loadingSwitch,setLoader]=useState(true)
  
  useEffect(() => {
    let myVar = setTimeout(function(){ setLoader(false) }, 2000);
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
