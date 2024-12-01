import './souces.css'
import { useEffect , useState } from 'react';

export default function Souces() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: 1,
      img: "assets/1.jpg",
     
      featured: true,
    },
    {
      id: 2,
      img: "assets/2.jpg",
      
      featured: true,
    },
    {
      id: 3,
      img: "assets/3.jpg",
      
      featured: true,
    },
    {
      id: 4,
      img: "assets/4.jpg",
      
      featured: true,
    },
    {
      id: 5,
      img: "assets/5.jpg",
      
      featured: true,
    },
    {
      id: 6,
      img: "assets/6.jpg",
     
      featured: true,
    },
    {
      id: 7,
      img: "assets/7.jpg",
     
      featured: true,
    },
    {
      id: 8,
      img: "assets/8.jpg",
      
      featured: true,
    },
    {
      id: 9,
      img: "assets/9.jpg",
      
      featured: true,
    },
  ];

  return (
    <div className='Souces' id="Souces">
      <h1 className='title'>صوصات</h1>
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
