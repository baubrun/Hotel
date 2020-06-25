import React, {useContext} from 'react'
import {RoomContext} from "../context"
import Room from "./Room"
import Title from "./Title"
import Spinner from "./Spinner"


const FeaturedRooms = () => {
    let { featuredRooms: rooms, loading } = useContext(RoomContext)

    rooms = rooms.map(room => {
        return <Room key={room.id} room={room}/>
    })

    return (
        
        <section className="featured-rooms">
            <Title title="Featured Rooms"/>
            <div className="featured-rooms-center">
                {loading ? <Spinner /> : rooms}
            </div>
        </section>
    )
}

export default FeaturedRooms
