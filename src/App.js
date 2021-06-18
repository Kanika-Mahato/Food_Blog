import React ,{ useState,useEffect}from 'react'
import './App.css';

import Navigation from './components/Navigation/Navigation'
import Header from './components/Header/Header'
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Contact from './components/Pages/Contact'
import Footer from './components/Footer'

import Axios from 'axios'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function App() {
  
  const[search, setSearch]=useState("orange");
  const [recepies,setRecipies]=useState([]);
  const APP_ID="97b8ceb6";
  const APP_KEY="5bce89ed180a0beedbdd087ad4305371";

  useEffect(()=>{
    getRecipies();
   });

  const onInputChange=(e)=>{
    setSearch(e.target.value);
  }
  const getRecipies= async()=>{
    const result=await Axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`
    );
    setRecipies(result.data.hits)
 
  }
  const onSearchClick=()=>{
    getRecipies();
  };
 

  return (
    <>
    <Router>
    <Header search={search} onInputChange={onInputChange} onSearchClick={onSearchClick} />
    <Navigation/>
    <Switch>
    <Route exact path="/"><Home recepies={recepies}/></Route>
    <Route exact path="/about" component={About}/>
    <Route exact path="/contact" component={Contact}/>
    </Switch>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
