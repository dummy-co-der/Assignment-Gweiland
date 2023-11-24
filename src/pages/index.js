import React from "react";
import Announcement from "@/components/announcement";
import Navbar from "@/components/navbar";
import Banner from "@/components/banner";
import ItemCard from "@/components/item-card";

const Index = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Banner />
      <ItemCard />
    </>
  );
};

export default Index;
