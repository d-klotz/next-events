import classes from "./error-alert.module.css";

export const ErrorAlert: React.FC = (props) => {
  return <div className={classes.alert}>{props.children}</div>;
};
