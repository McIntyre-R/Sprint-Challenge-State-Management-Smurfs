import React, { useEffect } from "react";
import "./App.css";
import SmurfForm from './innerComp/SmurfForm'
import {retreiveSmurf} from './actions/actions'
import {connect} from 'react-redux'
import Smurfs from "./innerComp/Smurfs";




function App(props) {

  useEffect(()=> {
    props.retreiveSmurf()
  },[])

 

    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfForm />
        <Smurfs />
        
      </div>
    );
}

export default connect(null,{retreiveSmurf})(App);
