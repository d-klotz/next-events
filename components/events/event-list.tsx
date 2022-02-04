import { Event } from "../../types";
import EventItem from "./event-item";
import classes from "./event-list.module.css";

type EventListProps = {
  events: Event[];
};

const EventList = (props: EventListProps) => {
  const { events } = props;
  return (
    <ul className={classes.list}>
      {events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </ul>
  );
};

export default EventList;
