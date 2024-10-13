import React, { useRef, useEffect, useState } from "react";
import {
  LeftOutlined,
  RightOutlined,
  PlusOutlined,
  UpOutlined,
  DownOutlined,
} from "@ant-design/icons";
import Iphonemp4 from "./img/Iphonemp4.mp4";
import "./Iphone.css";
import ip1 from "./img/ip1.jpg";
import ip2 from "./img/ip2.jpg";
import ip3 from "./img/ip3.jpg";
import ip4 from "./img/ip4.jpg";
import ip5 from "./img/ip5.jpg";
import ip6 from "./img/ip6.jpg";
import ip7 from "./img/ip7.jpg";
import ip8 from "./img/ip8.jpg";
import product1 from "./img/product1.png";
import product2 from "./img/product2.png";
import product3 from "./img/product3.png";
import product4 from "./img/product4.png";
import product5 from "./img/product5.png";
import component1 from "./img/product_tile_icon_apple_intelligence.png";
import component2 from "./img/product_tile_icon_a18_pro.png";
import component3 from "./img/product_tile_icon_camera.png";
import component4 from "./img/product_tile_icon_iphone_16_pro_camera.png";
import component5 from "./img/product_tile_icon_battery_100.png";
import component2_1 from "./img/product_tile_icon_a18.png";
import component2_2 from "./img/product_tile_icon_a16.png";
import component2_3 from "./img/product_tile_icon_a15.png";
import component4_2 from "./img/product_tile_icon_iphone_16_camera.png";
import component4_3 from "./img/product_tile_icon_iphone_15_camera.png";
import component4_4 from "./img/product_tile_icon_iphone_14_camera.png";
import component4_5 from "./img/product_tile_icon_iphone_se_camera.png";
import guided_tour from "./img/guided_tour.jpg";
import icon_trade_in from "./img/icon_trade_in.png";
import icon_apple_card from "./img/icon_apple_card.png";
import icon_carrier from "./img/icon_carrier.png";
import icon_delivery from "./img/icon_delivery.png";
import icon_specialist from "./img/icon_specialist.png";
import icon_person from "./img/icon_person.png";
import icon_asa from "./img/icon_asa.png";
import magsafe__dac2joy from "./img/magsafe__dac2joy.jpg";
import airtag__fur from "./img/airtag__fur.jpg";
import Significant1 from "./img/Significant1.jpg";
import Significant2 from "./img/Significant2.jpg";
import Significant3 from "./img/Significant3.jpg";

