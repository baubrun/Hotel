import React from "react";
import SearchRooms from "./SearchRooms";
import RoomList from "./RoomList";
import { connect } from "react-redux";
import { mapStateToProps, dispatchStateToProps } from "../util/reduxUtils";
import { Component } from "react";
import { formatData } from "../util/utils";
import data from "../data";

class RoomContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rooms: [],
      roomType: "",
      selectedRooms: [],
      capacity: 1,
      loading: true,
      minSize: 0,
      maxSize: 0,
      price: 0,
      minPrice: 0,
      maxPrice: 0,
      breakfast: false,
      pets: false,
    };
  }

  componentDidMount() {
    const rooms = formatData(data);
    this.dispatchRooms(rooms);
    this.setState({ rooms, selectedRooms: rooms });
  }

  dispatchRooms = (rooms) => {
    this.props.getRooms(rooms);
  };

  handleChange = (evt) => {
    const { value } = evt.target;
    this.setState({ roomType: value });
    this.selectRoom(value);
  };

  selectRoom = (roomType) => {
    const { rooms } = this.state;
    if (roomType === "all"){
      this.setState({selectedRooms : rooms})
      return
    }
    const selectedRooms = rooms.filter((r) => r.type === roomType);
    this.setState({selectedRooms})
  };

  render() {
    const { rooms, roomType, selectedRooms } = this.state;
    return (
      <>
        <SearchRooms
          handleChange={this.handleChange}
          rooms={rooms}
          roomType={roomType}
        />
        <RoomList rooms={selectedRooms} />
      </>
    );
  }
}

export default connect(mapStateToProps, dispatchStateToProps)(RoomContainer);
