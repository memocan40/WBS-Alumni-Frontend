import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import {useState} from "react";

import './welcome.css';

export default function Welcome({displaybool}) {
  let [display,setdisplay]=useState({displaybool})
  const images = [
    'https://www.webconfs.com/wp-content/uploads/2020/07/12825450d41e4fd6d2482c0920b7fe75.jpg',
    'https://mlsf03rmjfdn.i.optimole.com/fVWTwdQ.Z_5R~130ed/w:392/h:261/q:90/dpr:2.6/https://www.wbscodingschool.com/files/WBS_CODING_SCHOOL_team.jpg',
    'https://mlsf03rmjfdn.i.optimole.com/fVWTwdQ.Z_5R~130ed/w:412/h:268/q:90/dpr:2.6/https://www.wbscodingschool.com/files/wbs_coding_school_stage.jpg',
    'https://i.picsum.photos/id/4/5616/3744.jpg?hmac=8wIoVTScZoSiagRtRYlNfcd7dYHEf9tGyyEF44ihYFI',
  ];

  const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
          { 
            images.map((each, index) => <div className="each-slide"><img className="slider-img" key={index} src={each} /></div>)
          }
        </Slide>
      </div>
    );
  };

  return (
    <div className="slideshow-wrapper">
      {Slideshow()}
    </div>
  )}
