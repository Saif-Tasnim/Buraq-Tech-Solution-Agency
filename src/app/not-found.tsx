import React from "react";
import Header from "./component/shared/Header/Header";

const NotFound = () => {
  return (
    <div>
      <Header />
      <div
        className="h-screen w-full flex justify-center items-center"
        style={{
          backgroundImage: `url("https://nexlent.com/images/hero-bg.svg")`,
        }}
      >
        <div>
          <h1 className="text-7xl text-primary font-semibold my-7">Oops! nothing here</h1>
          <h2 className="text-5xl text-center font-extrabold text-purple-500 my-5">Page not found! </h2>
          <p className="text-center my-9 w-3/4 mx-auto text-lg">
            We&apos;r sorry, the page you are requested could not be found.
            Please go back to the home page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
