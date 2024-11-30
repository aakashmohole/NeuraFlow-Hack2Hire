import React from "react";

const EventCard = ({ event }) => {
  return (
    <>
      <div className="h-[70%] relative rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 animate__animated animate__fadeInUp cursor-pointer overflow-hidden">
        <div className="relative w-full h-full bg-gray-700 z-10 p-6 rounded opacity-0 hover:opacity-100 transition duration-500">
          <h2 className="text-2xl font-semibold text-white">
            {event.event_name}
          </h2>
          <p className="text-gray-100 mt-2">
            Date: {new Date(event.event_created_date).toLocaleDateString()}
          </p>
          <p className="text-gray-300 mt-4">{event.description}</p>
          <a
            href={event.event_join_link}
            className="mt-4 inline-block bg-indigo-700 text-white font-semibold py-2 px-4 rounded hover:bg-indigo-600 transition"
          >
            Join Event
          </a>
        </div>

        <div className="w-full h-40 z-0">
          <img
            src={event.photo}
            alt={event.event_name}
            className="absolute top-0 left-0 w-full h-full object-cover opacity-75 z-0"
          />
        </div>
      </div>
    </>
  );
};

export default EventCard;
