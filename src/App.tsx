
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
import Explore from "./Explore";
import Form from "./Form";
import Footer from "./Footer";
import ExploreNepal from "./ExploreNepal";
import TourPackages from "./Domestic";
import NationalParksPage from "./NationalParks";


const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      
      <ChatBox />
      <main className="pt-20  text-center text-3xl">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explorenepal" element={<ExploreNepal/>}/>
          <Route path="/form" element={<Form/>}/>
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/explore" element={<Explore/>}/>
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="domestic" element={<TourPackages/>}/>
          <Route path="korea" element={<KoreaTourPage/>}/>
          <Route path="nationalparks" element={<NationalParksPage/>}/>
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer/>
    </Router>
  );
};

export default App;
