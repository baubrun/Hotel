import React from 'react'
import Room  from "./Room"


const RoomList = ({rooms}) => {
    if (rooms.length < 1 ){
        return (
            <div className="empty-search">
                <h3>No matches found.</h3>
            </div>
        )
    }
    return (
        <div className="roomList">
            <div className="roomList-center">
                {rooms.map(item => {
                    return <Room key={item.id} room={item} />
                })}
            </div>
        </div>
    )
}


export default RoomList