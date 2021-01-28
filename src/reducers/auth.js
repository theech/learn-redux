import {
    IS_LOGIN,
    IS_LOGOUT
} from '../actions/types'

const authReducer = (state = false, action) => {
    switch (action.type) {
        case IS_LOGIN:
            return true
        case IS_LOGOUT:
            return false
        default: 
            return state
    }
}

export default authReducer 