import { combineReducers } from 'redux'
import { submitForm } from '../actions/actionTypes';

const user = (state = {}, action) => {
    switch (action.type) {
        case submitForm:
            return action.user
        default:
            return state
    }
}

const rootReducer = combineReducers({
    user: user
})

export default rootReducer