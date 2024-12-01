
import './intro.css'
import { init } from 'ityped'
import { useEffect ,useRef ,  Component} from 'react'



export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["صوصات", "لحوم", "فراخ", "خضروات", "فواكه", "جبن"]
    });
  }, []);
  return (
    <div className='intro' id="intro">
      <div className='lefti'>
        <div className="imageContaineri">
          <img className='imgi' src='assets/logo.png' alt=''/>
        </div>
      </div>
      <div className='right'>
        <div className="wrapper">
          <h2 className='h2'>كل طلباتك في مكان واحد  </h2>
          <h1 className='h1'> اعمل وجبتك بنفسك</h1>
          <h3 className='h3'> <span className='span' ref={textRef} ></span></h3>
        </div>
        
      </div>
    </div>
  )
}