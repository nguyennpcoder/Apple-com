// src/pages/Mac/Mac.jsx
import React, { useRef, useEffect, useState } from 'react';
import './Mac.css';
import { LeftOutlined, RightOutlined, PlusOutlined, UpOutlined, DownOutlined } from '@ant-design/icons';
import videoMac from './img/videoMac.mp4';
import mac1 from './img/mac_1.jpg';
import mac2 from './img/mac_2.jpg';
import mac3 from './img/mac_3.jpg';
import mac4 from './img/mac_4.jpg';
import mac5 from './img/mac_5.jpg';
import mac6 from './img/mac_6.jpg';
import mac7 from './img/mac_7.jpg';
import help_me_choose from './img/help_me_choose.jpg';
import product1 from './img/product1.png';
import product2 from './img/product2.png';
import chipproduct1 from './img/chipproduct1.png';
import chipproduct2 from './img/chipproduct2.png';
import icon_apple_card from './img/icon_apple_card.png';
import icon_apple_trade_in from './img/icon_trade.png';
import icon_customize_mac from './img/icon_customize.png';
import icon_delivery_pickup from './img/icon_deliver.png';
import icon_specialist from './img/icon_specialist.png';
import icon_personal_setup from './img/icon_person.png';
import icon_shopping_experience from './img/icon_asa__urbsp.png';
import world_mac_iphone from './img/world_mac_iphone.jpg';
import world_mac_iphone1 from './img/world_mac_iphone1.jpg';
import world_mac_iphone2 from './img/world_mac_iphone2.jpg';
import Macessentials from './img/Macessentials.jpg';
import Macessentials1 from './img/Macessentials1.jpg';

