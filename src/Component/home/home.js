import React, { useState, useEffect } from 'react';
import Header from '../header/Header';
import ExploreMune from '../ExploreMune/ExploreMune';
import About from '../About/About';

import { Fade, Slide } from 'react-awesome-reveal';
import './home.css';
import WhyChooseUs from '../WhyChoseUs/WhyChoseUs';
import TransportBenefits from '../TransportBenefits/TransportBenefits';
import Slider from '../Slider/Slider';
import { Helmet } from 'react-helmet-async';

function Home() {
  const [category, setCategory] = useState("All");
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
      // ضبط موضع الصفحة إلى الأعلى عند التحميل
      window.scrollTo(0, 0);
    }, []);
    
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // وظيفة فتح واتساب
  const openWhatsApp = () => {
    const phoneNumber = '+966546914681'; // الرقم السعودي بتنسيق دولي
    const message = 'مرحبًا، أنا مهتم بالخدمة التي تقدمونها';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // وظيفة الاتصال بالهاتف
  const callPhone = () => {
    const phoneNumber = '+966546914681'; // الرقم السعودي بتنسيق دولي
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className='home'>
      <Helmet>
        <title>شركه نقل عفش في المنطقه الجنوبيه</title>
        <meta name='description' content='شركه نقل عفش في المنطقه الجنوبيه| شركه نقل عفش في السعوديه | شركه نقل عفش بخميس مشيط' />
        <meta name='keywords' content='شركه نقل عفش في المنطقه الجنوبيه, شركه نقل عفش في السعوديه, شركه نقل عفش بخميس مشيط' />
      </Helmet>
      {showSplash ? (
        <div className="splash-screen">
          <h1>   تيما اكسبريس مرحبا بك </h1>
        </div>
      ) : (
        <>
          {/* Header مع انيميشن Fade */}
          <Fade triggerOnce duration={1500}>
            <Header />
          </Fade>

            {/* About مع انيميشن Fade */}
            <Fade triggerOnce duration={1500}>
            <About />
          </Fade>

          {/* ExploreMune مع انيميشن Slide */}
          <Slide direction="up" triggerOnce duration={1500}>
            <ExploreMune category={category} setCategory={setCategory} />
          </Slide>

           {/* WhyChooseUs مع انيميشن Fade */}
           <Fade triggerOnce duration={1500}>
            <WhyChooseUs />
          </Fade>

          <Fade triggerOnce duration={1500}>
            <TransportBenefits />
          </Fade>
         

          {/* Contact مع انيميشن Slide */}
          <Slide direction="up" triggerOnce duration={1500}>
           <Slider />
          </Slide>

          {/* زر الواتساب على اليمين */}
          <button className="whatsapp-button" onClick={openWhatsApp}>
            <img src="https://cdn-icons-png.flaticon.com/512/3670/3670051.png" alt="WhatsApp" />
          </button>

          {/* زر الهاتف على اليسار */}
          <button className="phone-button" onClick={callPhone}>
            <img src="https://cdn-icons-png.flaticon.com/512/126/126341.png" alt="Phone" />
          </button>
        </>
      )}
    </div>
  );
}

export default Home;