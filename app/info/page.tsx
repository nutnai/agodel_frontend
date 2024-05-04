"use client";
import React, { useState } from "react";
import Header from "../components/header";
import YellowBox from "../components/yellowbox";
import Footer from "../components/footer";
import Placesearch from "@/app/components/placeSearch";
import SidebarCustomer from "../components/sidebarcustomer";
import SidebarOwner from "../components/sidebarOwner";
import ReservedButton from "../components/reservebutton";
import HeaderLoggedIn from "../components/headerLoggedIn";
const Home = () => {
  // async function test(){
  //   const res = await fetch('picked-lab-guided.ngrok-free.app/user/1');
  //   console.log(res.body);
  // }
  return (
    <div>
      <HeaderLoggedIn/>
      <div className="min-h-screen">
        {localStorage.getItem("role") === "customer" && <SidebarCustomer />}
        {localStorage.getItem("role") === "owner" && <SidebarOwner   />}
        
      </div>
      
    </div>
  );
};

export default Home;