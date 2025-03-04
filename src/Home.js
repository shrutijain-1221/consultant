import React, { useState, useEffect } from 'react';
import './Section.css';
import './Home.css';
import Section from './Section';
import service1 from './images/service-1.png';
import illastration1 from './images/illastration-1.png';
 
const Home = () => {
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
        <div>
            <Section />
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
            <div className="illustration-section">
                <div className="text-content">
                    <p className='heading'><b>There are many agencies</b> but<br /> why choose us?</p>
                    <p>Advertising a business online includes more than assembling an awesome site. Having the most well-planned structure for you.</p>
                    <div className="feature">
                        <img src={service1} alt="Best Performance" className="feature-image" />
                        <div>
                            <h3>Best Performance</h3>
                            <p>Audits help both you and us. You get a difference report and we get an insight on stats that lead us.</p>
                        </div>
                    </div>
                    <div className="feature">
                        <img src={service1} alt="Super Support" className="feature-image" />
                        <div>
                            <h3>Super Support!</h3>
                            <p>You will be getting regular review calls from us. We care for your brand more than you.</p>
                        </div>
                    </div>
                </div>
                <img src={illastration1} alt="Illustration" className="illustration-image" />
            </div>
            <div className="stats-section">
                <h2>Achieving Remarkable Results with Years of Experience</h2>
                <p>Leveraging our years of experience to deliver exceptional results and drive lasting growth for your brand</p>
                <p>With extensive experience conducting in-depth brand research, we craft proven, tailored strategies that drive success for our clients.</p>
                <div className="stats">
                    <div className="stat">
                        <div className="stat-number" style={{ color: '#ff007f' }}>197+</div>
                        <div className="stat-label">Happy Clients</div>
                    </div>
                    <div className="stat">
                        <div className="stat-number" style={{ color: '#ff9900' }}>36+</div>
                        <div className="stat-label">Expert Team</div>
                    </div>
                    <div className="stat">
                        <div className="stat-number" style={{ color: '#6600cc' }}>15+</div>
                        <div className="stat-label">Awards Winner</div>
                    </div>
                    <div className="stat">
                        <div className="stat-number" style={{ color: '#00cc00' }}>230+</div>
                        <div className="stat-label">Positive Reviews</div>
 
                    </div>
                </div>
            </div>
        </div>
    );
};
 
export default Home;