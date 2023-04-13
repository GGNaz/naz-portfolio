import React from "react";
import picture from "../Assets/picture.jpg";
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
          <div>in</div>
          <div>gitlab</div>
        </div>
        <div>get in touch</div>
      </div>
      <div className="flex justify-center items-center  h-screen">
        <div className="flex flex-col gap-3 justify-center items-center">
          <img
            src={picture}
            alt="mypicture"
            className=" h-32 w-32 rounded-full"
          />
          <div className="flex flex-row gap-5">
            <div>W E B</div> <div> D E V E L O P E R</div>{" "}
          </div>
          <div className="font-bold text-4xl">NAZER SOMERA</div>
          <div className="flex flex-row gap-5 pt-2">
            {navigationList.map(({ label }) => (
              <div>
                <button>{label?.toUpperCase()}</button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-7 right-7">
        <button className=" p-2 bg-darkgray rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default MainPage;
