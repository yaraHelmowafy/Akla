import './topbar1.css';

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';

export default function Topbar1({ menuOpen, setMenuOpen, barOpen, setBarOpen }) {
  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo'>
            <span className='logo1'>Akala Khafefa</span>
          </a>
          <div className='itemsection'>
            <div className="itemContainer">
              <a href="https://maps.app.goo.gl/7fKbvtq9o3LJZibL8" className="icon-link">
                <div className="rounded-icon">
                  <FmdGoodOutlinedIcon className='icon' />
                </div>
              </a>
            </div>
            <div className="itemContainer">
              <a href="https://www.facebook.com/share/1AuM3diuZa/" className="icon-link">
                <div className="rounded-icon">
                  <FacebookOutlinedIcon className='icon' />
                </div>
              </a>
            </div>
            <div className="itemContainer">
              <a href="https://www.instagram.com/akla_5fefa?igsh=b2xqb3NzYjBpOXZx" className="icon-link">
                <div className="rounded-icon">
                  <InstagramIcon className='icon' />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => {
            setMenuOpen(!menuOpen);
            setBarOpen(!barOpen);
          }}>
            <span id='spanright' className='line1'></span>
            <span id='spanright' className='line2'></span>
            <span id='spanright' className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  );
}