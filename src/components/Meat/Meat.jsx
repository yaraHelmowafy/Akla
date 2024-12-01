import './meat.css'
import { useEffect , useState } from 'react';

export default function Meat() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: 1,
      img: "assets/1111.jpg",
     
      featured: true,
    },
    {
      id: 2,
      img: "assets/1112.jpg",
      
      featured: true,
    },
    {
      id: 3,
      img: "assets/1113.jpg",
      
      featured: true,
    },
    {
      id: 4,
      img: "assets/1114.jpg",
      
      featured: true,
    },
    {
      id: 5,
      img: "assets/1115.jpg",
      
      featured: true,
    },
    {
      id: 6,
      img: "assets/1116.jpg",
     
      featured: true,
    },
    {
      id: 7,
      img: "assets/1117.jpg",
     
      featured: true,
    },
    {
      id: 8,
      img: "assets/1118.jpg",
      
      featured: true,
    },
    {
      id: 9,
      img: "assets/1119.jpg",
      
      featured: true,
    },
  ];

  return (
    <div className='Meat' id="Meat">
      <h1 className='title'>لحوم و دجاج</h1>
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
