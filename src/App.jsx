import React from "react";
import Hero from "./section/Hero";
import Navbar from "./section/Navbar";
import TextPressure from "./components/textPressure";
import Summary from "./section/Summary";

const App = () => {
  return (
    <>
      <div className="relative w-screen min-h-screen overflow-x-hidden ">
        <Navbar />
        <Hero />
      </div>
      <Summary />
      {/* <div style={{ position: "relative", height: "300px" }}>
        <TextPressure
          text="Naveen Hiremath"
          flex={false}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={false}
          textColor="black"
          strokeColor="#ff0000"
          minFontSize={36}
        />
      </div> */}
    </>
  );
};

export default App;
