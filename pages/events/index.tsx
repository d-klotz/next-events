import { useRouter } from "next/router";
import { EventList, EventsSearch } from "../../components/events";
import { getAllEvents } from "../../dummy-data";

const AllEventsPage = () => {
  const events = getAllEvents();

  const router = useRouter();

  const findEventHandler = (selectedYear?: string, selectedMonth?: string) => {
    const fullPath = `/events/${selectedYear}/${selectedMonth}`;
    router.push(fullPath);
  };

  return (
    <>
      <EventsSearch onSearch={findEventHandler} />
      <EventList events={events} />
    </>
  );
};

export default AllEventsPage;
