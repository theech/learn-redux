import { INCREMENT, DECREMENT} from '../actions/types'

const counter = (state = 0, actions) => {
    console.log(actions.type)
    switch (actions.type) {
        case INCREMENT:
            return state + 1
        case DECREMENT:
            return state - 1
        default:
            return state
    }
}

export default counter