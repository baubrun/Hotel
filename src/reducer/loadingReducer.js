import {IS_LOADING} from "../actions/types"


const isLoadingReducer = (state = false, action) => {
    if (action.type === IS_LOADING) {
        return action.payload
    }
    return state
}

export default isLoadingReducer