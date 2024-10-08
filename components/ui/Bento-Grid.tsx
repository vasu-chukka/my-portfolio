"use client";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "@/Data/confettie.json";
import Button from "./Button";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] auto-rows-[13rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
}: {
  id: number;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("Chukkavasuyadav@gmail.com");
    setCopied((prev) => !prev);
  };

  return (
    <div
      className={cn(
        "row-span-1 rounded-xl relative overflow-hidden group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-2",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div
        className={`${
          id === 5 && "flex justify-center items-center"
        } h-full mt-5 lg:mt-1`}
      >
        <div className="w-[95%] h-full absolute opacity-80">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div className="-mt-5">
          {id === 5 && (
            <BackgroundGradientAnimation></BackgroundGradientAnimation>
          )}
          <div
            className={cn(
              titleClassName,
              "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
            )}
          >
            {" "}
            <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-5 -mt-3">
              {title}
            </div>
            <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-5">
              {description}
            </div>
            {id === 3 && (
              <div className="relative mt-5 -ml-10 sm:-ml-5 md:-ml-7 ">
                <div className=" w-full h-60 overflow-auto absolute ">
                  <div className=" grid grid-cols-4 ml-5 lg:ml-1 gap-2 ">
                    {[
                      "React.js",
                      "TypeScript",
                      "Taiwind",
                      "HTML 5",
                      "CSS 3",
                      "JavaScript",
                      "Python",
                    ].map((item) => (
                      <span
                        key={item}
                        className="w-20 py-2 lg:py-3  px-3 text-xs opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {id === 5 && (
              <div className="mt-5 relative">
                <div className={`absolute -bottom-5 right-0`}>
                  <Lottie
                    options={{
                      loop: copied,
                      autoplay: copied,
                      animationData,
                      rendererSettings: {
                        preserveAspectRatio: "xMidYMid slice",
                      },
                    }}
                  />
                </div>
                <Button
                  title={copied ? "Email copied" : "copy my Email"}
                  icon={<IoCopyOutline />}
                  otherClasses=" !bg-[#161a31}"
                  handleClick={handleCopy}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
