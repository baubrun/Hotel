import React from 'react'
import { useSelector } from "react-redux";

import Room from "./Room"
import Title from "./Title"
import Spinner from "./Spinner"
import { roomsState } from "../redux/roomSlice";


const FeaturedRooms = (props) => {
    const { loading } = useSelector(roomsState);

    const _rooms = props.rooms.map(room => {
        return <Room key={room.id} room={room}/>
    })

    return (
        
        <section className="featured-rooms">
            <Title title="Featured Rooms"/>
            <div className="featured-rooms-center">
                {loading ? <Spinner /> : _rooms}
            </div>
        </section>
    )
}


export default FeaturedRooms

