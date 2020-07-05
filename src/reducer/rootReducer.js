import {combineReducers} from "redux"
import roomsReducer from "./roomsReducer"
import loadingReducer from "./loadingReducer"

const rootReducer = combineReducers({
    loading: loadingReducer,
    rooms: roomsReducer
})


export default rootReducer

