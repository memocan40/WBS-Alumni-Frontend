import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import './welcome.css';

export default function Welcome() {
  const images = [
    'https://www.wbs-gruppe.de/fileadmin/user_upload/jobdetails/wbs-gruppe-stellenangebote-coding-school-frau.jpg',
    'https://mlsf03rmjfdn.i.optimole.com/fVWTwdQ.Z_5R~130ed/w:392/h:261/q:90/dpr:2.6/https://www.wbscodingschool.com/files/WBS_CODING_SCHOOL_team.jpg',
    'https://mlsf03rmjfdn.i.optimole.com/fVWTwdQ.Z_5R~130ed/w:412/h:268/q:90/dpr:2.6/https://www.wbscodingschool.com/files/wbs_coding_school_stage.jpg',
    'https://cdn-images-1.medium.com/fit/t/1600/480/1*KXzdwIyrB5UIOKOmKddKSQ.jpeg',
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
