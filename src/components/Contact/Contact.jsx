import './contact.css';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="contact-card">
        <div className="leftc">
          <div className="imageContainerc">
            <img className="imgc" src="assets/cc.jpg" alt="Contact" />
          </div>
        </div>
        <div className="rightc">
          <div className="wrapperc">
            <div className="location">
              <FmdGoodOutlinedIcon className="icon" />
              <h2 className="h1">١٣ شارع زين العابدين و مرسي محمود -محرم بك -الاسكندريه</h2>
            </div>
            <div className="phone">
              <a href="tel:01007508928" className="phone-link">
                <h1 className="h2">01007508928</h1>
              </a>
              <WhatsAppIcon className="icon whatsapp-icon" />
            </div>
            <a href="tel:033955595" className="phone-link">
              <h3 className="h3">03 3955595</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
