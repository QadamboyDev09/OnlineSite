import React from "react";
import Navbar from "../companents/Navbar";
import { Route, Routes } from "react-router-dom";
import Pages1 from "../Pages/Pages1";
import Pages2 from "../Pages/Pages2";
import Pages3 from "../Pages/Pages3";
import Pages4 from "../Pages/Pages4";
import Pages5 from "../Pages/Pages5";
import Footer from "../companents/Footer";
import CardDN from "../Pages/DinamikPage/CardDn";
import MentorSWDN from "../Pages/DinamikPage/MentorSWDN";

const Router = () => {
  return <div>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Pages1/>}/>
    <Route path='/pages2' element={<Pages2/>}/>
    <Route path='/pages3' element={<Pages3/>}/>
    <Route path='/pages4' element={<Pages4/>}/>
    <Route path='/pages5' element={<Pages5/>}/>
    <Route path='/Courses/:id' element={<CardDN/>}/>
    <Route path='/mentorSV/:id' element={<MentorSWDN/>}/>


    </Routes>
    <Footer/>
  </div>;
};

export default Router;
