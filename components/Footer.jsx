import { socialMedia } from "@/Data/GridItemsData";
import Button from "../components/ui/Button";
import { IoSend } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 mt-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:chukkavasuyadav@gmail.com" className=" mt-5">
          <Button title="Let's get in touch" icon={<IoSend />} />
        </a>
      </div>

      <div className="flex  md:flex-row items-center justify-between mt-10 mb-10 ">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Vasu Chukka
        </p>
        <div className="flex items-center gap-12 ">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 flex justify-center items-center cursor-pointer"
              style={{ marginRight: "20px" }}
            >
              <a
                href={info.url}
                target="_blank"
                rel="noopener noreferrer"
                className=" z-10 pointer-events-auto"
              >
                <img
                  src={info.img}
                  alt={`${info.name} icon`}
                  width={30}
                  height={30}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
