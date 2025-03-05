import React,{useState,useEffect} from 'react'
import service1 from './images/service-1.png';
const Service = () => {
      const [currentIndex, setCurrentIndex] = useState(0);
      const [visibleCards, setVisibleCards] = useState(4);
   
      const cards = [
          {
              image: service1, title: 'Digital Marketing', description: 'Google Ad campaigns are an effective way to target receptive audience they get you.Make sure your brand assets contribute to your companys personality and reputation.'
          },
          {
              image: service1, title: 'Web Service', description: 'Google Ad campaigns are an effective way to target receptive audience they get you.Make sure your brand assets contribute to your companys personality and reputation.'
          },
          {
              image: service1, title: 'Custom Software', description: 'Google Ad campaigns are an effective way to target receptive audience they get you.Make sure your brand assets contribute to your companys personality and reputation.'
          },
          {
              image: service1, title: 'Email Marketing', description: 'Google Ad campaigns are an effective way to target receptive audience they get you.Make sure your brand assets contribute to your companys personality and reputation.'
          },
          {
              image: service1, title: 'Pay Per Click', description: 'Google Ad campaigns are an effective way to target receptive audience they get you.Make sure your brand assets contribute to your companys personality and reputation.'
          },
          {
              image: service1, title: 'Branding', description: 'Google Ad campaigns are an effective way to target receptive audience they get you.Make sure your brand assets contribute to your companys personality and reputation.'
          },
          {
              image: service1, title: 'Content Marketing', description: 'Google Ad campaigns are an effective way to target receptive audience they get you.Make sure your brand assets contribute to your companys personality and reputation.'
          },
          { image: service1, title: 'WhatsApp Marketing', description: 'Google Ad campaigns are an effective way to target receptive audience they get you.Make sure your brand assets contribute to your companys personality and reputation.' },
      ];
   
      useEffect(() => {
          const updateVisibleCards = () => {
              setVisibleCards(window.innerWidth <= 768 ? 1 : 4);
          };
   
          window.addEventListener('resize', updateVisibleCards);
          updateVisibleCards();
   
          return () => window.removeEventListener('resize', updateVisibleCards);
      }, []);
   
      const handlePrev = () => {
          setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - visibleCards : prevIndex - 1));
      };
   
      const handleNext = () => {
          setCurrentIndex((prevIndex) => (prevIndex === cards.length - visibleCards ? 0 : prevIndex + 1));
      };
  return (
          <div className="carousel-container">
                <button className="carousel-button prev" onClick={handlePrev}>&lt;</button>
                <div className="carousel">
                    {cards.slice(currentIndex, currentIndex + visibleCards).map((card, index) => (
                        <div className="card" key={index}>
                            <img src={card.image} alt={card.title} className="card-image-circle" />
                            <div className="card-content">
                                <h3>{card.title}</h3>
                                <p>{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="carousel-button next" onClick={handleNext}>&gt;</button>
            </div>
  )
}

export default Service