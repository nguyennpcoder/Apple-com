// src/components/Mac.jsx
import React, { useRef, useEffect } from 'react';
import './Mac.css';

const Mac = () => {
  const videoRef = useRef(null);

  const handleVideoClick = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      const video = videoRef.current;
      const videoTop = video.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      if (videoTop < windowHeight) {
        const scale = Math.max(0.8, 1 - scrollY / 4000);
        const borderRadius = Math.min(50, scrollY / 20);
        video.style.transform = `scale(${scale})`;
        video.style.borderRadius = `${borderRadius}px`;

       
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="mac-page">
      <header className="mac-header">
        <nav className="mac-nav">
          <div className="mac-item">
            <img src="https://www.apple.com/v/mac/home/ca/images/chapternav/macbookair_light__dfypt7o3xfgy_large.svg" alt="MacBook Air" />
            MacBook Air <span>New</span>
          </div>
          <div className="mac-item">
            <img src="https://www.apple.com/v/mac/home/ca/images/chapternav/macbook_pro_light__bvnmtmeikj1e_large.svg" alt="MacBook Pro" />
            MacBook Pro
          </div>
          <div className="mac-item">
            <img src="https://www.apple.com/v/mac/home/ca/images/chapternav/imac_light__cx5ex9nbqxme_large.svg" alt="iMac" />
            iMac
          </div>
          <div className="mac-item small">
            <img src="https://www.apple.com/v/mac/home/ca/images/chapternav/mac_mini_light__e7ojhup2ezau_large.svg" alt="Mac mini" />
            Mac mini
          </div>
          <div className="mac-item small">
            <img src="https://www.apple.com/v/mac/home/ca/images/chapternav/mac_studio_light__fcr3455qk0i2_large.svg" alt="Mac Studio" />
            Mac Studio
          </div>
          <div className="mac-item small">
            <img src="https://www.apple.com/v/mac/home/ca/images/chapternav/mac_pro_light__bly2b0ua4seq_large.svg" alt="Mac Pro" />
            Mac Pro
          </div>
          <div className="mac-item">
            <img src="https://www.apple.com/v/mac/home/ca/images/chapternav/mac_compare_light__capy8s4wrbhy_large.svg" alt="Compare" />
            Compare
          </div>
          <div className="mac-item">
            <img src="https://www.apple.com/v/mac/home/ca/images/chapternav/displays_light__d67yrnk0qsa6_large.svg" alt="Displays" />
            Displays
          </div>
          <div className="mac-item">
            <img src="https://www.apple.com/v/mac/home/ca/images/chapternav/mac_accessories_light__esnwbnk4bxqq_large.svg" alt="Accessories" />
            Accessories
          </div>
          <div className="mac-item small">
            <img src="https://www.apple.com/v/mac/home/ca/images/chapternav/mac_os_light__6mb5pqhztcie_large.svg" alt="Sequoia" />
            Sequoia
          </div>
          <div className="mac-item">
            <img src="https://www.apple.com/v/mac/home/ca/images/chapternav/mac_shop_light__f0m72gc7jguq_large.svg" alt="Shop Mac" />
            Shop Mac
          </div>
        </nav>
        <div className="mac-education">
          Buy Mac with education savings: <a href="#">Shop</a>
        </div>
      </header>
      <main className="mac-content">
        <h1>Mac</h1>
        <p>If you can dream it,<br></br> Mac can do it.</p>
      </main>
      <video
        className="mac-video"
        ref={videoRef}
        autoPlay
        muted
        onClick={handleVideoClick}
      >
        <source src="https://www.apple.com/105/media/us/mac/family/2024/60fc0159-4236-4a03-8534-f5ba07e538c5/anim/welcome/xlarge_2x.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Mac;