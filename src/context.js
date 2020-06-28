import React, { Component, createContext } from "react";
import items from "./data";

const RoomContext = createContext();

class RoomProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      capacity: 1,
      featuredRooms: [],
      loading: true,
      minSize: 0,
      maxSize: 0,
      price: 0,
      minPrice: 0,
      maxPrice: 0,
      breakfast: false,
      pets: false,
      rooms: [],
      sortedRooms: [],
      type: "all"
    };
  }

  componentDidMount() {
    const rooms = this.formatData(items);
    const featuredRooms = rooms.filter((r) => r.featured === true);
    const maxPrice = Math.max(...rooms.map((item) => item.price));
    const maxSize = Math.max(...rooms.map((item) => item.size));
    this.setState({
      featuredRooms,
      loading: false,
      maxPrice,
      maxSize,
      price: maxPrice,
      rooms,
      sortedRooms: rooms,
    });
  }

  formatData = () => {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((i) => i.fields.file.url);
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  };

  getRoom = (slug) => {
    let tempRooms = [...this.rooms];
    const room = tempRooms.find((item) => item.slug === slug);
    return room;
  };

  handleChange = (event) => {
    const target = event.target;
    const name = event.target.name;
    const value = event.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value
    }, this.filterRooms())
  };

  filterRooms = () =>  {
    console.log("hello");
  }

  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {(value) => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}

export { RoomContext, RoomConsumer, RoomProvider };
