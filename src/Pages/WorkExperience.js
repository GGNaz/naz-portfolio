import React from "react";

function WorkExperience() {
  let dotsnum = [10];

  console.log("dotsnum", dotsnum);
  let dots = [];

  // const desingDots = () => {

  for (let x = 0; x < 10; x++) {
    // for (let y = 0; y < 10; y++) {
    //   if (dots?.length - 1 === x) {
    //     return dots[x].push(x);
    //   } else {
    dots.push(x);
    //   }
    // }
  }
  let mapdots = [...dots];
  console.log("mapdots", mapdots);
  // };
  // desingDots();

  return (
    <div className="flex flex-col p-5 ">
      <div className="absolute p-5 top-5 right-5 text-white">
        {/* {
          mapdots.map(() => (

          ))
        } */}
      </div>
      <div className="flex justify-center text-3xl font-bold text-white">
        Work Experience
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="flex justify-center items-center p-5">
          <div className="bg-darkblack w-full md:w-[40vw] min-h-[70vh] rounded-2xl  shadow-lg p-7 flex flex-col gap-5">
            <div className="flex flex-col text-white font-bold text-3xl">
              <div>JUNIOR DEVELOPER</div>
              <div>Xypher IT Solutions Inc.</div>
            </div>
            <div className="text-ligthgray">October 2021 - Current</div>
            <div className="p-5">
              <ul className="list-disc text-white text-lg space-y-4">
                <li>Creating user interface (UI) based on figma design.</li>
                <li>
                  Apply web development frameworks such as Tailwind and Material
                  UI.
                </li>
                <li>Apply web socket.</li>
                <li>Use npm packages for ReactJS.</li>
                <li>Build reusable components or functions.</li>
                <li>Integrated API's such as Google Map API's.</li>
                <li>Apply AWS S3 for uploading files or images.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center p-5">
          <div className=" w-full md:w-[40vw] min-h-[70vh]   p-7 flex flex-col gap-5">
            <div className="flex flex-col text-[#666766] font-bold text-3xl">
              <div>WEB DEVELOPER - INTERNSHIP</div>
              <div>
                Philippine Center for Postharvest Development and Mechanization
                (PhilMech)
              </div>
            </div>
            <div className="text-[#666766]">February 2019 - May 2019</div>
            <div className="p-5">
              <ul className="list-disc text-[#666766] text-lg space-y-4">
                <li>Learn how to design in a kiosk machine.</li>
                <li>Modify web templates.</li>
                <li>
                  Layout web based Personal Data Sheet(PDS) using Bootstrap
                  Grid.
                </li>
                <li>Layout web based certificates.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
