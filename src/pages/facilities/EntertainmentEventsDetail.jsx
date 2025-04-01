import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const EntertainmentEventsDetail = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Jazz Night",
      date: "January 15, 2025",
      description:
        "Enjoy an evening of soulful jazz with renowned artists in our lounge.",
      image:
        "https://img.freepik.com/premium-vector/live-music-jazz-night-neon_77399-628.jpg",
    },
    {
      id: 2,
      title: "Cultural Dance Showcase",
      date: "January 22, 2025",
      description:
        "Experience the richness of Ghanaian culture with traditional dance performances.",
      image:
        "https://ghanaremembers.com/storage/public/ghana-dance-festival.jpg",
    },
    {
      id: 3,
      title: "Movie by the pool",
      date: "February 5, 2025",
      description:
        "Join us for a cozy outdoor movie night with complimentary snacks.",
      image:
        "https://thebuzzmagazines.com/sites/default/files/article-photos/2014/12/Movie.jpg",
    },
  ];

  return (
    <section className="bg-gray-100 py-12 px-4 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 uppercase tracking-wide">
            Entertainment & Events
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            From live performances to private celebrations, we create the
            perfect ambiance for unforgettable moments.
          </p>
        </div>

        {/* Image and Text Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <img
            src="https://the-o-company.com/event-management/wp-content/uploads/2018/10/Event-Entertainment.jpg"
            alt="Entertainment & Events"
            className="rounded-lg shadow-lg object-cover w-full h-full"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Your Destination for Memorable Events
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              From corporate gatherings to personal milestones, we offer
              state-of-the-art facilities and personalized event planning
              services. Let us make your occasion truly special.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mt-4">
              Our entertainment lineup features live performances, cultural
              shows, and themed nights that promise to keep you entertained and
              engaged.
            </p>
          </div>
        </div>

        {/* Upcoming Events Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-800 text-center mb-8">
            Upcoming Events & Programs
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">
                    {event.title}
                  </h4>
                  <p className="text-sm text-gray-500 mb-4">{event.date}</p>
                  <p className="text-gray-600 text-sm">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-800">
            Let Us Host Your Next Event
          </h3>
          <p className="text-lg text-gray-600 mt-4">
            Reach out to us to plan your next big celebration or corporate
            meeting.
          </p>
          <div className="flex justify-center items-center h-full">
            <Link
              to="/contactus"
              className="relative inline-block px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full overflow-hidden shadow-md group"
            >
              <span className="relative z-10">Contact Us</span>
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent to-white opacity-60 blur-md transition-transform transform -translate-x-full group-hover:translate-x-full duration-1000 pointer-events-none"></div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EntertainmentEventsDetail;
