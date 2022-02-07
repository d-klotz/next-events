import classes from "./event-summary.module.css";

type EventSummaryProps = {
  title: string;
};

export const EventSummary = (props: EventSummaryProps) => {
  const { title } = props;

  return (
    <section className={classes.summary}>
      <h1>{title}</h1>
    </section>
  );
};
