import React, { useEffect, useState } from "react";
import EventCard from "../../components/custom/Webinar/EventCard";
import { getEvents } from "../../api/eventApi";
import PageLoader from "../../components/custom/PageLoader";

const Events = () => {
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getAllEvents = async () => {
      const { data, error } = await getEvents(setLoading);

      if (data) {
        // console.log(data);
        setEvents(data);
      }
    };
    getAllEvents();
  }, []);

  if (loading) {
    return <PageLoader />;
  }

  return (
    <>
      <div className="bg-slate-950">
        <div className="p-6 text-center animate__animated animate__fadeInDown">
          <h1 className="text-4xl font-bold text-white">
            Upcoming Events & Announcements
          </h1>
          <p className="text-gray-400 mt-2">
            Stay updated on the latest events, webinars, and more!
          </p>
        </div>
        <div className="container mx-auto max-w-6xl mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
            {events &&
              events.length > 0 &&
              events.map((event) => <EventCard event={event} />)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
