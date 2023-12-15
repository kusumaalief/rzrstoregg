import Image, { StaticImageData } from "next/image";
import React, { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Scrollbar, A11y } from "swiper";

import ThumbnailImage1 from "../public/assets/img/Thumbnail-1.png";
import ThumbnailImage2 from "../public/assets/img/Thumbnail-2.png";
import ThumbnailImage3 from "../public/assets/img/Thumbnail-3.png";
import ThumbnailImage4 from "../public/assets/img/Thumbnail-4.png";
import ThumbnailImage5 from "../public/assets/img/Thumbnail-5.png";
import { type } from "os";

import "swiper/css";

type Props = {};

type FeaturedGames = {
  src: StaticImageData;
  gameName: string;
  type: string;
};

type Achievments = {
  name: string;
  value: string;
};

const featuredGames: FeaturedGames[] = [
  {
    src: ThumbnailImage1,
    gameName: "Halo",
    type: "PC",
  },
  {
    src: ThumbnailImage2,
    gameName: "Call of Duty : Mobile",
    type: "Mobile",
  },
  {
    src: ThumbnailImage3,
    gameName: "Dota 2",
    type: "PC",
  },
  {
    src: ThumbnailImage4,
    gameName: "Clash of Clans",
    type: "Mobile",
  },
  {
    src: ThumbnailImage5,
    gameName: "Mobile Legends",
    type: "Mobile",
  },
];

const achievments: Achievments[] = [
  {
    name: "Player Top Up",
    value: "320K",
  },
  {
    name: "Games Available",
    value: "80",
  },
  {
    name: "Player Satisfaction",
    value: "99.9%",
  },
  {
    name: "Rating Worldwide",
    value: "4.76",
  },
];

function Featured({}: Props) {
  const [slideCount, setSlideCount] = useState(2);

  useEffect(() => {
    if (window.innerWidth < 620) {
      setSlideCount(2);
    }

    if (window.innerWidth > 620 && window.innerWidth < 880) {
      setSlideCount(3);
    }

    if (window.innerWidth > 880) {
      setSlideCount(5);
    }

    const handleWindowResize = () => {
      // setScreenWidth()
      if (window.innerWidth < 620) {
        setSlideCount(2);
      }

      if (window.innerWidth > 620 && window.innerWidth < 880) {
        setSlideCount(3);
      }

      if (window.innerWidth > 880) {
        setSlideCount(5);
      }

      console.log(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <section>
      <h2>Our Featured Games in this Year</h2>
      <div className="py-6">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={slideCount}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {featuredGames
            ? featuredGames.map(({ src, gameName, type }, i) => (
                <SwiperSlide key={i}>
                  <div className="relative">
                    <Image
                      className="h-[340px] object-cover"
                      src={src}
                      alt={gameName}
                    />
                  </div>
                </SwiperSlide>
              ))
            : null}
        </Swiper>
      </div>
      <div className="flex py-6 mx-5 w-full justify-evenly">
        {achievments &&
          achievments.map(({ name, value },i) => (
            <div key={i}>
              <h2>{value}</h2>
              <p className="text-slate-500">{name}</p>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Featured;
