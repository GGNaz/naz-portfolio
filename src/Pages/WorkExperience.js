import React from "react";

function WorkExperience() {
  return (
    <div className="flex flex-col p-5 text-white">
      <div className="flex justify-center text-3xl font-bold">
        Work Experience
      </div>
      <div className="grid grid-cols-2">
        <div className="flex justify-center items-center p-5">
          <div className="bg-darkblack w-[40vw] h-[80vh] rounded-lg  shadow-lg p-7 flex flex-col gap-2">
            <div>Job title</div>
            <div>Job title</div>
          </div>
        </div>
        <div className="flex justify-center items-center p-5">
          <div className="w-[40vw] h-[80vh] rounded-lg text-darkgray p-7 flex flex-col gap-2">
            <div>Job title</div>
            <div>Job title</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