const Mac = () => {
  
  const infoSectionRef = useRef(null);
  const cardSectionRef = useRef(null);
  const videoContainerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const handleVideoClick = () => {
    const video = videoContainerRef.current.querySelector('video');
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  const scrollLeft = () => {
    infoSectionRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    cardSectionRef.current.scrollBy({ left: -350, behavior: 'smooth' });
  };

  const scrollRight = () => {
    infoSectionRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    cardSectionRef.current.scrollBy({ left: 350, behavior: 'smooth' });
  };

  
  const [activeIndex, setActiveIndex] = useState(0); // Default to the first section

  // const toggleSection = (index) => {
  //   setActiveIndex(activeIndex === index ? null : index); //click đóng tabs được 
  // };
  const toggleSection = (index) => {
    setActiveIndex(index); // ko đóng tab được 
  };


  const getImage = () => {
    switch (activeIndex) {
      case 0:
        return world_mac_iphone;
      case 1:
        return world_mac_iphone1;
      case 2:
        return world_mac_iphone2;
      default:
        return world_mac_iphone;
    }
  };
  useEffect(() => {
    const video = videoContainerRef.current.querySelector('video');
  
    const handleVideoEnd = () => {
      video.currentTime = 0;
      video.play();
    };
  
    const handleScroll = () => {
      const videoContainer = videoContainerRef.current;
      if (videoContainer) {
        const videoTop = videoContainer.getBoundingClientRect().top;
        const videoBottom = videoContainer.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;
  
        if (videoTop < windowHeight) {
          const scale = Math.max(0.88, 1 - scrollY / 3000);
          const borderRadius = Math.min(80, scrollY / 10);
          videoContainer.style.transform = `scale(${scale})`;
          videoContainer.style.borderRadius = `${borderRadius}px`;
        }
      }
  
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 300) {
          el.classList.add('visible');
        }
      });
    };
  
    if (video) {
      video.addEventListener('ended', handleVideoEnd);
    }
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      if (video) {
        video.removeEventListener('ended', handleVideoEnd);
      }
      window.removeEventListener('scroll', handleScroll);
    };
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
        <p>If you can dream it,<br /> Mac can do it.</p>
      </main>

      <div
        className="mac-video-container"
        ref={videoContainerRef}
        onClick={handleVideoClick}
      >
        <video className="mac-video" autoPlay muted>
          <source src={videoMac} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <header className="mac-header1 fade-in">
        <h1>Get to know Mac.</h1>
      </header>
      <div className="mac-info-section fade-in" ref={infoSectionRef}>
      <div className="mac-info-card">
        <img src={mac1} alt="Getting Started" />
        <div className="mac-info-text white-text">
          <h2>Getting Started</h2>
          <p>Easy to use. Easy to love.</p>
        </div>
        <PlusOutlined className="plus-icon" /> 
      </div>
        <div className="mac-info-card">
          <img src={mac2} alt="Performance and Battery Life" />
          <div className="mac-info-text white-text">
            <h2>Performance and Battery Life</h2>
            <p>Go fast. Go far.</p>
            
          </div>
          <PlusOutlined className="plus-icon" />
        </div>
        <div className="mac-info-card">
          <img src={mac3} alt="Mac and iPhone" />
          <div className="mac-info-text black-text">
            <h2>Mac and iPhone</h2>
            <p>Dream team.</p>
          </div>
          <PlusOutlined className="plus-icon" />
        </div>
        <div className="mac-info-card">
          <img src={mac4} alt="Compatibility" />
          <div className="mac-info-text black-text">
            <h2>Compatibility</h2>
            <p>Mac runs your favorite apps.</p>
          </div>
          <PlusOutlined className="plus-icon" />
        </div>
        <div className="mac-info-card">
          <img src={mac5} alt="Privacy and Security" />
          <div className="mac-info-text white-text">
            <h2>Privacy and Security</h2>
            <p>Your business, nobody else's.</p>
          </div>
          <PlusOutlined className="plus-icon" />
        </div>
        <div className="mac-info-card">
          <img src={mac6} alt="Durability" />
          <div className="mac-info-text black-text">
            <h2>Durability</h2>
            <p>Built to stand the test of time.</p>
          </div>
          <PlusOutlined className="plus-icon" />
        </div>
        <div className="mac-info-card">
          <img src={mac7} alt="Apple Values" />
          <div className="mac-info-text black-text">
            <h2>Apple Values</h2>
            <p>Our values drive everything we do.</p>
          </div>
          <PlusOutlined className="plus-icon" />
        </div>
      </div>
      <div className="scroll-buttons ">
        <button onClick={scrollLeft}><LeftOutlined /></button>
        <button onClick={scrollRight}><RightOutlined /></button>
      </div>
      <section className="help-me-choose fade-in">
        <h1>Help me choose.</h1>
        <div className="choose-content">
          <div className="choose-text">
            <p>Answer a few questions to find the best Mac for you.</p>
            <button className="get-started-button">Get started</button>
          </div>
          <div className="choose-image">
            <img  src={help_me_choose} alt="Mac illustration" />
          </div>
        </div>
      </section>
      <section className="explore-lineup fade-in">
  <div className="explore-header">
    <h1>Explore the lineup.</h1>
    <div className="explore-links">
      <a href="#">Help me choose &gt;</a>
      <a href="#">Compare all models &gt;</a>
    </div>
  </div>
  <div className="explore-tabs">
    <button className="active">Laptops</button>
    <button>Desktops</button>
    <button>Displays</button>
  </div>
</section>

<div className="product-spec-container fade-in">
<section className="product-lineup">
  <div className="product">
    <img src={product1} alt="MacBook Air" />
    <div className="color-options">
      <span className="color-circle" style={{ backgroundColor: '#1d1d1f' }}></span>
      <span className="color-circle" style={{ backgroundColor: '#FFCC99' }}></span>
      <span className="color-circle" style={{ backgroundColor: 'gray' }}></span>
      <span className="color-circle" style={{ backgroundColor: '#CCCCCC' }}></span>
    </div>
    <p className="new-models">New M3 models</p>
    <h2>MacBook Air 13" and 15"</h2>
    <p>M2 or M3 chip</p>
    <p>Strikingly thin and fast so you can work, play, or create anywhere.</p>
    <p>From $999 or $83.25/mo. for 12 mo.**</p>
    
    <button>Learn more</button>
    <a href="#">Buy &gt;</a>
  </div>
  <div className="product1">
    <img src={product2} alt="MacBook Pro" />
    <div className="color-options">
      <span className="color-circle" style={{ backgroundColor: '#1d1d1f' }}></span>
      <span className="color-circle" style={{ backgroundColor: '#CCCCCC' }}></span>
      <span className="color-circle" style={{ backgroundColor: 'gray' }}></span>
    </div>
    <h2>MacBook Pro 14" and 16"</h2>
    <p>M3, M3 Pro, or M3 Max chip</p>
    <p>The most advanced Mac laptops for demanding workflows.</p>
    <p>From $1599 or $133.25/mo. for 12 mo.**</p>
    
   
    <button>Learn more</button>
    <a href="#">Buy &gt;</a>
  </div>
