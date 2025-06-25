
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Destinations from "./Destination";
import Tours from "./pages/Tours";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import AboutUsPage from "./pages/About";
import ChatBox from "./componentes/Chatbox";
import KoreaTourPage from "./korea";
import Explore from "./Explore";
import Form from "./componentes/Form";
import Footer from "./pages/Footer";
import ExploreNepal from "./ExploreNepal";
import TourPackages from "./Domestic";
import NationalParksPage from "./NationalParks";


const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      
      <ChatBox />
      <main className="pt-20  text-center text-xl bg-white">
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
