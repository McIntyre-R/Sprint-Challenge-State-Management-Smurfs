import React, {useState} from 'react'
import { postSmurf } from '../actions/actions'
import { connect } from 'react-redux'


function SmurfForm(props) {
    const [searching, setSearching] = useState({
        name: '',
        age: 0,
        height: ''
    });

    const handleChanges = e => {
        setSearching({...searching, [e.target.name]: e.target.value})
    }
    return(
        <div> 
            <div>
                <input type='text' name='name' value={searching.name} onChange={handleChanges} placeholder='Name' />
                <input type='text' name='age' value={searching.age} onChange={handleChanges} placeholder='Age' />
                <input type='text' name='height' value={searching.height} onChange={handleChanges} placeholder='Height' />
                <button onClick={()=> props.postSmurf(searching) }>Search</button>
            </div>
        </div>
    )
}

export default connect(null,{postSmurf})(SmurfForm);