</section>

<section className="specifications">
  <div className="spec">
    <h3>13.6" or 15.3"</h3>
    <p className='spec-text'>Liquid Retina display with 500 nits of brightness and support for 1 billion colors</p>
    <img src={chipproduct1} alt="Chip" />
    
    <p>Apple M2 or M3 chip</p>
    <p>Up to</p>
    <p><strong>18 hours</strong></p>
    <p> battery life</p>
    <p><strong>4 ports</strong></p>
    <p className='spec-text'>2x Thunderbolt / USB 4, headphone jack, MagSafe</p>
    <p ><strong>2.7 lb. or 3.3 lb.</strong></p>
    <p>Weight</p>
  </div>
  <div className="spec1">
    <h3>14.2" or 16.2"</h3>
    <p>Liquid Retina XDR display with 1000 nits of HDR and 600 nits of SDR brightness and up to 120Hz refresh rates</p>
    <img  src={chipproduct2} alt="Chip" />
   
    <p>Apple M3, M3 Pro, or M3 Max chip</p>
    <p>Up to</p>
    <p><strong>22 hours</strong></p>
    <p> battery life</p>
    <p><strong>7 ports</strong></p>
    <p>2x Thunderbolt / USB 4 or 3x Thunderbolt 4, HDMI, SDXC, headphone jack, MagSafe</p>
    <p><strong>3.4 lb. or 4.7 lb.</strong> </p>
    <p>Weight</p>
  </div>
</section>
</div>
<header className="mac-header">
<div className="buy-mac-section">
  <h1>Why Apple is the best <br/> place to buy Mac.</h1>
  <div className="buy-mac-links">
    <a href="#">Shop Mac &gt;</a>
  </div>
</div>
      </header>

      <div className="card-section fade-in" ref={cardSectionRef}>
        <div className="card-item">
          <img src={icon_apple_card} alt="Icon 1" />
          <h2>Pay over time,<br/> interest-free.</h2>
          <p>When you choose to check out with<br/> Apple Card Monthly Installments.</p>
          <PlusOutlined className="plus-icon" />
        </div>
        <div className="card-item">
          <img src={icon_apple_trade_in} alt="Icon 2" />
          <h2>Save with<br/> Apple Trade In.</h2>
          <p>Get credit toward your next Mac when <br/>you trade in an eligible device.</p>
          <PlusOutlined className="plus-icon" />
        </div>
        <div className="card-item">
          <img src={icon_customize_mac} alt="Icon 3" />
          <h2>Customize your Mac.</h2>
          <p>Choose your chip, memory, storage,<br/> even color.</p>
          <PlusOutlined className="plus-icon" />
        </div>
        <div className="card-item">
          <img src={icon_delivery_pickup} alt="Icon 4" />
          <h2>Get flexible delivery<br/> and easy pickup.</h2>
          <p>Choose two-hour delivery from an <br/>Apple Store, free delivery, or easy<br/>pickup options.</p>
          <PlusOutlined className="plus-icon" />
        </div>
        <div className="card-item">
          <img src={icon_specialist} alt="Icon 5" />
          <h2>Shop live with<br/> a Specialist.</h2>
          <p>Let us guide you live over video and <br/>answer all of your questions.</p>
          <PlusOutlined className="plus-icon" />
        </div>
        <div className="card-item">
          <img src={icon_personal_setup} alt="Icon 6" />
          <h2>Meet your new Mac<br/> with Personal Setup.</h2>
          <p>Jump into online sessions with a <br/>Specialist to set up your Mac and <br/>discover new features.</p>
          <PlusOutlined className="plus-icon" />
        </div>
        <div className="card-item">
          <img src={icon_shopping_experience} alt="Icon 7" />
          <h2>Explore a shopping<br/> experience designed<br/> around you.</h2>
          <p>Use the Apple Store app to get a more<br/> personal way to shop.</p>
          <PlusOutlined className="plus-icon" />
        </div>
      </div>

      <div className="nav-buttons">
        <button onClick={scrollLeft}><LeftOutlined /></button>
        <button onClick={scrollRight}><RightOutlined /></button>
      </div>

      <section className="integration-section">
      <header className="mac-header1">
      <h1>Significant others.</h1>
      </header>
      <div className="integration-content">
        <div className="integration-text">
          <div className="integration-item">
            <h2 onClick={() => toggleSection(0)}>
              Mac and iPhone {activeIndex === 0 ? <UpOutlined /> : <DownOutlined />}
            </h2>
            <p className={activeIndex === 0 ? 'visible' : ''}>
              You can answer calls or messages from<br/> your iPhone directly on your Mac. Copy <br/>images, video, or text on your iPhone, <br/>then paste into another app on your<br/> nearby Mac. With iCloud, you can access <br/>your favorite files from either your iPhone <br/>or your Mac. And so much more.
            </p>
          </div>
          <div className="integration-item">
            <h2 onClick={() => toggleSection(1)}>
              Mac and iPad {activeIndex === 1 ? <UpOutlined /> : <DownOutlined />}
            </h2>
            <p className={activeIndex === 1 ? 'visible' : ''}>
              Sketch on your iPad and have it appear<br/> instantly on your Mac. Or use your iPad as <br/>a second display, so you can work on one <br/>screen while you reference the other. You <br/>can even start a Final Cut Pro project on <br/>your iPad and continue it on your Mac.
            </p>
          </div>
          <div className="integration-item">
            <h2 onClick={() => toggleSection(2)}>
              Mac and Apple Watch {activeIndex === 2 ? <UpOutlined /> : <DownOutlined />}
            </h2>
            <p className={activeIndex === 2 ? 'visible' : ''}>
              Automatically log in to your Mac when <br/>you’re wearing your Apple Watch with <br/>Auto Unlock. No password <br/>typing required.
            </p>
          </div>
        </div>
        <div className="integration-image">
          <img src={getImage()} alt="Integration" />
        </div>
      </div>
    </section>
    <section className="mac-essentials fade-in">
  <div className="mac-essentials-header">
    <h1>Mac essentials.</h1>
    <a href="#" className="all-accessories-link">All Mac accessories &gt;</a>
  </div>

  <div className="essentials-content">
    <div className="essential-item">
    <h2>Mac accessories</h2>
      <p>Explore keyboards, mice, and other essentials.</p>
      <a href="#">Shop Mac accessories &gt;</a>
      <img src={Macessentials} alt="Mac accessories" />
      
    </div>
    <div className="essential-item">
    <h2>Studio Display</h2>
      <p>The 27-inch 5K Retina display pairs beautifully with any Mac.</p>
      <a href="#">Learn more &gt;</a>
      <img className="img1" src={Macessentials1} alt="Studio Display" />
     
    </div>
  </div>
