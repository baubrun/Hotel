import React, { Component } from "react";
import defaultImg from "../../images/room-1.jpeg";
import Banner from "../Banner";
import { Link } from "react-router-dom";
import StyledHero from "../StyledHero";
import { connect } from "react-redux";
import { mapStateToProps } from "../../util/reduxUtils";


class SingleRoom extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      defaultImage: defaultImg,
       slug: props.match.params.slug,
       rooms: this.props.rooms,
       room: ""
    }
  }
  
  componentDidMount() {
    this.setState({room: this.getRoom(this.state.slug) });
  }

  getRoom = (slug) => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find((item) => item.slug === slug);
    return room;
  };

  getImages = () => {
      const images = this.state.room.images
      return {
        mainImg: images[0],
        restImages: images.slice(1)
      }
  }

render(){
  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images
  } = this.state.room

  if (!images || !extras) {
    return (
      <div className="error">
        <h3>Room not found</h3>
        <Link className="btn-primary" to="/rooms">
          Return to rooms
        </Link>
      </div>
    );
  }
  return (
    <>

      <StyledHero hero="roomsHero" img={images[0]}>
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn-primary">
            Return to Rooms
          </Link>
        </Banner>
      </StyledHero>

      <section className="single-room">
        <div className="single-room-images">
          {images.slice(1).map((img, idx) => {
            return <img key={idx} src={img} alt={name} />;
          })}
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>Details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>Info</h3>
            <h6>price: ${price}</h6>
            <h6>size: {(size / 0.3048).toFixed(0)} m<sup>2</sup></h6>
            <h6> max capacity : {capacity > 1 ? `${capacity} people`: `${capacity} person`}</h6>
            <h6>{pets ? "Pets" : "No pets"} allowed</h6>
        <h6>{breakfast && "Free breakfast"}</h6>
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h6>Extras</h6>
        <ul className="extras">
          {extras.map((item, idx) => {
            return <li key={idx}>- {item}</li>
            
          })}
        </ul>
      </section>
    </>
  );
};
}

export default connect(mapStateToProps)(SingleRoom);
