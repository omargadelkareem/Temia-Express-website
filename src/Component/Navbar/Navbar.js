import React, { useState } from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa'; // أيقونات القائمة
import { Link } from 'react-router-dom';

function Navbar({ setShowLogin }) {
  const [menue, setMenue] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // حالة فتح القائمة

  // دالة لتبديل حالة القائمة
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='navbar'>
      <h1
      >
        تيما اكسبريس
      </h1>

      {/* زر القائمة (يظهر فقط في الشاشات الصغيرة) */}
      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* القائمة الرئيسية */}
      <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
        <li onClick={() => { setMenue("home"); setIsMenuOpen(false); }} className={menue === "home" ? "active" : ""}>
          <Link to="/">الرئيسية</Link>
        </li>
        <li onClick={() => { setMenue("Mune"); setIsMenuOpen(false); }} className={menue === "Mune" ? "active" : ""}>
          <Link to="/services">خدماتنا</Link>
        </li>
        <li onClick={() => { setMenue("mobile App"); setIsMenuOpen(false); }} className={menue === "mobile App" ? "active" : ""}>
          <Link to="/about">حول الشركه</Link>
        </li>
        <li onClick={() => { setMenue("Contact us"); setIsMenuOpen(false); }} className={menue === "Contact us" ? "active" : ""}>
          <Link to="/slider"> سابقه اعمالنا</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;