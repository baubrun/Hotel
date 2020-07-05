import React, { Component } from 'react'
import data from "../data"
import FeaturedRooms from "./FeaturedRooms"
import {dispatchStateToProps} from "../util/reduxUtils"
import {formatData} from "../util/utils"
import { connect } from "react-redux";


class FeaturedRoomsContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             featuredRooms: []
        }
    }

    componentDidMount(){
        const rooms = formatData(data)
        this.dispatchRooms(rooms)
        this.getFeaturedRooms(rooms)
    }

      dispatchRooms = (rooms) =>{
          this.props.getRooms(rooms)
      }
    
      getFeaturedRooms = rooms => {
        const fr = rooms.filter(room => room.featured === true)
        this.setState({featuredRooms: fr})
      }

    render() {
        return (
            <FeaturedRooms rooms={this.state.featuredRooms}/>
        )
    }
}


export default connect(null, dispatchStateToProps)(FeaturedRoomsContainer)

