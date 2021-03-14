import Loader from '../Loader';

import './welcome.css';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';

export default function Welcome() {
  const images = [
    'https://chancen-eg.de/wp-content/uploads/2020/01/HP_Boxelement-WBS.jpg',
    'https://www.webconfs.com/wp-content/uploads/2020/07/12825450d41e4fd6d2482c0920b7fe75.jpg',
    'https://i.picsum.photos/id/1/5616/3744.jpg?hmac=kKHwwU8s46oNettHKwJ24qOlIAsWN9d2TtsXDoCWWsQ',
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
