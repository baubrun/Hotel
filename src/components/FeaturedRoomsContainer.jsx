import React, { Component } from 'react'
import data from "../data"
import FeaturedRooms from "./FeaturedRooms"
import {mapStateToProps, dispatchStateToProps} from "../util/reduxUtils"
import { connect } from "react-redux";
// import {getRoomsAction, isLoadingAction} from "../actions/actions"


class FeaturedRoomsContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             featuredRooms: []
        }
    }
    formatData = () => {
        let tempItems = data.map((item) => {
          let id = item.sys.id;
          let images = item.fields.images.map((i) => i.fields.file.url);
          let room = { ...item.fields, images, id };
          return room;
        });
        return tempItems;
      };

      dispatchRooms = () =>{
          this.props.getRooms(this.state.rooms)
      }
    
      getFeaturedRooms = rooms => {
        const fr = rooms.filter(room => room.featured === true)
        this.setState({featuredRooms: fr})
      }

    componentDidMount(){
        const rooms = this.formatData(data)
        this.dispatchRooms(rooms)
        // const fr = rooms.filter(room => room.featured === true)
        // this.setState({featuredRooms: fr})
        this.getFeaturedRooms(rooms)
    }

    render() {
        return (
            <FeaturedRooms rooms={this.state.featuredRooms}/>
        )
    }
}

// const dispatchStateToProps = (dispatch) => {
//     return {
//         getRooms: (rooms) => dispatch(getRoomsAction(rooms)),
//         loading: () => dispatch(isLoadingAction())
//     }
// }


// export default FeaturedRoomsContainer
export default connect(null, dispatchStateToProps)(FeaturedRoomsContainer)

