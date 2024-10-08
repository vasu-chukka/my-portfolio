import React from "react";
import { Spotlight } from "./ui/SpotLight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Button from "./ui/Button";
import { IoSend } from "react-icons/io5";
import { AnimatedModal } from "./ui/ModalButton";
import { BackgroundLines } from "./ui/background-lines";

const Hero = () => {
  return (
    <BackgroundLines>
      <div className="pb-20 pt-36">
        <div>
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
          />
          <Spotlight
            className="-top-40 left-full h-[80vh] w-[50vh]"
            fill="violet"
          />
          <Spotlight className="top-23 left-80 h-[80vh] w-[50vh]" fill="blue" />
        </div>
        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>

        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <TextGenerateEffect
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
              words="Bringing Fresh Perspectives to Software Development"
            />
            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl">
              Hi, I’m <span className=" text-purple">Vasu Chukka</span>, <br />a
              Software Developer, excited to bring fresh energy and creativity
              to the tech world.
            </p>

            <AnimatedModal />
          </div>
        </div>
      </div>
    </BackgroundLines>
  );
};

export default Hero;
