import React, { Component } from "react";
import { RoomContext } from "../context";
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;

  render() {
    let { loading, featuredRooms: rooms } = this.context;

    return (
      <section className="featured-rooms container">
        <Title title="Featured Rooms" />
        <div className="row">
          {loading ? (
            <Loading />
          ) : (
            rooms.map((room) => {
              return (
                <Room
                  key={room.id}
                  name={room.name}
                  slug={room.slug}
                  image={room.images[0]}
                  price={room.price}
                />
              );
            })
          )}
        </div>
      </section>
    );
  }
}
