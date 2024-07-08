import  { useState } from 'react';
import '../style/Portfolio.css'; // Import your CSS file for styling if needed
import img1 from '../assets/images/i1.jpeg';
function Portfolio() {
    const [currentSlide] = useState(0);// const [currentSlide, setCurrentSlide] = useState(0);
    const portfolioItems = [
        { image: img1, description: 'ArtHive' ,details:'A platform for artists to showcase their work and connect with art lovers.'},
        { image: img1, description: 'Project2 ',details:'A platform for artists to showcase their work and connect with art lovers.' },
        { image: img1, description: 'Project 3 Description' ,details:'A platform for artists to showcase their work and connect with art lovers.'},
        { image: img1, description: 'Project 4 Description',details:'A platform for artists to showcase their work and connect with art lovers.' },
        { image: img1, description: 'Project 5 Description' ,details:'A platform for artists to showcase their work and connect with art lovers.'},
        { image: img1, description: 'Project 6 Description' ,details:'A platform for artists to showcase their work and connect with art lovers.'},
        { image: img1, description: 'Project 7 Description',details:'A platform for artists to showcase their work and connect with art lovers.' },
        { image: img1, description: 'Project 8 Description',details:'A platform for artists to showcase their work and connect with art lovers.' },
        // Add more items as needed
    ];

    // const goToPreviousSlide = () => {
    //     setCurrentSlide((prevSlide) => (prevSlide > 0 ? prevSlide - 1 : portfolioItems.length - 1));
    // };

    // const goToNextSlide = () => {
    //     setCurrentSlide((prevSlide) => (prevSlide < portfolioItems.length - 1 ? prevSlide + 1 : 0));
    // };

    return (
        <div className="portfolio-container">
            <div className="portfolio-label">
                PORTOFOLIO
            </div>
            <div className="portfolio-description">
                Some of our best work, transforming <br />
                ideas into reality.
            </div>
            <div className="portfolio-items">
                {portfolioItems.map((item, index) => (
                    <div key={index} className={`portfolio-item ${index === currentSlide ? 'active' : ''}`}>
                        <div className="item-container">
                            <img src={item.image} alt={`Project ${index + 1}`} className="project-image" />
                            <div className="item-description">
                                <div className="item-title">{item.description}</div>
                            </div>
                            <div className="item-details">
                                <div className="item-title">{item.details}</div>
                            </div>
                            <div className='button-container'>
                            <button className="demo-button">Demo</button>
                            </div>
                            
                        </div>
                    </div>
                ))}
            </div>
            {/* <div className="navigation-buttons">
                <div className="arrow left" onClick={goToPreviousSlide}>
                    &#8249;
                </div>
                <div className="arrow right" onClick={goToNextSlide}>
                    &#8250;
                </div>
            </div> */}
        </div>
    );
}

export default Portfolio;
