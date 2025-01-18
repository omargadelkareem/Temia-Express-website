
import { muneList } from '../../assets/assets';
import './explore.css';
import { useSpring, animated } from 'react-spring';
import { useNavigate } from 'react-router-dom';

function ExploreMune({ category, setCategory }) {
  const navigate = useNavigate();

  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 300,
  });

  const slideIn = useSpring({
    from: { opacity: 0, transform: 'translateX(-20px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    delay: 500,
  });

  const handleCategoryClick = (categoryName) => {
    setCategory(categoryName);
    navigate(`/category/${categoryName}`);
  };

  return (
    <div className='Explore_Mune'>
      <animated.h1 style={fadeIn}>اكتشف خدماتنا</animated.h1>
      <animated.p style={fadeIn} className='Explore_mune_text'>
        "نقل عفشك أصبح أسهل! نقدم لك حلولًا متكاملة لنقل العفش بكل أمان ودقة في جميع أنحاء السعودية. وثِق بنا لرحلة نقل سلسة وخالية من المتاعب."
      </animated.p>

      <animated.div style={slideIn} className='explore_mune_list'>
        {muneList.map((item, index) => {
          return (
            <div
              onClick={() => handleCategoryClick(item.menue_name)}
              key={index}
              className={`explore_item ${category === item.menue_name ? 'active' : ''}`}
            >
              <img src={item.mune_image} alt={item.menue_name} />
              <div className="overlay">
                <p>{item.menue_name}</p>
              </div>
            </div>
          );
        })}
      </animated.div>
    </div>
  );
}

export default ExploreMune;