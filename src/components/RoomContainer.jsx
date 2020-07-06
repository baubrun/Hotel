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
      type: "all",
      selectedRooms: [],
      capacity: 1,
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
    const maxPrice = Math.max(...rooms.map((item) => item.price));
    const maxSize = Math.max(...rooms.map((item) => item.size));
    console.log("in component mount set state");
    this.setState({
      maxPrice,
      maxSize,
      price: maxPrice,
      rooms,
      selectedRooms: rooms,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.capacity !== this.state.capacity ||
      prevState.type !== this.state.type ||
      prevState.price !== this.state.price ||
      prevState.breakfast !== this.state.breakfast ||
      prevState.pets !== this.state.pets ||
      prevState.minSize !== this.state.minSize ||
      prevState.maxSize !== this.state.maxSize 

    ) {
      this.selectRoom();
    }
  }

  dispatchRooms = (rooms) => {
    this.props.getRooms(rooms);
  };

  handleChange = (evt) => {
    const target = evt.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({ [evt.target.name]: value }, this.selectRoom());
  };

  selectRoom = () => {
    let {
      rooms,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets,
    } = this.state;
    let sr = [...rooms];
    capacity = parseInt(capacity);
    price = parseInt(price);
    minSize = parseInt(minSize);
    maxSize = parseInt(maxSize);

    if (type !== "all") {
      sr = sr.filter((r) => r.type === type);
    }
    if (capacity !== 1) {
      sr = sr.filter((r) => r.capacity >= capacity);
    }

    sr = sr.filter((r) => r.price <= price);
    sr = sr.filter((r) => r.size >= minSize && r.size <= maxSize)
    if (breakfast) {
      sr = sr.filter((r) => r.breakfast === true);
    }
    if (pets) {
      sr = sr.filter((r) => r.pets === true);
    }
    this.setState({ selectedRooms: sr });
  };

  render() {
    return (
      <>
        <SearchRooms handleChange={this.handleChange} state={this.state} />
        <RoomList rooms={this.state.selectedRooms} />
      </>
    );
  }
}

export default connect(mapStateToProps, dispatchStateToProps)(RoomContainer);
