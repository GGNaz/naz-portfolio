import React from "react";
import picture from "../Assets/picture.jpg";
import * as RiIcons from "react-icons/ri";
import * as FiIcons from "react-icons/fi";
function MainPage() {
  const navigationList = [
    {
      label: "experience",
    },
    {
      label: "projects",
    },
    {
      label: "about",
    },
  ];
  return (
    <div className="flex flex-col  p-5 h-screen text-white">
      <div className="flex flex-row gap-2 justify-between ">
        <div className="flex flex-row gap-5 ">
          <div>
            <RiIcons.RiLinkedinFill size={22} />
          </div>
          <div>
            <RiIcons.RiGithubLine size={22} />
          </div>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <FiIcons.FiMail /> <span>Get in touch</span>
        </div>
      </div>
      <div className="flex justify-center items-center  h-screen">
        <div className="flex flex-col gap-3 justify-center items-center">
          <div className=" h-40 w-40 rounded-full border border-ligthgray flex items-center justify-center">
            <div className=" h-40 w-40 rounded-full border border-ligthgray flex items-center justify-center">
              <img
                src={picture}
                alt="mypicture"
                className=" h-32 w-32 rounded-full"
              />
            </div>
          </div>
          <div className="flex flex-row gap-5">
            <div>W E B</div> <div> D E V E L O P E R</div>{" "}
          </div>
          <div className="font-bold text-4xl">NAZER SOMERA</div>
          <div className="flex flex-row gap-5 pt-2 ">
            {navigationList.map(({ label }, index) => (
              <div className="flex flex-row gap-5">
                <button>{label?.toUpperCase()}</button>
                {index <= 1 && <div>|</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="fixed bottom-7 right-7">
        <button className=" p-2 bg-darkgray rounded-md">
          <FiIcons.FiMail />
        </button>
      </div>
    </div>
  );
}

export default MainPage;
