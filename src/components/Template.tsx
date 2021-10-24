import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

type Props = {
  children: any;
};

export default function Template({children}: Props) {
  return (
    <div className="container-fluid m-0 p-0 overflow-hidden">
      <NavBar/>
      <div className="body-container">
        <div className="pb-5">
          {children}
        </div>
        <Footer/>
      </div>
    </div>
  );
}
