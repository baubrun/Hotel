import {
    getRoomsAction,
    isLoadingAction
} from "../actions/actions"

export const dispatchStateToProps = dispatch => {
    return {
        getRooms: (rooms) => dispatch(getRoomsAction(rooms)),
        loading: () => dispatch(isLoadingAction())
    }
}


export const mapStateToProps = state => {
    return {
        rooms: state.rooms,
        loading: state.loading
    }
}


