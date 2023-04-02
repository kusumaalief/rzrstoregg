import Image, { StaticImageData } from "next/image";
import React from "react";

import ThumbnailImage1 from "../public/assets/img/Thumbnail-1.png";
import ThumbnailImage2 from "../public/assets/img/Thumbnail-2.png";
import ThumbnailImage3 from "../public/assets/img/Thumbnail-3.png";
import ThumbnailImage4 from "../public/assets/img/Thumbnail-4.png";
import ThumbnailImage5 from "../public/assets/img/Thumbnail-5.png";
import { type } from "os";

type Props = {};

type FeaturedGames = {
  src: StaticImageData;
  gameName: string;
  type: string;
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

function Featured({}: Props) {
  return (
    <section>
      <h2>Our Featured Games in this Year</h2>
      <div className="flex w-fit md:w-full bg-red-500 overflow-scroll md:justify-between my-4">
        {featuredGames ? (
          featuredGames.map(({src,gameName,type})=>(
            <div className="relative h-[288px] w-[240px] overflow-hidden rounded-xl">
              <Image src={src} alt={gameName} width={240}/>
              
            </div>
        ))
        ):null}
      </div>
    </section>
  );
}

export default Featured;
