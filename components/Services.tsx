import React, { ReactNode } from "react";
import StartIcon from "../public/assets/start-icon.png";
import FillUpIcon from "../public/assets/fillup-icon.png";
import BadgeIcon from "../public/assets/badge-icon.png";
import Image, { StaticImageData } from "next/image";

type Props = {};

type ServiceItems = {
  url: StaticImageData;
  title: string;
  description: string;
};

const serviceItems: ServiceItems[] = [
  {
    url: StartIcon,
    title: "Start Now",
    description: "Choose a game that you want to top up",
  },
  {
    url: FillUpIcon,
    title: "Fill Up",
    description: "Choose one from the various amount",
  },
  {
    url: BadgeIcon,
    title: "Be A Winner",
    description: "Ready to become the best player",
  },
];

function Services({}: Props) {
  return (
    <section className="flex flex-col items-center">
      <h2>Its Really Easy to Become One Step Ahead against Other Player</h2>
      <div className="flex flex-col justify-between md:space-x-8 md:flex-row">
        {serviceItems
          ? serviceItems.map(({ url, title, description },i) => (
              <div key={i} className="space-y-2 md:text-center my-8 p-6 shadow-md">
                <div className="relative">
                  <Image className="md:mx-auto" src={url} alt={description} />
                </div>
                <h3>{title}</h3>
                <p className="text-indigo-950 font-semibold">{description}</p>
              </div>
            ))
          : null}
      </div>
    </section>
  );
}

export default Services;
