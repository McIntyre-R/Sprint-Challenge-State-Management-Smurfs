import { POSTED } from '../actions/actions'



export const initialState = {
    results: [{
        name: '',
        age: 0,
        height: ''
    }]
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case POSTED :
            return {
                ...state,
                results: action.payload
            }
        default: 
            return state
    }
}