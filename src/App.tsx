// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Navbar from "./Navbar";
// import Home from "./Home";
// import Destinations from "./Destination";
// import Tours from "./Tours";
// import Blog from "./Blog";
// import Contact from "./Contact";
// import ChatBox from "./Chatbox";
// import About from "./About";

// const App: React.FC = () => {
//   return (
//     <Router>
//       <Navbar />
//       <ChatBox />
//       <main className="pt-32 text-center text-3xl">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/destinations" element={<Destinations />} />
//           <Route path="/tours" element={<Tours />} />
//           <Route path="/blog" element={<Blog />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </main>
//     </Router>
//   );
// };

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Destinations from "./Destination";
import Tours from "./Tours";
import Blog from "./Blog";
import Contact from "./Contact";
import AboutUsPage from "./About";
import ChatBox from "./Chatbox";
import KoreaTourPage from "./korea";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <ChatBox />
      <main className="pt-32 text-center text-3xl">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="korea" element={<KoreaTourPage/>}/>
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
