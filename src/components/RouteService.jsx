import React from "react";
import { Route, Routes } from "react-router-dom";
import Certification from "./Certification";
import Education from "./Education";
import Experience from "./Experience";
import SkillSet from "./SkillSet";
import NotFound from "./NotFound";
import Home from "./Home";
import Contact from "./Contact";
import Navbar from "./Navbar";


const RouteService = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
       <Route path="/Certification" element={<Certification />} />
       <Route path="/Education" element={<Education />} />
       <Route path="/Experience" element={<Experience />} />
       <Route path="/SkillSet" element={<SkillSet/>}/>
       <Route path="/Contact" element={<Contact/>}/>
       <Route path="*" element={<NotFound/>}/>
   </Routes>
   </>
  );
};

export default RouteService;
