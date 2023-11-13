// import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import Home from './components/Home';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import {Routes,Route} from 'react-router-dom'
import axios from 'axios'
import Ho from './components/Ho';
import SingleCard from './components/SingleCard';
import Reviews from './components/Reviews';

function App() {
  const [brewery,setBrewery] = useState([]);
  async function fetchURL(){
    try{
      const data = await axios.get('https://api.openbrewerydb.org/v1/breweries');
      console.log("data", data.data)
      const result = await data.data;
      setBrewery(result);
      // console.log(result);
    }
    catch(error){
      console.log(error);
    }
  }
  
  useEffect(()=>{
    fetchURL();
  },[])
  
  return (
    <div>
      {/* <h1>jknfjewnf</h1> */}
    <h1>I am loaded</h1>
      // <Routes>
      //   <Route path="/" element={<Ho/>} />
      //   <Route path="dashboard" element={<Home brewery={brewery}/>}/>
      //   <Route path="login" element={<LogIn/>}/>
      //   <Route path="signin" element={<SignUp/>}/>
      //   <Route path="dashboard/singlecard/:id" element={<SingleCard brewery={brewery}/>}/>
      //   <Route path="dashboard/singlecard/:id/reviews" element={<Reviews/>} />
      // </Routes>
      {/* <Home brewery={brewery}/> */}
      {/* <LogIn/> */}
      {/* <SignUp/> */}
    </div>
  );
}

export default App;
