
import React from 'react';
import './footer.css'; // تأكد من إنشاء ملف CSS لهذا القسم
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer_content'>
        {/* معلومات الموقع */}
        <div className='footer_section'>
          <h3>  تيما اكسبريس</h3>
          <p>نقل عفشك بأمان وسرعة في جميع أنحاء المملكة العربية السعودية. نقدم خدمات نقل وتغليف وتخزين العفش باحترافية عالية.</p>
        </div>

        {/* روابط سريعة */}
        <div className='footer_section'>
          <h4>روابط سريعة</h4>
          <ul>
            <li><Link to='/'>الرئيسية</Link></li>
            <li><Link to='/about'>من نحن</Link></li>
            <li><Link to='/services'>خدماتنا</Link></li>
            <li><Link to='/slider'> سابقه اعمالنا</Link></li>
          </ul>
        </div>

        {/* معلومات الاتصال */}
        <div className='footer_section'>
          <h4>تواصل معنا</h4>
          <ul>
            <li><i className='fas fa-phone'></i> 00966546914681</li>
            <li><i className='fas fa-envelope'></i> info@afshk.com</li>
            <li><i className='fas fa-map-marker-alt'></i> المملكة العربية السعودية، </li>
          </ul>
        </div>

        {/* وسائل التواصل الاجتماعي */}
        <div className='footer_section'>
          <h4>تابعنا</h4>
          <div className='social_icons'>
            <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
             <FaFacebook />
            </a>
            <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
             <FaWhatsapp />
            </a>
            <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
              <FaInstagram />
            </a>
            <a href='https://whatsapp.com' target='_blank' rel='noopener noreferrer'>
              <i className='fab fa-whatsapp'></i>
            </a>
          </div>
        </div>
      </div>

      {/* حقوق النشر */}
      <div className='footer_bottom'>
        <p>© {new Date().getFullYear()}   تيما اكسبريس. جميع الحقوق محفوظة.</p>
       <p>Design by <a  href='https://www.facebook.com/profile.php?id=100015927995666'>Omar Sabry</a></p>
      </div>
    </div>
  );
}

export default Footer;