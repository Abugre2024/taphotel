import React from "react";
import { rooms } from "../../../data/rooms";
import { Link } from "react-router-dom";


const Rooms = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h3 className="text-purple-800 text-lg font-semibold uppercase tracking-widest">
            Luxury Resort
          </h3>
          <h2 className="text-gray-800 text-3xl lg:text-5xl font-bold">
            Choose a Room
          </h2>
        </div>

        {/* Room Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
            >
              {/* Room Image */}
              <img
                src={room.images[0]}
                alt={room.title}
                className="w-full h-48 object-cover"
              />

              {/* Room Details */}
              <div className="p-6">
                <div className="mb-4">
                  <span className="text-purple-800 font-semibold text-sm uppercase">
                    From {room.price} / Night
                  </span>
                </div>
                <h3 className="text-gray-800 text-2xl font-bold">
                  {room.title}
                </h3>
                <p className="text-gray-500 text-sm uppercase mb-2">
                  {room.type}
                </p>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  {room.description}
                </p>
                <Link to={`/rooms/${room.id}`} className="bg-purple-800 text-white py-2 px-6 rounded-lg shadow-md hover:bg-purple-700 transition-all">
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

export default Rooms;
