import { Button } from "@mui/material";
import React from "react";

const Banner = () => {
  return (
    <div className="bg-banner1 bg-cover bg-center bg-no-repeat h-[85vh] flex items-center">
      <div className="flex flex-col items-start lg:gap-y-10 md:gap-y-8 gap-y-6 pl-10">
        <h1 className="lg:text-7xl md:text-5xl text-3xl font-extrabold text-white font-sans">
          heritage <br />
          hoodies
        </h1>
        <Button
          variant="contained"
          size="large"
          className="bg-white rounded-full text-navBlack font-semibold hover:bg-navBlack hover:text-white"
          style={{ textTransform: "none" }}
        >
          shop now
        </Button>
      </div>
    </div>
  );
};

export default Banner;
