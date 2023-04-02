import Button from "@/libs/atoms/Button";
import Image from "next/image";
import React from "react";

import BannerImage from "../public/assets/banner_image.png";

type Props = {};

function Hero({}: Props) {
  return (
    <section className="flex flex-col md:flex-row">
      <div className="flex flex-col md:w-1/2">
        <div className="md:space-y-9 space-y-7 my-4">
          <p className="text-gray-600 font-semibold">Hello Gamers,</p>
          <h1>
            Find Your Favourite Games & Get it to Next Level
          </h1>
          <p className=" text-indigo-950 font-semibold">
            Million of gamers count on <span className="font-bold text-lg">Rzrstore.gg</span> every month for
            a seamless <br />
            purchase experience when buying in-game items and currencies.
            <br />
            We provide a lot ways to help you become best player with our
            services.
          </p>
        </div>
        <div className="mt-10 flex flex-col md:flex-row md:space-x-5 md:space-y-0 space-y-5">
          <Button isPrimary={true}>Get Started</Button>
          <Button isPrimary={false}>Learn More</Button>
        </div>
      </div>
      <div className="flex-grow my-4 relative hidden md:block">
        <Image src={BannerImage} alt="Banner Image" height={625} width={625} />
      </div>
    </section>
  );
}

export default Hero;
