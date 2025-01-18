import React from 'react'
import aboutImage from './about.jpg'
import './about.css'

function About() {
  const openWhatsApp = () => {
    const phoneNumber = '+966546914681'; // الرقم السعودي بتنسيق دولي
    const message = 'مرحبًا، أنا مهتم بالخدمات التي تقدمونها'; // رسالة افتراضية
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank'); // فتح الرابط في نافذة جديدة
  };
  return (
    <div className='about'>
        <h1>حول الشركه</h1>
      <div className='about_content'>
        <div className='abput_img'>
            <img src={aboutImage} />
        </div>
        {/* desc */}
        <div className='desc'>
            <h5>شركه نقل عفش بالمملكه العربيه السعودية</h5>
            <h2>ليه تختار شركتنا </h2>
            <p>تعد شركة   تيما اكسبريسs الخيار الأمثل لنقل عفشك في جميع أنحاء المملكة، فهي تقدم خدمات النقل والتغليف والتخزين باستخدام أحدث التقنيات وأفضل المواد. وذلك لضمان سلامة أثاثك، وأيضًا فك وتركيب العفش باحترافية عالية.</p>
            <button onClick={openWhatsApp}>تواصل معانا </button>
        </div>
      </div>
    </div>
  )
}

export default About
