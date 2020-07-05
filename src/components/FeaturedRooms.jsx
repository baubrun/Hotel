import React from 'react'

import Room from "./Room"
import Title from "./Title"
import Spinner from "./Spinner"


const FeaturedRooms = (props) => {
    const _rooms = props.rooms.map(room => {
        return <Room key={room.id} room={room}/>
    })

    return (
        
        <section className="featured-rooms">
            <Title title="Featured Rooms"/>
            <div className="featured-rooms-center">
                {props.loading ? <Spinner /> : _rooms}
            </div>
        </section>
    )
}


export default FeaturedRooms