const Iphone = () => {
  const infoSectionRef = useRef(null);
  const cardSectionRef = useRef(null);
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
        return <img src={Significant1} alt="Significant " className="active" />;
      case 1:
        return <img src={Significant2} alt="Significant " />;
      case 2:
        return <img src={Significant3} alt="Significant " />;
      default:
        return <img src={Significant1} alt="Significant " />;
    }
  };
  const items = [
    {
      name: "iPhone 16 Pro",
      new: true,
      img: "https://www.apple.com/v/iphone/home/bx/images/chapternav/iphone_16_pro_light__sh8e76empwyq_large.svg",
    },
    {
      name: "iPhone 16",
      new: true,
      img: "https://www.apple.com/v/iphone/home/bx/images/chapternav/iphone_16_light__1g0j6j3ygciy_large.svg",
    },
    {
      name: "iPhone 15",
      img: "https://www.apple.com/v/iphone/home/bx/images/chapternav/iphone_15_light__fj1tpga410a6_large.svg",
    },
    {
      name: "iPhone 14",
      img: "https://www.apple.com/v/iphone/home/bx/images/chapternav/iphone_14_light__cazn2nyanwuq_large.svg",
    },
    {
      name: "iPhone SE",
      img: "https://www.apple.com/v/iphone/home/bx/images/chapternav/iphone_se_light__cdjrao3pq2he_large.svg",
    },
    {
      name: "Compare",
      img: "https://www.apple.com/v/iphone/home/bx/images/chapternav/iphone_compare_light__f01dnbvbb62y_large.svg",
    },
    {
      name: "AirPods",
      new: true,
      img: "https://www.apple.com/v/iphone/home/bx/images/chapternav/airpods_light__cd9exnztczjm_large.svg",
    },
    {
      name: "AirTag",
      img: "https://www.apple.com/v/iphone/home/bx/images/chapternav/airtag_light__c19z9f5le0ia_large.svg",
    },
    {
      name: "Accessories",
      img: "https://www.apple.com/v/iphone/home/bx/images/chapternav/accessories_light__e917u1i857e6_large.svg",
    },
    {
      name: "Apple Card",
      img: "https://www.apple.com/v/iphone/home/bx/images/chapternav/iphone_apple_card_light__eik9egogyro2_large.svg",
    },
    {
      name: "iOS 18",
      img: "https://www.apple.com/v/iphone/home/bx/images/chapternav/iphone_ios_light__b0jhieo01t0i_large.svg",
    },
    {
      name: "Shop iPhone",
      img: "https://www.apple.com/v/iphone/home/bx/images/chapternav/shop_iphone_light__e4dlk2n6h26a_large.svg",
    },
  ];

  return (
    <div className="iphone-page">
      <div className="icon-menu">
        {items.map((item, index) => (
          <div className="icon-item" key={index}>
            <img src={item.img} alt={item.name} />
            <p>
              {item.name}
              {item.new && <br />}
              {item.new && <span className="new">New</span>}
            </p>
          </div>
        ))}
      </div>

      <header className="iphone-header">
        <div className="ip-education">
          Get credit toward iPhone 16 or iPhone 16 Pro when you trade in an
          eligible smartphone.<a href="#">Shop Iphone</a>
        </div>
      </header>
      <main className="ip-content">
        <h1>iPhone</h1>
        <p>Designed to be loved.</p>
      </main>

      <div
        className="iphone-video-container"
        ref={videoContainerRef}
        onClick={handleVideoClick}
      >
        <video className="iphone-video" autoPlay muted>
          <source src={Iphonemp4} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <header className="iphone-header1 fade-in">
        <h1>Get to know iPhone.</h1>
      </header>

      <div className="ip-info-section fade-in" ref={infoSectionRef}>
        <div className="ip-info-card">
          <img src={ip1} alt="Getting Started" />
          <div className="ip-info-text white-text">
            <h2>Getting Started</h2>
            <p>Easy to use. Easy to love.</p>
          </div>
          <PlusOutlined className="plus-icon" />
        </div>
        <div className="ip-info-card">
          <img src={ip2} alt="Performance and Battery Life" />
          <div className="ip-info-text white-text">
            <h2>Performance and Battery Life</h2>
            <p>Go fast. Go far.</p>
          </div>
          <PlusOutlined className="plus-icon" />
        </div>
        <div className="ip-info-card">
          <img src={ip3} alt="Mac and iPhone" />
          <div className="ip-info-text white-text">
            <h2>Mac and iPhone</h2>
            <p>Dream team.</p>
          </div>
          <PlusOutlined className="plus-icon" />
        </div>
        <div className="ip-info-card">
          <img src={ip4} alt="Compatibility" />
          <div className="ip-info-text black-text">
            <h2>Compatibility</h2>
            <p>Mac runs your favorite apps.</p>
          </div>
          <PlusOutlined className="plus-icon" />
        </div>
        <div className="ip-info-card">
          <img src={ip5} alt="Privacy and Security" />
          <div className="ip-info-text black-text">
            <h2>Privacy and Security</h2>
            <p>Your business, nobody else's.</p>
          </div>
          <PlusOutlined className="plus-icon" />
        </div>
        <div className="ip-info-card">
          <img src={ip6} alt="Durability" />
          <div className="ip-info-text white-text">
            <h2>Durability</h2>
            <p>Built to stand the test of time.</p>
          </div>
          <PlusOutlined className="plus-icon" />
        </div>
        <div className="ip-info-card">
          <img src={ip7} alt="Apple Values" />
          <div className="ip-info-text white-text">
            <h2>Apple Values</h2>
            <p>Our values drive everything we do.</p>
          </div>
          <PlusOutlined className="plus-icon" />
        </div>
        <div className="ip-info-card">
          <img src={ip8} alt="Apple Values" />
          <div className="ip-info-text white-text">
            <h2>Apple Values</h2>
            <p>Our values drive everything we do.</p>
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
      <section className="explore-lineup fade-in">
        <div className="explore-header">
          <h1>Explore the lineup.</h1>
          <div className="explore-links">
            <a href="#">Compare all models &gt;</a>
          </div>
        </div>
      </section>
      <div className="product2-spec-container fade-in">
        <section className="product2-lineup">
          <div className="product2">
            <img className="img" src={product1} alt="iPhone 16 Pro" />
            <div className="color-options2">
              <span
                className="color-circle2"
                style={{ backgroundColor: "#bfa48f" }}
              ></span>
              <span
                className="color-circle2"
                style={{ backgroundColor: "#c2bcb2" }}
              ></span>
              <span
                className="color-circle2"
                style={{ backgroundColor: "black" }}
              ></span>
              <span
                className="color-circle2"
                style={{ backgroundColor: "#f7f6f2" }}
              ></span>
            </div>
            <p className="new-models2">New</p>
            <h2>iPhone 16 Pro</h2>
            <p>The ultimate iPhone.</p>
            <p className="price">From $999 or $41.62/mo. for 24 mo.**</p>
            <div className="button-container">
              <button>Learn more</button>
              <a href="#">Buy &gt;</a>
            </div>

            <div className="components">
              <div className="component">
                <img src={component1} alt="Component 1" />
                <p>
                  Apple Intelligence<sup>1</sup>
                </p>
              </div>
              <div className="component">
                <img src={component2} alt="Component 2" />
                <p>A18 Pro chip with 6-core GPU</p>
              </div>
              <div className="component">
                <img src={component3} alt="Component 3" />
                <p>Camera Control</p>
              </div>
              <div className="component">
                <img src={component4} alt="Component 4" />
                <p className="p_component">
                  Pro camera system <br></br>Our most advanced 48MP Fusion
                  camera <br></br>5x Telephoto camera<br></br> 48MP Ultra Wide
                  camera
                </p>
              </div>
              <div className="component">
                <img src={component5} alt="Component 5" />
                <p>
                  Up to 33 hours video playback<sup>2</sup>
                </p>
              </div>
            </div>
          </div>
          <div className="product2">
            <img className="img" src={product2} alt="iPhone 16" />
            <div className="color-options2">
              <span
                className="color-circle2"
                style={{ backgroundColor: "#94a5eb" }}
              ></span>
              <span
                className="color-circle2"
                style={{ backgroundColor: "#abcfcd" }}
              ></span>
              <span
                className="color-circle2"
                style={{ backgroundColor: "#eda8d5" }}
              ></span>
              <span
                className="color-circle2"
                style={{ backgroundColor: "#f5f5f5" }}
              ></span>
              <span
                className="color-circle2"
                style={{ backgroundColor: "#35393b" }}
              ></span>
            </div>
            <p className="new-models2">New</p>
            <h2>iPhone 16</h2>
            <p>A total powerhouse.</p>
            <p className="price">From $799 or $33.29/mo. for 24 mo.**</p>
            <div className="button-container">
              <button>Learn more</button>
              <a href="#">Buy &gt;</a>
            </div>
            <div className="components">
              <div className="component">
                <img src={component1} alt="Component 1" />
                <p>
                  Apple Intelligence<sup>1</sup>
                </p>
              </div>
              <div className="component">
                <img src={component2_1} alt="Component 2" />
                <p>A18 chip with 5-core GPU</p>
              </div>
              <div className="component">
                <img src={component3} alt="Component 3" />
                <p>Camera Control</p>
              </div>
              <div className="component">
                <img src={component4_2} alt="Component 4" />
                <p className="p_component">
                  Advanced dual-camera system <br></br>48MP Fusion camera
                  <br></br> 2x Telephoto
                  <br></br>12MP Ultra Wide camera
                </p>
              </div>
              <div className="component">
                <img src={component5} alt="Component 5" />
                <p>
                  Up to 27 hours video playback<sup>2</sup>
                </p>
              </div>
            </div>
          </div>
          <div className="product2">
            <img className="img1" src={product3} alt="iPhone 15" />
            <div className="color-options2">
              <span
                className="color-circle2"
                style={{ backgroundColor: "#ebd0d2" }}
              ></span>
              <span
                className="color-circle2"
                style={{ backgroundColor: "#ece6c6" }}
              ></span>
              <span
                className="color-circle2"
                style={{ backgroundColor: "#cfd9c9" }}
              ></span>
              <span
                className="color-circle2"
                style={{ backgroundColor: "#d5dde0" }}
              ></span>
              <span
                className="color-circle2"
                style={{ backgroundColor: "#3c4042" }}
              ></span>
            </div>
            <p className="new-models2">&nbsp;</p>
            <h2>iPhone 15</h2>
            <p>As amazing as ever.</p>
            <p className="price">From $699 or $29.12/mo. for 24 mo.**</p>
            <div className="button-container">
              <button>Learn more</button>
              <a href="#">Buy &gt;</a>
            </div>
            <div className="components">
              <div className="component">
                <span className="dash">—</span>
              </div>
              <div className="component">
                <img src={component2_2} alt="Component 2" />
                <p>A16 Bionic chip with 5-core GPU</p>
              </div>
              <div className="component">
                <span className="dash">—</span>
              </div>
              <div className="component">
                <img src={component4_3} alt="Component 4" />
                <p className="p_component">
                  Dual-camera system <br></br>48MP Main camera<br></br> 2x
                  Telephoto<br></br> 12MP Ultra Wide camera
                </p>
              </div>
              <div className="component">
                <img src={component5} alt="Component 5" />
                <p>
                  Up to 26 hours video playback<sup>2</sup>
                </p>
              </div>
            </div>
          </div>
          <div className="product2">
            <img className="img1" src={product4} alt="iPhone 14" />
            <div className="color-options2">
              <span
                className="color-circle2"
                style={{ backgroundColor: "#a0b4c7" }}
              ></span>
              <span
                className="color-circle2"
                style={{ backgroundColor: "#a0b4c7" }}
              ></span>
              <span
                className="color-circle2"
                style={{ backgroundColor: "#f9e479" }}
              ></span>
              <span
                className="color-circle2"
                style={{ backgroundColor: "black" }}
              ></span>
              <span
                className="color-circle2"
                style={{ backgroundColor: "#faf6f2" }}
              ></span>
              <span
                className="color-circle2"
                style={{ backgroundColor: "red" }}
              ></span>
            </div>
            <p className="new-models2">&nbsp;</p>
            <h2>iPhone 14</h2>
            <p>All kinds of awesome.</p>
            <p className="price">From $599 or $24.95/mo. for 24 mo.**</p>
            <div className="button-container">
              <button>Learn more</button>
              <a href="#">Buy &gt;</a>
            </div>
            <div className="components">
              <div className="component">
                <span className="dash">—</span>
              </div>
              <div className="component">
                <img src={component2_3} alt="Component 2" />
                <p>A15 Bionic chip with 5-core GPU</p>
              </div>
              <div className="component">
                <span className="dash">—</span>
              </div>
              <div className="component">
                <img src={component4_4} alt="Component 4" />
                <p className="p_component">
                  Dual-camera system <br></br>12MP Main camera<br></br>—
                  <br></br>
                  12MP Ultra Wide camera
                </p>
              </div>
              <div className="component">
                <img src={component5} alt="Component 5" />
                <p>
                  Up to 26 hours video playback<sup>2</sup>
                </p>
              </div>
            </div>
          </div>
          <div className="product2">
            <img className="img2" src={product5} alt="iPhone SE" />
            <div className="color-options2">
              <span
                className="color-circle2"
                style={{ backgroundColor: "black" }}
              ></span>
              <span
                className="color-circle2"
                style={{ backgroundColor: "#faf6f2" }}
              ></span>
              <span
                className="color-circle2"
                style={{ backgroundColor: "red" }}
              ></span>
            </div>
            <p className="new-models2">&nbsp;</p>
            <h2>iPhone SE</h2>
            <p>Serious power. Serious value.</p>
            <p className="price">From $429 or $17.87/mo. for 24 mo.**</p>
            <div className="button-container">
              <button>Learn more</button>
              <a href="#">Buy &gt;</a>
            </div>
            <div className="components">
              <div className="component">
                <span className="dash">—</span>
              </div>
              <div className="component">
                <img src={component2_3} alt="Component 2" />
                <p>A15 Bionic chip with 4-core GPU</p>
              </div>
              <div className="component">
                <span className="dash">—</span>
              </div>
              <div className="component">
                <img src={component4_5} alt="Component 4" />
                <p className="p_component">
                  Single-camera system <br></br>12MP Main camera<br></br> —
                  <br></br>—
                </p>
              </div>
              <div className="component">
                <img src={component5} alt="Component 5" />
                <p>
                  Up to 15 hours video playback<sup>2</sup>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="guided-tour-section fade-in">
        <h1>
          Take a closer look at <br></br> our latest models.
        </h1>
        <div className="tour-content">
          <div className="tour-image-container">
            <img src={guided_tour} alt="Guided Tour" className="tour-image" />
            <div className="tour-text-overlay">
              <h2>A Guided Tour of </h2> <h3>iPhone 16 & iPhone 16 Pro</h3>
              <button className="tour-button">Watch the film</button>
            </div>
          </div>
        </div>
      </section>

      <header className="iphone-header">
        <div className="buy-ip-section">
          <h1>
            Why Apple is the best <br /> place to buy iPhone.
          </h1>
          <div className="buy-ip-links">
            <a href="#">Shop iPhone &gt;</a>
          </div>
        </div>
      </header>

      <div className="card-section fade-in" ref={cardSectionRef}>
        <div className="card-item">
          <img src={icon_trade_in} alt="Icon 1" />
          <h2>
            Save with Apple
            <br /> Trade In.
          </h2>
          <p>
            Get $180–$650 in credit toward <br></br> iPhone 16 or iPhone 16 Pro
            when you <br></br>trade in iPhone 12 or higher.*
          </p>
          <PlusOutlined className="plus-icon" />
        </div>
        <div className="card-item">
          <img src={icon_apple_card} alt="Icon 2" />
          <h2>
            Pay over time, <br></br>interest-free.
          </h2>
          <p>
            When you choose to check out with <br></br>Apple Card Monthly
            Installments.12
          </p>
          <PlusOutlined className="plus-icon" />
        </div>
        <div className="card-item">
          <img src={icon_carrier} alt="Icon 3" />
          <h2>
            Apple. Your one-stop <br></br>shop for incredible<br></br> carrier
            deals.
          </h2>
          <p>
            Get up to $1000 in credit on a new <br></br>iPhone with AT&T, Boost
            Mobile, <br></br>T‑Mobile, or Verizon. Trade‑in may be<br></br>{" "}
            required.13
          </p>
          <PlusOutlined className="plus-icon" />
        </div>
        <div className="card-item">
          <img src={icon_delivery} alt="Icon 4" />
          <h2>
            Get flexible delivery<br></br> and easy pickup.
          </h2>
          <p>
            Choose two‑hour delivery from an <br></br>Apple Store, free delivery
            or easy <br></br>pickup options.
          </p>
          <PlusOutlined className="plus-icon" />
        </div>
        <div className="card-item">
          <img src={icon_specialist} alt="Icon 5" />
          <h2>
            Shop live with <br></br>a Specialist.
          </h2>
          <p>
            Let us guide you live over video and <br></br> answer all of your
            questions.
          </p>
          <PlusOutlined className="plus-icon" />
        </div>
        <div className="card-item">
          <img src={icon_person} alt="Icon 6" />
          <h2>
            Meet your new iPhone <br></br>with Personal Setup.
          </h2>
          <p>
            Jump into online sessions with a <br></br>Specialist to set up your
            iPhone and <br></br>discover new features.
          </p>
          <PlusOutlined className="plus-icon" />
        </div>
        <div className="card-item">
          <img src={icon_asa} alt="Icon 7" />
          <h2>
            Explore a shopping <br></br>experience designed <br></br>around you.
          </h2>
          <p>
            Use the Apple Store app to get a more <br></br>personal way to shop.
          </p>
          <PlusOutlined className="plus-icon" />
        </div>
      </div>

      <div className="nav-buttons">
        <button onClick={scrollLeft}>
          <LeftOutlined />
        </button>
        <button onClick={scrollRight}>
          <RightOutlined />
        </button>
      </div>

      <section className="ip-essentials fade-in">
        <div className="ip-essentials-header">
          <h1>iPhone essentials.</h1>
          <a href="#" className="all-accessories-link">
            All iPhone accessories &gt;
          </a>
        </div>

        <div className="essentials-content">
          <div className="essential-item">
            <h2>MagSafe</h2>
            <p>Snap on a magnetic case, wallet, or both. <br></br>
            And get faster, more efficient wireless charging.</p>
            <a href="#">Shop MagSafe accessories &gt;</a>
            <img src={magsafe__dac2joy} alt="Mac accessories" />
          </div>
          <div className="essential-item">
            <h2>AirTag</h2>
            <p>Attach one to your keys. Put another in your backpack. <br></br>
            If they’re misplaced, just use the Find My app.</p>
            <a href="#">Buy &gt;</a>
            <img src={airtag__fur} alt="Studio Display" />
          </div>
        </div>
      </section>

      <section className="Significant-section fade-in">
      <header className="ip-header1">
      <h1>Significant others.</h1>
      </header>
      <div className="Significant-content">
        <div className="Significant-text">
          <div className="Significant-item">
            <h2 onClick={() => toggleSection(0)}>
            iPhone and Mac {activeIndex === 0 ? <UpOutlined /> : <DownOutlined />}
            </h2>
            <p className={activeIndex === 0 ? 'visible' : ''}>
            With iPhone Mirroring, you can view your iPhone screen on your Mac and control it without picking up your phone. Continuity features also let you answer calls or messages right from your Mac. You can even copy images, video, or text from your iPhone and paste it all into a different app on your Mac. And with iCloud, you can access your files from either device.
            </p>
          </div>
          <div className="Significant-item">
            <h2 onClick={() => toggleSection(1)}>
            iPhone and <br></br>Apple Watch{activeIndex === 1 ? <UpOutlined /> : <DownOutlined />}
            </h2>
            <p className={activeIndex === 1 ? 'visible' : ''}>
            Misplaced your iPhone? The latest Apple Watch models can show you its approximate distance and direction.14 To set up a group photo on your iPhone, join the group and use Apple Watch as a viewfinder to snap the shot. And when you take a call on your Apple Watch, just tap your iPhone to continue the conversation there.
            </p>
          </div>
          <div className="Significant-item">
            <h2 onClick={() => toggleSection(2)}>
            iPhone and AirPods {activeIndex === 2 ? <UpOutlined /> : <DownOutlined />}
            </h2>
            <p className={activeIndex === 2 ? 'visible' : ''}>
            Set up AirPods on iPhone with just a tap. You’ll love Adaptive Audio, which automatically tailors the noise control for you to provide the best listening experience across different environments and interactions throughout the day.
            </p>
          </div>
        </div>
        <div className="Significant-image">
        {getImage()}
        </div>
      </div>
    </section>

    <section className="ip-links-section">
<header className="ip-header1">
      <h1>iPhone</h1>
      </header>
  <div className="ip-links-container">
  <div className="ip-links-column">
      <h2>Explore iPhone</h2>
      <ul>
        <li><span className="highlight3">Explore All iPhone</span></li>
        <li><span className="highlight3">iPhone 16 Pro</span></li>
        <li><span className="highlight3">iPhone 16</span></li>
        <li><span className="highlight3">iPhone 15</span></li>
        <li><span className="highlight3">iPhone 14</span></li>
        <li><span className="highlight3">iPhone SE</span></li>
      
        <li><span className="highlight2">Compare iPhone</span></li>
        <li><span className="highlight2">Switch from Android</span></li>
      </ul>
    </div>
    <div className="ip-links-column">
      <h2>Shop iPhone</h2>
      <ul>
        <li><span className="highlight2">Shop iPhone</span></li>
        <li><span className="highlight2">iPhone Accessories</span></li>
        <li><span className="highlight2">Apple Trade In</span></li>
        <li><span className="highlight2">Financing</span></li>
      </ul>
    </div>
    <div className="ip-links-column">
      <h2>More from iPhone</h2>
      <ul>
        <li><span className="highlight2">iPhone Support</span></li>
        <li><span className="highlight2">AppleCare+ for iPhone</span></li>
        <li><span className="highlight2">iOS 18</span></li>
        <li><span className="highlight2">Apple Intelligence</span></li>
        <li><span className="highlight2">Apps by Apple</span></li>
        <li><span className="highlight2">iPhone Privacy</span></li>
        <li><span className="highlight2">iCloud+</span></li>
        <li><span className="highlight2">Wallet, Pay, Card</span></li>
        <li><span className="highlight2">Siri</span></li>
      </ul>
    </div>
  </div>
</section>
    </div>
  );
};

export default Iphone;
