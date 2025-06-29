
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Nav pages/Navbar";
import Home from "./Nav pages/Home";
import Destinations from "./Nav pages/Destination";
import Tours from "./Nav pages/Tours";
import Blog from "./Nav pages/Blog";
import Contact from "./Nav pages/Contact";
import AboutUsPage from "./Nav pages/About";
import ChatBox from "./componentes/Chatbox";
import KoreaTourPage from "./Nav pages/korea";
import Explore from "./pages/Explore";
import Form from "./componentes/Form";
import Footer from "./Nav pages/Footer";
import ExploreNepal from "./pages/ExploreNepal";
import TourPackages from "./Nav pages/Domestic";
import NationalParksPage from "./pages/NationalParks";
import Explorektm from "./pages/Explorektm";
import InternationalTours from "./Nav pages/International";


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
          <Route path="international" element={<InternationalTours/>}/>
          <Route path="explorektm" element={<Explorektm/>}/>
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
