import { Event } from "../../types";
import { Button } from "../ui";
import { DateIcon, ArrowRightIcon, AddressIcon } from "../icons";
import classes from "./event-item.module.css";

type EventListProps = {
  event: Event;
};

const EventItem = (props: EventListProps) => {
  const { event } = props;
  const formattedAddress = event.location.replace(",", "\n");
  const exploreLink = `/events/${event.id}`;

  return (
    <li className={classes.item}>
      <img src={"/" + event.image} alt={event.title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{event.title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{event.date}</time>
          </div>
        </div>
        <div className={classes.address}>
          <AddressIcon />
          <address>{formattedAddress}</address>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
