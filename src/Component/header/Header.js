
import React from 'react'
import './header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
        <div className='header_content'>
            <h2>نقل عفشك بأمان وسرعة معنا – خبرة، احترافية، وخدمة مميزة تغطي كل أنحاء السعودية</h2>
            <p>

 
"من الباب إلى الباب، نضمن لك نقل عفش آمن وسريع في جميع أنحاء السعودية. خبرتنا تفوق التوقعات، وخدمتنا تُحدث الفرق!"


            </p>

            <Link to="services" smooth={true} duration={500}>
        <button>اكتشف خدماتنا</button>
      </Link>

        </div>
      
    </div>
  )
}

export default Header
