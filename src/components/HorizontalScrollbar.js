import React, { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { Box, Typography } from "@mui/material";

import ExerciseCard from "./ExerciseCard";
import BodyPart from "./BodyPart";

import { MdChevronLeft, MdChevronRight } from "react-icons/md";

function HorizontalScrollbar({ data, bodyParts, setBodyPart, bodyPart, id }) {
  const slideLeft = () =>{
    var slider = document.getElementById('scroll' + id)
    slider.scrollLeft = slider.scrollLeft - 220;
  }
  
  const slideRight = () =>{
    var slider = document.getElementById('scroll' + id)
    slider.scrollLeft = slider.scrollLeft + 220;
  }
  
  return (
    <div className="scroll-container" id="scroll-cont">
      <MdChevronLeft className='arrows' onClick={slideLeft} size={60} />
      <div className="scroll" id={"scroll" + id}>
        <div id="scroll-menu">
          {data.map((item) => (
            <div class='row-item'
            >
              {bodyParts ? (
                <BodyPart
                  item={item}
                  setBodyPart={setBodyPart}
                  bodyPart={bodyPart}
                />
              ) : (
                <ExerciseCard exercise={item} />
              )}
            </div>
          ))}
        </div>
      </div>
      <MdChevronRight className='arrows right' onClick={slideRight} size={60} />
    </div>
  );
}

export default HorizontalScrollbar;
