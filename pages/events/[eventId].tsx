import { useRouter } from "next/router";
import {
  EventSummary,
  EventLogistics,
  EventContent,
} from "../../components/event-detail";
import { getEventById } from "../../dummy-data";

const EventDetailPage = () => {
  const router = useRouter();
  const eventId = router.query.eventId;

  const event = getEventById(eventId as string);

  if (!event) {
    return <p>Event not found</p>;
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export default EventDetailPage;
