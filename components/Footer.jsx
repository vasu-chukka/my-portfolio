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
          <Button
            title="Let's get in touch"
            icon={<IoSend />}
            position="right"
          />
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
              className="w-10 h-10 flex justify-center items-center cursor-pointer "
              style={{ marginRight: "20px" }}
            >
              <a
                href={`${
                  info.id === 1
                    ? "https://github.com/vasu-chukka"
                    : info.id === 2
                    ? "https://www.instagram.com/_vasu.yadav/"
                    : "https://linkedin.com/in/vasuchukka"
                }`}
              >
                <img
                  src={info.img}
                  alt="icons"
                  width={30}
                  height={30}
                  className="px5"
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
