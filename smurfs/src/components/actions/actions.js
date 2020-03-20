import axios from 'axios'

export const SENDING = 'SENDING'
export const POSTED = 'POSTED'




export const retreiveSmurf = () => dispatch => {
    dispatch({ type: SENDING });
    // console.log('hello')
    axios.get('http://localhost:3333/smurfs')
    .then(res => dispatch({ type: POSTED, payload: res.data}))
    .catch(err => console.log(err))
}

export const postSmurf = info => dispatch => {
    dispatch({ type: SENDING });
    // console.log(info)
    axios.post('http://localhost:3333/smurfs', info)
    .then(res => dispatch({ type: POSTED, payload: res.data}))
    .catch(err => console.log(err))
}

export const deleteSmurf = info => dispatch => {
    dispatch({ type: SENDING });
    console.log(info)
    axios.delete(`http://localhost:3333/smurfs/${info}`)
    .then(res => dispatch({ type: POSTED, payload: res.data}))
    .catch(err => console.log(err))
}



// dispatch({ type: GETTING, payload: res})