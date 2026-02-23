import { useState } from "react";

import Nav from "./Components/Nav";
import Body from "./Components/Body";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className="bg-bg h-dvh overflow-y-scroll font-display lg:flex lg:flex-col justify-center">
        <Nav />
        <Body />
        <Footer />
      </div>
    </>
  );
}

export default App;
