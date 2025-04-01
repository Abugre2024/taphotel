import React from "react";
import { rooms } from "../../data/rooms";
import { Link } from "react-router-dom";

const RoomsPage = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h3 className="text-purple-800 text-lg font-semibold uppercase tracking-widest">
            Our Rooms
          </h3>
          <h2 className="text-gray-800 text-3xl lg:text-5xl font-bold">
            Explore Our Options
          </h2>
          <p className="text-gray-600 text-lg mt-4">
            Whether you're here for a vacation or business, we have a room
            that's just right for you.
          </p>
        </div>

        {/* Room Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 hover:shadow-2xl"
            >
              {/* Room Image */}
              <img
                src={room.images[0]}
                alt={room.title}
                className="w-full h-56 object-cover"
              />

              {/* Room Details */}
              <div className="p-6">
                <div className="mb-4">
                  <span className="text-purple-800 font-semibold text-sm uppercase">
                    From GHS {room.price} / Night
                  </span>
                </div>
                <h3 className="text-gray-800 text-2xl font-bold">
                  {room.title}
                </h3>
                <p className="text-gray-500 text-sm uppercase mb-2">
                  {room.type}
                </p>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  {room.description.length > 100
                    ? `${room.description.substring(0, 100)}...`
                    : room.description}
                </p>
                <Link
                  to={`/rooms/${room.id}`}
                  className="bg-purple-800 text-white py-2 px-6 rounded-lg shadow-md hover:bg-purple-700 transition-all"
                >
                  View Room
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsPage;
