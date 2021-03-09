import "./welcome.css";
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';


export default function Welcome(){


    const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
          <div className="each-slide">
            <div className="picture" style={{'backgroundImage': `url("https://chancen-eg.de/wp-content/uploads/2020/01/HP_Boxelement-WBS.jpg")`}}>
              <span></span>
            </div>
          </div>
          <div className="each-slide">
            <div className="picture" style={{'backgroundImage': `url("https://www.stoodnt.com/blog/wp-content/uploads/2018/10/Learn-coding-online.jpeg")`}}>
              <span></span>
            </div>
          </div>
          <div className="each-slide">
            <div className="picture" style={{'backgroundImage': `url("https://www.webconfs.com/wp-content/uploads/2020/07/12825450d41e4fd6d2482c0920b7fe75.jpg")`}}>
              <span></span>
            </div>
          </div>
        </Slide>
      </div>
    )
}
    return(<div>
        {Slideshow()}
    </div>)
}