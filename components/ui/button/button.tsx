import Link from "next/link";
import React from "react";
import classes from "./button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  link: string;
}

export const Button = (props: ButtonProps) => {
  return (
    <Link href={props.link}>
      <a className={classes.btn}>{props.children}</a>
    </Link>
  );
};
