import {
    GET_ROOMS,
    IS_LOADING
} from "../actions/types"

export const getRoomsAction = (items) => {
    return {
        type: GET_ROOMS,
        payload: items
    }
}

export const isLoadingAction = ({
    type: IS_LOADING,
    payload: true
})