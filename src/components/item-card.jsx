import { useState } from "react";
import Slider from "react-slick";
import { cardData } from "@/data/card-data";
import { Box, Typography } from "@mui/material";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ItemCard = () => {
  const [sliderSettings] = useState({
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  });

  return (
    <Slider {...sliderSettings} className="m-10">
      {cardData.map((item, index) => (
        <div key={index} className="p-2">
          <Box
            className="w-full h-32"
            style={{
              borderRadius: "5rem 1.5rem 1.5rem 5rem",
              backgroundColor: `rgb(${item.color})`,
            }}
          >
            <div className="p-2 pt-4 flex justify-between items-center rounded-full border-black">
              <img
                src={item.img}
                className="w-24 h-24 rounded-full"
                alt={item.title}
              />
              <div className="flex flex-col p-2 gap-y-4 text-white items-end">
                <h4 className="font-bold text-lg font-qualy">{item.title}</h4>
                <Typography className="underline cursor-pointer">
                  shop now
                </Typography>
              </div>
            </div>
          </Box>
        </div>
      ))}
    </Slider>
  );
};

export default ItemCard;
