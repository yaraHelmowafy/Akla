import './menu.css'
import { Link } from 'react-router-dom';
export default function Menu({ menuOpen, setMenuOpen}) {
  return (
    <div className={'menu ' + (menuOpen && "active")}>
       <ul className='ul'>
      
        <li className='li' onClick={()=>setMenuOpen(false)}>
            <a href="#Souces" className='a'>صوصات</a>
           </li>
           
           <li className='li' onClick={()=>setMenuOpen(false)}>
            <a href="#Meat" className='a'>لحوم</a>
           </li>
           <li className='li' onClick={()=>setMenuOpen(false)}>
            <a href="#Meat" className='a'>دجاج</a>
           </li>
          
          
           <li className='li' onClick={()=>setMenuOpen(false)}>
            <a href="#VF" className='a'>خضروات</a>
           </li>
           
           <li className='li' onClick={()=>setMenuOpen(false)}>
            <a href="#VF" className='a'>فواكه</a>
           </li>
           
           <li className='li' onClick={()=>setMenuOpen(false)}>
            <a href="#Fish" className='a'>اسماك</a>
           </li>
           {/* <li className='li' onClick={()=>setMenuOpen(false)}>
            <a href="#contact" className='a'>Servecies</a>
           </li> */}
       </ul>
    </div>
  )
}
