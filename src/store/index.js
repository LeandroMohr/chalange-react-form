import { createStore } from 'redux'
import user from '../reducers'

const initialStore = {
    user: {
        picture: '',
        firstName: '',
        lastName: '',
        age: 0,
        email: '',
        phone: '',
        state: '',
        city: '',
        address: '',
        interest: '',
        checkbox: ''
    }
}

const store = createStore(
    user,
    initialStore,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store