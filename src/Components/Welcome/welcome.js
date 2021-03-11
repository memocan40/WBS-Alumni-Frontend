import "./welcome.css";
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';


export default function Welcome(){

//https://secure.meetupstatic.com/photos/event/d/8/b/b/highres_493975483.jpeg


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
            <div className="picture" style={{'backgroundImage': `url("https://secure.meetupstatic.com/photos/event/d/8/b/b/highres_493975483.jpeg")`}}>
              <span></span>
            </div>
          </div>

          <div className="each-slide">
            <div className="picture" style={{'backgroundImage': `url("https://miro.medium.com/max/6984/1*KXzdwIyrB5UIOKOmKddKSQ.jpeg")`}}> 
              <span></span>
            </div>
          </div>

      
          <div className="each-slide">
            <div className="picture" style={{'backgroundImage': `url("https://www.wbstraining.de/fileadmin/user_upload/coding-school/wbs-coding-school-wbs-training.jpg")`}}>
              <span></span>
            </div>
          </div>


          <div className="each-slide">
            <div className="picture" style={{'backgroundImage': `url("https://i.ytimg.com/vi/Kgt7iK0rkZY/maxresdefault.jpg")`}}>
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