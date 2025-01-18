import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { muneList } from '../../assets/assets';
import './CategoryDetails.css';

function CategoryDetails() {
  const { categoryName } = useParams();

  const category = muneList.find(item => item.menue_name === categoryName);

  useEffect(() => {
    // ضبط موضع الصفحة إلى الأعلى عند التحميل
    window.scrollTo(0, 0);
  }, []);

  if (!category) {
    return <div>الفئة غير موجودة</div>;
  }

  const handleOrderClick = () => {
    const phoneNumber = '+966546914681';
    const message = `مرحبًا، أنا مهتم بطلب خدمة: ${category.menue_name}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="category-details">
      <img src={category.mune_image} alt={category.menue_name} className="full-width-image" />
      <h1>{category.menue_name}</h1>
      <p className="description">{category.description}</p>
      <div className="article" dangerouslySetInnerHTML={{ __html: category.article }} />
      <button className="order-button" onClick={handleOrderClick}>اطلب الخدمة</button>
    </div>
  );
}

export default CategoryDetails;