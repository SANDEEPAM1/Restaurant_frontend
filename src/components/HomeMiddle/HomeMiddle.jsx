import React from "react";
import vedioClip from "../../assets/resturantTour.mp4";
import plate from "../../assets/dsds.jpg"  
import Button from "../Button/Button";

function HomeMiddle() {
    const buttonName ="About Us"
  return (
    <div className="relative flex items-center gap-4 justify-between w-full h-[30%] bg-gradient-to-b from-gray-900 via-gray-700 to-gray-500">
      <div className="mx-auto flex flex-col w-[25%] items-center justify-center py-4">
        <img src={plate} className=""/>
      </div>

      <div className="absolute  top-[20%] w-[25%] right-[60%] rounded-md ">
        <video className="rounded-md " autoPlay loop muted>
          <source src={vedioClip} type="video/mp4" />
        </video>
      </div>
      <div className="w-[40%] flex flex-col gap-9  m-7 ">
        <div className="w-[75%] text-white text-[30px] font-serif font-b4"  >
             <h1>Discover the story behind our passion for great food and service</h1>
        </div>
        <div className="">
            <Button name={buttonName}/>
        </div>
      </div>

    </div>
  );
}

export default HomeMiddle;
