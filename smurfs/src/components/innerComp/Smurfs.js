import React from 'react'
import { connect } from 'react-redux'
import Smurf from './Smurf'



function Smurfs(props){
//   console.log(props.results)
    return(
        <div>
           {props.results.map( res => (
                <Smurf character={res} />
            ))} 
        </div>
    )

}
const mapStateToProps = state => {
    return{    
        results: state.results
    }
}

export default connect(mapStateToProps,{})(Smurfs);