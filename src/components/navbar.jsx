import React, { useState } from "react";
import { Typography } from "@mui/material";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import MenuIcon from "@mui/icons-material/Menu";
import MusicNoteRoundedIcon from "@mui/icons-material/MusicNoteRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import { Instagram, Search, ShoppingBag, Twitter } from "@mui/icons-material";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-navBlack text-white w-full">
      <div className="lg:p-4 md:p-3 p-2 lg:pl-10 lg:pr-10 flex flex-row items-center justify-between">
        <MenuIcon
          className="hover:text-E1C300 cursor-pointer lg:hidden"
          onClick={handleMenuToggle}
        />
        <div className="hidden lg:flex gap-5 items-center">
          <Typography className="font-sans font-bold hover:text-E1C300 hover:underline hover:cursor-pointer">
            brands
            <ExpandMoreRoundedIcon fontSize="sm" />
          </Typography>
          <Typography className="font-sans font-bold hover:text-E1C300 hover:underline hover:cursor-pointer">
            shop
            <ExpandMoreRoundedIcon fontSize="sm" />
          </Typography>
          <Typography className="font-sans font-bold hover:text-E1C300 hover:underline hover:cursor-pointer">
            premium
          </Typography>
          <Typography className="font-sans font-bold hover:text-E1C300 hover:underline hover:cursor-pointer">
            gift cards
          </Typography>
        </div>
        <div>
          <Image className="ml-10" src="/logo.png" width={100} height={100} />
        </div>

        <div className="hidden lg:flex gap-5 items-center">
          <Typography className="font-sans font-bold hover:text-E1C300 hover:underline hover:cursor-pointer">
            become an affiliate
          </Typography>
          <Twitter className="hover:fill-E1C300 hover:cursor-pointer" />
          <MusicNoteRoundedIcon className="hover:fill-E1C300 hover:cursor-pointer" />
          <Instagram className="hover:fill-E1C300 hover:cursor-pointer" />
          <PersonRoundedIcon className="hover:fill-E1C300 hover:cursor-pointer" />
          <Search className="hover:fill-E1C300 hover:cursor-pointer" />
          <ShoppingBag className="hover:fill-E1C300 hover:cursor-pointer" />
        </div>

        <div className="lg:hidden flex gap-1">
          <PersonRoundedIcon className="hover:fill-E1C300 hover:cursor-pointer" />
          <Search className="hover:fill-E1C300 hover:cursor-pointer" />
          <ShoppingBag className="hover:fill-E1C300 hover:cursor-pointer" />
        </div>
      </div>

      {menuOpen && (
        <div className="flex flex-col gap-y-5 mt-3 pl-10 pr-8 pb-10">
          <Typography className="font-sans text-xl font-bold justify-between w-full flex flex-row hover:cursor-pointer">
            brands
            <ArrowForwardIcon fontSize="sm" />
          </Typography>
          <Typography className="font-sans text-xl font-bold justify-between w-full flex flex-row hover:cursor-pointer">
            shop
            <ArrowForwardIcon fontSize="sm" />
          </Typography>
          <Typography className="font-sans text-xl font-bold hover:cursor-pointer">
            premium
          </Typography>
          <Typography className="font-sans text-xl font-bold hover:cursor-pointer">
            gift cards
          </Typography>
          <Typography className="font-sans text-xl font-bold hover:cursor-pointer">
            become an affiliate
          </Typography>

          <div className="flex flex-row gap-x-3">
            <Twitter className="hover:fill-E1C300 hover:cursor-pointer" />
            <MusicNoteRoundedIcon className="hover:fill-E1C300 hover:cursor-pointer" />
            <Instagram className="hover:fill-E1C300 hover:cursor-pointer" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
