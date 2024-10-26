import React, { useRef, useEffect, useState } from "react";
import "./Watch.css";
import {
    LeftOutlined,
    RightOutlined,
    PlusOutlined,
    UpOutlined,
    DownOutlined,
  } from "@ant-design/icons";
import watchmp4 from "./img/watchMp4.mp4";
import watch1 from "./img/watch1.jpg";
import watch2 from "./img/watch2.jpg";
import watch3 from "./img/watch3.jpg";
import watch4 from "./img/watch4.jpg";
import watch5 from "./img/watch5.jpg";
import watch6 from "./img/watch6.jpg";
import watch7 from "./img/watch7.jpg";
import watch8 from "./img/watch8.jpg";
import watchproduct1 from "./img/watchproduct1.png";
import watchproduct2 from "./img/watchproduct2.png";
import watchproduct3 from "./img/watchproduct3.png";
import product_tile_icon_case_sizes from "./img/product_tile_icon_case_sizes.png";
import product_tile_icon_case_fill from "./img/product_tile_icon_case_fill.png";
const Watch = () => {
    const infoSectionRef = useRef(null);
    const videoContainerRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);
  
    const handleVideoClick = () => {
      const video = videoContainerRef.current.querySelector("video");
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
        infoSectionRef.current.scrollBy({ left: -350, behavior: "smooth" });
        cardSectionRef.current.scrollBy({ left: -350, behavior: "smooth" });
      };
    
      const scrollRight = () => {
        infoSectionRef.current.scrollBy({ left: 350, behavior: "smooth" });
        cardSectionRef.current.scrollBy({ left: 350, behavior: "smooth" });
      };
    useEffect(() => {
        const video = videoContainerRef.current.querySelector("video");
    
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
              const scale = Math.max(0.88, 1 - scrollY / 6000);
              const borderRadius = Math.min(80, scrollY / 10);
              videoContainer.style.transform = `scale(${scale})`;
              videoContainer.style.borderRadius = `${borderRadius}px`;
            }
          }
    
          const elements = document.querySelectorAll(".fade-in");
          elements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 300) {
              el.classList.add("visible");
            }
          });
        };
    
        if (video) {
          video.addEventListener("ended", handleVideoEnd);
        }
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          if (video) {
            video.removeEventListener("ended", handleVideoEnd);
          }
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
    const items = [
        {
            name: "Apple Watch Series 10",
            new: true,
            img: "https://www.apple.com/v/watch/bo/images/chapternav/watch_nav_s10_link_light__fws1u5oodpm6_large.svg",
        },
        {
            name: "Apple Watch Ultra 2",
            new: "New color",
            img: "https://www.apple.com/v/watch/bo/images/chapternav/watch_nav_ultra_light__dnosu8kc2tme_large.svg",
        },
        {
            name: "Apple Watch SE",
            img: "https://www.apple.com/v/watch/bo/images/chapternav/watch_nav_se_light__ch5dbdx2ybo2_large.svg",
        },
        {
            name: "Apple Watch Nike",
            img: "https://www.apple.com/v/watch/bo/images/chapternav/watch_nav_nike_light__c36zk943xfo2_large.svg",
        },
        {
            name: "Apple Watch Hermès",
            new: true,
            img: "https://www.apple.com/v/watch/bo/images/chapternav/watch_nav_hermes_light__q9veqdmv73ey_large.svg",
        },
        {
            name: "Apple Watch Studio",
            img: "https://www.apple.com/v/watch/bo/images/chapternav/watch_nav_studio_light__dzd9rwk2242u_large.svg",
        },
        {
            name: "Compare",
            img: "https://www.apple.com/v/watch/bo/images/chapternav/watch_nav_compare__cdkbsrx8arw2_large.svg",
        },
        {
            name: "Bands",
            img: "https://www.apple.com/v/watch/bo/images/chapternav/watch_nav_bands__b9c37m8hpgya_large.svg",
        },
        {
            name: "AirPods",
            new: true,
            img: "https://www.apple.com/v/watch/bo/images/chapternav/watch_nav_airpods__e9283t02ry2y_large.svg",
        },
        {
            name: "Accessories",
            img: "https://www.apple.com/v/watch/bo/images/chapternav/watch_nav_accessories__glsax9gul7ue_large.svg",
        },
        {
            name: "Apple Fitness+",
            img: "https://www.apple.com/v/watch/bo/images/chapternav/watch_nav_fitness__c1o0w8ojsfwy_large.svg",
        },
        {
            name: "watchOS 11",
            img: "https://www.apple.com/v/watch/bo/images/chapternav/watch_nav_watch_os__bpf576367ple_large.svg",
        },
        {
            name: "Shop Watch",
            img: "https://www.apple.com/v/watch/bo/images/chapternav/watch_nav_shop_watch_light__f4fr5gzdhjyy_large.svg",
        },
    ];
  return (
    <div className="watch-page">
    <div className="icon-menu2">
      {items.map((item, index) => (
        <div className="icon-item2" key={index}>
          <img src={item.img} alt={item.name} />
          <p>
            {item.name}
            {item.new && <br />}
            {item.new && <span className="new2">New</span>}
          </p>
        </div>
      ))}
    </div>
    <header className="watch-header">
        <div className="watch-education">
        Get 3 months of Apple Fitness+ when you buy any Apple Watch.1 <a href="#">Shop Apple Watch</a>
        </div>
      </header>
      <main className="watch-content">
        <h1>Apple Watch</h1>
        <p>
        The ultimate device <br></br>
        for a healthy life.
        </p>
      </main>
      <div
        className="watch-video-container"
        ref={videoContainerRef}
        onClick={handleVideoClick}
      >
        <video className="watch-video" autoPlay muted>
          <source src={watchmp4} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <header className="watch-header1 fade-in">
        <h1>Get to know Apple Watch.</h1>
      </header>
      <div className="watch-info-section fade-in" ref={infoSectionRef}>
        <div className="watch-info-card">
          <img src={watch1} alt="Getting Started" />
          <div className="ipad-info-text white-text">
            <h2>Health</h2>
            <p>Knows you by heart.</p>
          </div>
          <PlusOutlined className="plus-icon" />
        </div>
        <div className="watch-info-card">
          <img src={watch2} alt="Performance and Battery Life" />
          <div className="watch-info-text black-text">
            <h2>Fitness</h2>
            <p>Every move counts.</p>
          </div>
          <PlusOutlined className="plus-icon" />
        </div>
        <div className="watch-info-card">
          <img src={watch3} alt="Mac and iPhone" />
          <div className="watch-info-text black-text">
            <h2>Connectivity</h2>
            <p>The right call for staying in touch.</p>
          </div>
          <PlusOutlined className="plus-icon" />
        </div>
        <div className="watch-info-card">
          <img src={watch4} alt="Compatibility" />
          <div className="watch-info-text black-text">
            <h2>Safety</h2>
            <p>Good help is easy to find.</p>
          </div>
          <PlusOutlined className="plus-icon" />
        </div>
        <div className="watch-info-card">
          <img src={watch5} alt="Privacy and Security" />
          <div className="watch-info-text black-text">
            <h2>Apple Watch + iPhone</h2>
            <p>Dynamic duo.</p>
          </div>
          <PlusOutlined className="plus-icon" />
        </div>
        <div className="watch-info-card">
          <img src={watch6} alt="Durability" />
          <div className="watch-info-text black-text">
            <h2>Personalization</h2>
            <p>Make it you-nique.</p>
          </div>
          <PlusOutlined className="plus-icon" />
        </div>
        <div className="watch-info-card">
          <img src={watch7} alt="Apple Values" />
          <div className="watch-info-text white-text">
            <h2>Apple Watch Ultra 2</h2>
            <p>The ultimate sports and adventure watch.</p>
          </div>
          <PlusOutlined className="plus-icon" />
        </div>
        <div className="watch-info-card">
          <img src={watch8} alt="Apple Values" />
          <div className="watch-info-text black-text">
            <h2>Apple Watch For Your Kids</h2>
            <p>Independence for them.
            Peace of mind for you.</p>
          </div>
          <PlusOutlined className="plus-icon" />
        </div>
      </div>
      <div className="scroll-buttons ">
        <button onClick={scrollLeft}>
          <LeftOutlined />
        </button>
        <button onClick={scrollRight}>
          <RightOutlined />
        </button>
      </div>
      <section className="explorewatch-lineup fade-in">
        <div className="explorewatch-header">
          <h1>Explore the lineup.</h1>
          <div className="explorewatch-links">
            <a href="#">Compare all models &gt;</a>
          </div>
        </div>
      </section>
      <div className="product4-spec-container fade-in">
  <section className="product4-lineup">
    <div className="product4">
      <img  src={watchproduct1} alt="Watch 1" />
      <div className="color-options4">
        <span className="color-circle4" style={{ backgroundColor: "#1a2530" }}></span>
        <span className="color-circle4" style={{ backgroundColor: "#d3d6d1" }}></span>
        <span className="color-circle4" style={{ backgroundColor: "#e0e0e0" }}></span>
      </div>
      <h2>Apple Watch SE</h2>
      <p>All the essentials.<br/>Light on price.</p>
      <p className="price4">From $249 or $20.75/mo. for 12 mo.*</p>
      <div className="button-container4">
        <button>Learn more</button>
        <a href="#">Buy &gt;</a>
      </div>
      <div className="components4">
        <div className="component4">
        <img src={product_tile_icon_case_sizes} alt="product_tile_icon_case_sizes" />
          <p>44mm or 40mm</p>
          <p>aluminum case</p>
        </div>
        <div className="component4">
        <img src={product_tile_icon_case_fill} alt="product_tile_icon_case_fill" />
          <p>Retina display</p>
          <p>Up to 1000 nits</p>
        </div>
        <div className="component4">
          <p>S8 SiP</p>
          <p>Siri</p>
          <p>Find iPhone</p>
        </div>
        <div className="component4">
          <p>High and low heart rate notifications</p>
          <p>Irregular rhythm notifications</p>
          <p>Low cardio fitness notifications</p>
        </div>
        <div className="component4">
          <p>Up to 18 hours</p>
          <p>Low Power Mode</p>
        </div>
      </div>
    </div>
    <div className="product4">
      <img  src={watchproduct2} alt="Watch 2" />
      <div className="color-options4">
      <span className="color-circle4" style={{ backgroundColor: "#102030" }}></span>
        <span className="color-circle4" style={{ backgroundColor: "#f6d9cd" }}></span>
        <span className="color-circle4" style={{ backgroundColor: "#f0eff1" }}></span>
        <span className="color-circle4" style={{ backgroundColor: "#47423d" }}></span>
        <span className="color-circle4" style={{ backgroundColor: "#f4dec8" }}></span>
        <span className="color-circle4" style={{ backgroundColor: "#e3ddd7" }}></span>
      </div>
      <h2>Apple Watch Series 10</h2>
      <p>Thinnest. Biggest display.<br/>Advanced health features.</p>
      <p className="price4">From $399 or $33.25/mo. for 12 mo.*</p>
      <div className="button-container4">
        <button>Learn more</button>
        <a href="#">Buy &gt;</a>
      </div>
      <div className="components4">
        <div className="component4">
          <p>46mm or 42mm</p>
          <p>aluminum or titanium case</p>
        </div>
        <div className="component4">
          <p>Always-On Retina display</p>
          <p>Up to 2000 nits</p>
        </div>
        <div className="component4">
          <p>S10 SiP</p>
          <p>Double tap gesture</p>
          <p>Faster on-device Siri with health data access</p>
          <p>Precision Finding for iPhone</p>
        </div>
        <div className="component4">
          <p>ECG app</p>
          <p>High and low heart rate notifications</p>
          <p>Irregular rhythm notifications</p>
          <p>Low cardio fitness notifications</p>
          <p>Sleep apnea notifications</p>
        </div>
        <div className="component4">
          <p>Up to 18 hours</p>
          <p>Up to 36 hours in Low Power Mode</p>
          <p>Fast charging</p>
        </div>
      </div>
    </div>
    <div className="product4">
      <img src={watchproduct3} alt="Watch 3" />
      <div className="color-options4">
        <span className="color-circle4" style={{ backgroundColor: "#0f0e0e" }}></span>
        <span className="color-circle4" style={{ backgroundColor: "#ccc4bc" }}></span>
      </div>
      <h2>Apple Watch Ultra 2</h2>
      <p>The ultimate sports<br/>and adventure watch.</p>
      <p className="price4">From $799 or $66.58/mo. for 12 mo.*</p>
      <div className="button-container4">
        <button>Learn more</button>
        <a href="#">Buy &gt;</a>
      </div>
      <div className="components4">
        <div className="component4">
          <p>49mm</p>
          <p>titanium case</p>
        </div>
        <div className="component4">
          <p>Always-On Retina display</p>
          <p>Up to 3000 nits</p>
        </div>
        <div className="component4">
          <p>S9 SiP</p>
          <p>Double tap gesture</p>
          <p>Faster on-device Siri with health data access</p>
          <p>Precision Finding for iPhone</p>
        </div>
        <div className="component4">
          <p>ECG app</p>
          <p>High and low heart rate notifications</p>
          <p>Irregular rhythm notifications</p>
          <p>Low cardio fitness notifications</p>
          <p>Sleep apnea notifications</p>
        </div>
        <div className="component4">
          <p>Up to 36 hours</p>
          <p>Up to 72 hours in Low Power Mode</p>
          <p>Fast charging</p>
        </div>
      </div>
    </div>
  </section>
</div>

    </div>
  );
};

export default Watch;