</section>

<section className="mac-links-section">
<header className="mac-header1">
      <h1>Mac</h1>
      </header>
  <div className="mac-links-container">
  <div className="mac-links-column">
      <h2>Explore Mac</h2>
      <ul>
        <li><span className="highlight1">Explore All Mac</span></li>
        <li><span className="highlight1">MacBook Air</span></li>
        <li><span className="highlight1">MacBook Pro</span></li>
        <li><span className="highlight1">iMac</span></li>
        <li><span className="highlight1">Mac mini</span></li>
        <li><span className="highlight1">Mac Studio</span></li>
        <li><span className="highlight1">Mac Pro</span></li>
        <li><span className="highlight1">Displays</span></li>
        <li><span className="highlight">Compare Mac</span></li>
        <li><span className="highlight">Mac Does That</span></li>
      </ul>
    </div>
    <div className="mac-links-column">
      <h2>Shop Mac</h2>
      <ul>
        <li><span className="highlight">Shop Mac</span></li>
        <li><span className="highlight">Mac Accessories</span></li>
        <li><span className="highlight">Apple Trade In</span></li>
        <li><span className="highlight">Financing</span></li>
      </ul>
    </div>
    <div className="mac-links-column">
      <h2>More from Mac</h2>
      <ul>
        <li><span className="highlight">Mac Support</span></li>
        <li><span className="highlight">AppleCare+ for Mac</span></li>
        <li><span className="highlight">macOS Sequoia</span></li>
        <li><span className="highlight">Apple Intelligence</span></li>
        <li><span className="highlight">Apps by Apple</span></li>
        <li><span className="highlight">Continuity</span></li>
        <li><span className="highlight">iCloud+</span></li>
        <li><span className="highlight">Mac for Business</span></li>
        <li><span className="highlight">Education</span></li>
      </ul>
    </div>
  </div>
</section>
    </div>
  );
};

export default Mac;