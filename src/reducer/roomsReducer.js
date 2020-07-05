import {GET_ROOMS} from "../actions/types"


const roomsReducer = (state = [], action) => {
    if (action.type === GET_ROOMS){
        return action.payload
    }
    return state
}


export default roomsReducer