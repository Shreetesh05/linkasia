import React from "react";
import Navbar from "./Navbar"; // adjust path if needed
import Home from "./Home";
import Destinations from "./Destination";
import Tours from "./Tours";
import Blog from "./Blog";
import Contact from "./Contact";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className="pt-32 text-center text-3xl">
       <Home></Home>
       <Destinations></Destinations>
       <Tours></Tours>
       <Blog></Blog>
       <Contact></Contact>
      </main>
    </div>
  );
};

export default App;
