import React from "react";
import snakeandladder from "../Assets/ProjectsImages/snakeandladder.png";
import taraeat from "../Assets/ProjectsImages/taraeat.jpg";
import remindme from "../Assets/ProjectsImages/remindme.jpg";
function Projects() {
  const projectList = [
    {
      title: "Snake and Ladder",
      desc: " Players roll a die and navigate the board. Landing on a ladder advances a player to a square further up the board, while landing on a snake means they have to go back to aprevious square.",
      image: snakeandladder,
    },
    {
      title: "Tara Eat",
      desc: "Food ordering web application, add to cart, add food on menu list, track order history and chat with delivery rider.",
      image: taraeat,
    },
    {
      title: "Remind Me",
      desc: "A web reminder application that request time and note. Its remind you when the time inserted reached.",
      image: remindme,
    },
  ];
  return (
    <div className="flex flex-col p-10 gap-10 w-full">
      <div className="flex justify-center text-5xl font-bold text-white">
        Personal Projects
      </div>
      <div className="grid rid-cols-2 md:grid-cols-3 gap-10">
        {projectList.map((data, index) => {
          const { title, desc, image } = data ?? {};
          return (
            <div
              className="flex flex-col relative shadow-lg h-[75vh] rounded-3xl "
              key={index}
            >
              <img
                src={image}
                alt={title}
                className="w-full h-full rounded-3xl "
              />
              <div className="z-40 absolute  group/item w-full h-full hover:bg-gradient-to-b from-ligthgray/5 to-bgColor hover:cursor-pointer ">
                <div className="absolute group/edit invisible  group-hover/item:visible z-40  w-full h-full text-white flex flex-col justify-end">
                  <div className="p-5">
                    <div className="flex flex-col justify-start gap-5">
                      <div className="text-2xl font-semibold text-white">
                        {title}
                      </div>
                      <div className="text-justify">{desc}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* <div className="flex flex-col relative bg-white shadow-lg min-h-[60vh] rounded-3xl">
          <img
            src={taraeat}
            alt="taraeat"
            className="w-full h-full min-h-[60vh] rounded-3xl"
          />
          <div className="z-40 absolute  group/item w-full h-full hover:bg-gradient-to-b from-ligthgray/5 to-bgColor hover:cursor-pointer ">
            <div className="absolute group/edit invisible  group-hover/item:visible z-40  w-full h-full text-white flex flex-col justify-end">
              <div className="p-5">
                <div className="flex flex-col justify-start gap-5">
                  <div className="text-2xl font-semibold text-white">
                    Tara Eat
                  </div>
                  <div className="text-justify">
                    Food ordering web application, add to cart, add food on menu
                    list, track order history and chat with delivery rider.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col relative bg-white shadow-lg min-h-[60vh] rounded-3xl">
          <img
            src={remindme}
            alt="remindme"
            className="w-full h-full min-h-[60vh] rounded-3xl"
          />
          <div className="z-40 absolute  group/item w-full h-full hover:bg-gradient-to-b from-ligthgray/5 to-bgColor hover:cursor-pointer ">
            <div className="absolute group/edit invisible  group-hover/item:visible z-40  w-full h-full text-white flex flex-col justify-end">
              <div className="p-5">
                <div className="flex flex-col justify-start gap-5">
                  <div className="text-2xl font-semibold text-white">
                    Remind Me
                  </div>
                  <div className="text-justify">
                    A web reminder application that request time and note. Its
                    remind you when the time inserted reached.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Projects;
