import React from "react";

const App = () => {
  return (
    <>
      <div className="relative w-screen min-h-screen overflow-x-hidden">
        <NavBar />
        <Section id="home" />
        <Section id="services" />
      </div>
    </>
  );
};

export default App;
