import './vf.css'
import { useEffect , useState } from 'react';

export default function VF() {
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: 1,
      img: "assets/111.jpg",
     
      featured: true,
    },
    {
      id: 2,
      img: "assets/112.jpg",
      
      featured: true,
    },
    {
      id: 3,
      img: "assets/113.jpg",
      
      featured: true,
    },
    {
      id: 4,
      img: "assets/114.jpg",
      
      featured: true,
    },
    {
      id: 5,
      img: "assets/115.jpg",
      
      featured: true,
    },
    {
      id: 6,
      img: "assets/116.jpg",
     
      featured: true,
    },
    {
      id: 7,
      img: "assets/117.jpg",
     
      featured: true,
    },
    {
      id: 8,
      img: "assets/118.jpg",
      
      featured: true,
    },
    {
      id: 9,
      img: "assets/119.jpg",
      
      featured: true,
    },
  ];

  return (
    <div className='VF' id="VF">
      <h1 className='title'>خضروات و فواكه</h1>
      <div className="slider">
        {data.map((d, index) => (
          <div key={index} className="container">
            <div className={d.featured ? "card featured" : "card"}>
              <div className="top">
                <img className="img user" src={d.img} alt="user" />
              </div>
              <div className="center">
                {d.desc}
              </div>
              <div className="bottom">
                <h3 className="name">{d.name}</h3>
                <h4 className="name2">{d.title}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
