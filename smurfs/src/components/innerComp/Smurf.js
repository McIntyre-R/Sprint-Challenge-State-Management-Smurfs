import React from 'react'
import '../../index.css'
import { connect } from 'react-redux'
import {deleteSmurf} from '../actions/actions'




function Smurf(props){
  console.log(props.character.id)
return(
    <div>
        <h1>{props.character.name}</h1>
        <h5>{props.character.age}</h5>
        <h5>{props.character.height}</h5>
        <button onClick={() => props.deleteSmurf(props.character.id)}>delete</button>
    </div>
)
}


export default connect(null,{deleteSmurf})(Smurf);



