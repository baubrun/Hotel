import React, {useState, useContext} from 'react'
import defaultImg from "../../images/room-1.jpeg"
import Hero from "../HeroImg"
import Banner from "../Banner"
import { Link } from "react-router-dom";
import {RoomContext} from "../../context"

const SingleRoom = (props) => {
    const [slug, setSlug] = useState(props.match.params.slug)
    const [defaultImage, setDefaultImg] = useState(defaultImg)

    const {getRoom} = useContext(RoomContext)
    const room = getRoom(slug)
    // console.log(room);
    if (!room){
        return <div className="error">
            <h3>Room not found</h3>
            <Link className="btn-primary" to="/rooms">Return to rooms</Link>
        </div>
    }
    return (
        <div>
            single {room.name}
        </div>
    )
}

export default SingleRoom
