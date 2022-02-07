import React from "react";
import MainHeader from "./main-header";

export const Layout: React.FC = (props) => {
  return (
    <>
      <MainHeader />
      <main>{props.children}</main>
    </>
  );
};
