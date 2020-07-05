import React from "react";
import SearchRooms from "./SearchRooms";
import RoomList from "./RoomList";
import { connect } from "react-redux";
import Spinner from "./Spinner";
import {mapStateToProps} from "../util/reduxUtils"


const RoomContainer = (props) => {
  if (props.loading) {
    return <Spinner />;
  }
  return (
    <>
      <SearchRooms rooms={props.rooms} />
      {/* <RoomList rooms={sortedRooms} /> */}
    </>
  );
};



export default connect(mapStateToProps)(RoomContainer);

// const RoomContainer = ({ context }) => {
//   const { loading, sortedRooms, rooms } = context;
//   if (loading) {
//     return <Spinner />;
//   }
//   return (
//     <>
//       <SearchRooms rooms={rooms} />
//       <RoomList rooms={sortedRooms} />
//     </>
//   );
// };

// export default withRoomConsumer(RoomContainer);

