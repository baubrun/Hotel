import React, {useState, useEffect} from 'react'
// import React, {useContext} from 'react'
// import {RoomContext} from "../context"
// import {mapStateToProps, dispatchStateToProps} from "../util/reduxUtils"
// import data from "../data"

import Room from "./Room"
import Title from "./Title"
import Spinner from "./Spinner"


const FeaturedRooms = (props) => {
    console.log('props :>> ', props);
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


// export default connect(mapStateToProps, dispatchStateToProps)(FeaturedRooms)
export default FeaturedRooms

// const FeaturedRooms = () => {
//     let { featuredRooms: rooms, loading } = useContext(RoomContext)

//     rooms = rooms.map(room => {
//         return <Room key={room.id} room={room}/>
//     })

//     return (
        
//         <section className="featured-rooms">
//             <Title title="Featured Rooms"/>
//             <div className="featured-rooms-center">
//                 {loading ? <Spinner /> : rooms}
//             </div>
//         </section>
//     )
// }

// export default FeaturedRooms
