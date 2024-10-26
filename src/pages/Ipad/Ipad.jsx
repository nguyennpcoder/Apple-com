import React, { useRef, useEffect, useState } from "react";
import {
    LeftOutlined,
    RightOutlined,
    PlusOutlined,
    UpOutlined,
    DownOutlined,
  } from "@ant-design/icons";
import "./Ipad.css";
import ipadmp4 from "./img/iPadMp4.mp4";
import ipad1 from "./img/ipad1.jpg";
import ipad2 from "./img/ipad2.jpg";
import ipad3 from "./img/ipad3.jpg";
import ipad4 from "./img/ipad4.jpg";
import ipad5 from "./img/ipad5.jpg";
import ipad6 from "./img/ipad6.jpg";
import ipad7 from "./img/ipad7.jpg";
import productipad1 from "./img/productipad1.png";
import productipad2 from "./img/productipad2.png";
import productipad3 from "./img/productipad3.png";
import productipad4 from "./img/productipad4.png";
import icon_chip_m4 from "./img/icon_chip_m4.png";
import icon_apple_intelligence from "./img/icon_apple_intelligence.png";
import ipadpro13_gen7_camera from "./img/ipadpro13_gen7_camera.png";
import ipad_front_camera_landscape from "./img/ipad_front_camera_landscape.png";
import applepencil_vertical_gen4_gen3 from "./img/applepencil_vertical_gen4_gen3.png";
import magickeyboardfolio_ipad from "./img/magickeyboardfolio_ipad.png";
import icon_chip_m2 from "./img/icon_chip_m2.png";
import ipadair13_gen6_camera from "./img/ipadair13_gen6_camera.png";
import magickeyboard_ipad from "./img/magickeyboard_ipad.png";
import icon_chip_a14 from "./img/icon_chip_a14.png";
import applepencil_vertical_gen3_gen1 from "./img/applepencil_vertical_gen3_gen1.png";
import magickeyboard_m4_ipad from "./img/magickeyboard_m4_ipad.png";
import icon_chip_a17 from "./img/icon_chip_a17.png";
import magickeyboard from "./img/magickeyboard.png";
import ipadmini_gen6_camera from "./img/ipadmini_gen6_camera.png";
import ipad_front_camera from "./img/ipad_front_camera.png";
import bc_pencil from "./img/bc_pencil.png";
import bc_keyboard from "./img/bc_keyboard.png";
import icon_creditcard  from "./img/icon_creditcard.png";
import icon_arrow_2_squarepath  from "./img/icon_arrow_2_squarepath.png";
import icon_truck_box  from "./img/icon_truck_box.png";
import icon_emoji from "./img/icon_emoji.png";
import icon_person_macwindow  from "./img/icon_person_macwindow.png";
import icon_person_alt  from "./img/icon_person_alt.png";
import icon_app_applestore from "./img/icon_app_applestore.png";
import ia_ipad_iphone from "./img/ia_ipad_iphone.jpg";
import ia_ipad_mac from "./img/ia_ipad_mac.jpg";
import ia_ipad_watch from "./img/ia_ipad_watch.jpg";

const Ipad = () => {
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
        return <img src={ia_ipad_iphone} alt="Significant " className="active" />;
      case 1:
        return <img src={ia_ipad_mac} alt="Significant " />;
      case 2:
        return <img src={ia_ipad_watch} alt="Significant " />;
      default:
        return <img src={ia_ipad_iphone} alt="Significant " />;
    }
  };
  const items = [
    {
      name: "iPad Pro",
      img: "https://www.apple.com/v/ipad/home/cl/images/chapternav/ipadpro_light__bbws9fokxn3m_large.svg",
    },
    {
      name: "iPad Air",
      img: "https://www.apple.com/v/ipad/home/cl/images/chapternav/pa_ipadair13_gen6_ipadair11_gen6_light__des6pp5gjg2u_large.svg",
    },
    {
      name: "iPad",
      img: "https://www.apple.com/v/ipad/home/cl/images/chapternav/pa_ipadair_gen5_light__cboe3o98m36u_large.svg",
    },
    {
      name: "iPad mini",
      new: true,
      img: "https://www.apple.com/v/ipad/home/cl/images/chapternav/ipadmini_light__chl9hj51b9qq_large.svg",
    },
    {
      name: "Compare",
      img: "https://www.apple.com/v/ipad/home/cl/images/chapternav/ipad_compare_light__29tc9jjpoeqe_large.svg",
    },
    {
      name: "Apple Pencil",
      img: "https://www.apple.com/v/ipad/home/cl/images/chapternav/apple_pencil_light__kv36e49avuq2_large.svg",
    },
    {
      name: "Keyboards",
      img: "https://www.apple.com/v/ipad/home/cl/images/chapternav/keyboard_light__f5t6yntcyq2q_large.svg",
    },
    {
      name: "Accessories",
      img: "https://www.apple.com/v/ipad/home/cl/images/chapternav/pa_case_ipad_gen10_light__b2tng4s4n9n6_large.svg",
    },
    {
      name: "iPadOS 18",
      img: "https://www.apple.com/v/ipad/home/cl/images/chapternav/ipados_light__ebqgefp11ogi_large.svg",
    },
    {
      name: "Shop iPad",
      img: "https://www.apple.com/v/ipad/home/cl/images/chapternav/shop_ipad_light__btk7x6ps41yq_large.svg",
    },
  ];

  return (
    <div className="ipad-page">
      <div className="icon-menu1">
        {items.map((item, index) => (
          <div className="icon-item1" key={index}>
            <img src={item.img} alt={item.name} />
            <p>
              {item.name}
              {item.new && <br />}
              {item.new && <span className="new1">New</span>}
            </p>
          </div>
        ))}
      </div>
      <header className="ipad-header">
        <div className="ipad-education">
          Get 3% Daily Cash back with Apple Card. And pay for your new iPad over
          12 months, interest‑free when you choose to check out with Apple Card
          Monthly Installments.◊ <a href="#">Learn more</a>
        </div>
      </header>
      <main className="ipad-content">
        <h1>iPad</h1>
        <p>
          Touch, draw, and type <br></br>
          on one magical device.
        </p>
      </main>

      <div
        className="ipad-video-container"
        ref={videoContainerRef}
        onClick={handleVideoClick}
      >
        <video className="ipad-video" autoPlay muted>
          <source src={ipadmp4} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <header className="ipad-header1 fade-in">
        <h1>Get to know iPad.</h1>
      </header>
      <div className="ipad-info-section fade-in" ref={infoSectionRef}>
        <div className="ipad-info-card">
          <img src={ipad1} alt="Getting Started" />
          <div className="ipad-info-text white-text">
            <h2>Getting Started</h2>
            <p>Easy to use. Easy to love.</p>
          </div>
          <PlusOutlined className="plus-icon" />
        </div>
        <div className="ipad-info-card">
          <img src={ipad2} alt="Performance and Battery Life" />
          <div className="ipad-info-text white-text">
            <h2>Performance and Battery Life</h2>
            <p>Go fast. Go far.</p>
          </div>
          <PlusOutlined className="plus-icon" />
        </div>
        <div className="ipad-info-card">
          <img src={ipad3} alt="Mac and iPhone" />
          <div className="ipad-info-text white-text">
            <h2>Mac and iPhone</h2>
            <p>Dream team.</p>
          </div>
          <PlusOutlined className="plus-icon" />
        </div>
        <div className="ipad-info-card">
          <img src={ipad4} alt="Compatibility" />
          <div className="ipad-info-text white-text">
            <h2>Compatibility</h2>
            <p>Mac runs your favorite apps.</p>
          </div>
          <PlusOutlined className="plus-icon" />
        </div>
        <div className="ipad-info-card">
          <img src={ipad5} alt="Privacy and Security" />
          <div className="ipad-info-text white-text">
            <h2>Privacy and Security</h2>
            <p>Your business, nobody else's.</p>
          </div>
          <PlusOutlined className="plus-icon" />
        </div>
        <div className="ipad-info-card">
          <img src={ipad6} alt="Durability" />
          <div className="ipad-info-text white-text">
            <h2>Durability</h2>
            <p>Built to stand the test of time.</p>
          </div>
          <PlusOutlined className="plus-icon" />
        </div>
        <div className="ipad-info-card">
          <img src={ipad7} alt="Apple Values" />
          <div className="ipad-info-text white-text">
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
      <section className="exploreipad-lineup fade-in">
        <div className="exploreipad-header">
          <h1>Explore the lineup.</h1>
          <div className="exploreipad-links">
            <a href="#">Compare all models &gt;</a>
          </div>
        </div>
      </section>
      <div className="product3-spec-container fade-in">
  <section className="product3-lineup">
    <div className="product3_1">
      <img className="imgg" src={productipad1} alt="iPad Pro" />
      <div className="color-options3">
        <span className="color-circle3" style={{ backgroundColor: "black" }}></span>
        <span className="color-circle3" style={{ backgroundColor: "#f7f6f2" }}></span>
      </div>
      <h2>iPad Pro</h2>
      <p>The ultimate iPad experience with the most advanced technology.</p>
      <p className="price3">From $999 or $83.25/mo. for 12 mo.*</p>
      <div className="button-container3">
        <button>Learn more</button>
        <a href="#">Buy &gt;</a>
      </div>
      <div className="components3">
        <div className="component3">
          <h1>13″ or 11″</h1>
          <p>Ultra Retina XDR display<sup>4</sup></p>
          <p>ProMotion technology</p>
          <p>P3 wide color</p>
          <p>Nano-texture display glass option on 1TB and 2TB models</p>
        </div>
        <div className="component3">
          <img src={icon_chip_m4} alt="M4 chip" />
          <p>M4 chip</p>
        </div>
        <div className="component3">
          <img src={icon_apple_intelligence} alt="Apple Intelligence" />
          <p>Apple Intelligence<sup>1</sup></p>
        </div>
        <div className="component3">
          <img src={ipadpro13_gen7_camera} alt="Camera" />
          <p>12MP Wide camera</p>
          <p>4K video, ProRes</p>
        </div>
        <div className="component3">
          <img className="imgcomponent3"src={ipad_front_camera_landscape} alt="Front Camera" />
          <p>Landscape 12MP Ultra Wide front camera</p>
          <p>TrueDepth camera system</p>
        </div>
        <div className="component3_1">
          <img src={applepencil_vertical_gen4_gen3} alt="Pencil Support" />
          <p>Supports Apple Pencil Pro</p>
          <p>Supports Apple Pencil (USB-C)</p>
        </div>
        <div className="component3">
          <img src={magickeyboardfolio_ipad} alt="Keyboard Support" />
          <p>Supports Magic Keyboard for iPad Pro (M4)</p>
        </div>
      </div>
    </div>
    <div className="product3_1">
      <img className="img" src={productipad2} alt="iPad Air" />
      <div className="color-options3">
        <span className="color-circle3" style={{ backgroundColor: "#6b696e" }}></span>
        <span className="color-circle3" style={{ backgroundColor: "#d7e5e6" }}></span>
        <span className="color-circle3" style={{ backgroundColor: "#e3dee9" }}></span>
        <span className="color-circle3" style={{ backgroundColor: "#e5e0d8" }}></span>
      </div>
      <h2>iPad Air</h2>
      <p>Serious performance in a thin and light design.</p>
      <p className="price3">From $599 or $49.91/mo. for 12 mo.*</p>
      <div className="button-container3">
        <button>Learn more</button>
        <a href="#">Buy &gt;</a>
      </div>
      <div className="components3">
        <div className="component3_2">
          <h1>13″ or 11″</h1>
          <p>Liquid Retina display<sup>4</sup></p>
          <p>P3 wide color</p>
        </div>
        <div className="component3">
          <img src={icon_chip_m2} alt="M2 chip" />
          <p>M2 chip</p>
        </div>
        <div className="component3">
          <img src={icon_apple_intelligence} alt="Apple Intelligence" />
          <p>Apple Intelligence<sup>1</sup></p>
        </div>
        <div className="component3">
          <img src={ipadair13_gen6_camera} alt="Camera" />
          <p>12MP Wide camera</p>
          <p>4K video</p>
        </div>
        <div className="component3">
          <img className="imgcomponent3"src={ipad_front_camera_landscape} alt="Front Camera" />
          <p>Landscape 12MP Ultra Wide front camera</p>
        </div>
        <div className="component3_1">
          <img className="imggg"src={applepencil_vertical_gen4_gen3} alt="Pencil Support" />
          <p>Supports Apple Pencil Pro</p>
          <p>Supports Apple Pencil (USB-C)</p>
        </div>
        <div className="component3">
          <img src={magickeyboard_ipad} alt="Keyboard Support" />
          <p>Supports Magic Keyboard</p>
        </div>
      </div>
    </div>
    <div className="product3_1">
      <img className="img1" src={productipad3} alt="iPad" />
      <div className="color-options3">
        <span className="color-circle3" style={{ backgroundColor: "#6480a3" }}></span>
        <span className="color-circle3" style={{ backgroundColor: "#de6274" }}></span>
        <span className="color-circle3" style={{ backgroundColor: "#f0d95b" }}></span>
        <span className="color-circle3" style={{ backgroundColor: "#e3e4e5" }}></span>
      </div>
      <h2>iPad</h2>
      <p>The colorful, all-screen iPad for the things you do every day.</p>
      <p className="price3">From $349 or $29.08/mo. for 12 mo.*</p>
      <div className="button-container3">
        <button>Learn more</button>
        <a href="#">Buy &gt;</a>
      </div>
      <div className="components3">
        <div className="component3_2">
          <h1>10.9″</h1>
          <p>Liquid Retina display<sup>4</sup></p>
          <p>sRGB color</p>
        </div>
        <div className="component3">
          <img src={icon_chip_a14} alt="A14 Bionic chip" />
          <p>A14 Bionic chip</p>
        </div>
        <div className="component3">
          <span className="dash3">—</span>
        </div>
        <div className="component3_3">
          <img src={ipadair13_gen6_camera} alt="Camera" />
          <p>12MP Wide camera</p>
          <p>4K video</p>
        </div>
        <div className="component3">
          <img className="imgcomponent3" src={ipad_front_camera_landscape} alt="Front Camera" />
          <p>Landscape 12MP Ultra Wide front camera</p>
        </div>
        <div className="component3_1">
          <img className="imgggg" src={applepencil_vertical_gen3_gen1} alt="Pencil Support" />
          <p>Supports Apple Pencil (USB-C)</p>
          <p>Supports Apple Pencil (1st generation)<sup>3</sup></p>
        </div>
        <div className="component3">
          <img src={magickeyboard_m4_ipad} alt="Keyboard Support" />
          <p>Supports Magic Keyboard Folio</p>
        </div>
      </div>
    </div>
    <div className="product3">
      <img className="img2" src={productipad4} alt="iPad mini" />
      <div className="color-options3">
        <span className="color-circle3" style={{ backgroundColor: "#6b696e" }}></span>
        <span className="color-circle3" style={{ backgroundColor: "#d7e5e6" }}></span>
        <span className="color-circle3" style={{ backgroundColor: "#e3dee9" }}></span>
        <span className="color-circle3" style={{ backgroundColor: "#e5e0d8" }}></span>
      </div>
      <p className="new-models3">New</p>
      <h2>iPad mini</h2>
      <p>The full iPad experience in an ultraportable design.</p>
      <p className="price3">From $499 or $41.58/mo. for 12 mo.*</p>
      <div className="button-container3">
        <button>Learn more</button>
        <a href="#">Pre-order &gt;</a>
      </div>
      <div className="components3">
      <div className="component3_2">
          <h1>8.3″</h1>
          <p>Liquid Retina display<sup>5</sup></p>
          <p>P3 wide color</p>
        </div>
        <div className="component3">
          <img src={icon_chip_a17} alt="A17 Pro chip" />
          <p>A17 Pro chip</p>
        </div>
        <div className="component3">
          <img src={icon_apple_intelligence} alt="Apple Intelligence" />
          <p>Apple Intelligence<sup>1</sup></p>
        </div>
        <div className="component3">
          <img src={ipadmini_gen6_camera} alt="Camera" />
          <p>12MP Wide camera</p>
          <p>4K video</p>
        </div>
        <div className="component3">
          <img  src={ipad_front_camera} alt="Front Camera" />
          <p>12MP Ultra Wide front camera</p>
        </div>
        <div className="component3_1">
          <img className="imggg"src={applepencil_vertical_gen4_gen3} alt="Pencil Support" />
          <p>Supports Apple Pencil Pro</p>
          <p>Supports Apple Pencil (USB-C)</p>
        </div>
        <div className="component3">
          <img src={magickeyboard} alt="Keyboard Support" />
          <p>Supports Bluetooth keyboards</p>
        </div>
      </div>
    </div>
  </section>
</div>
<section className="ipad-essentials fade-in">
        <div className="ipad-essentials-header">
          <h1>iPad  essentials.</h1>
         
        </div>

        <div className="essentials-content3">
          <div className="essential-item3_1">
            <h2>Apple Pencil</h2>
            <p>Dream it up. Jot it down.</p>
            <a href="#"> Learn more &gt;</a>
            <img src={bc_pencil} alt="Mac accessories" />
          </div>
          
          <div className="essential-item3">
            <img src={bc_keyboard} alt="Studio Display" />
            <h2>Keyboards for iPad</h2>
            <p>Type it out. Take it with you.</p>
            <a href="#">Learn more &gt;</a>
          </div>
        </div>
      </section>
      <header className="ipad-header">
        <div className="buy-ipad-section">
          <h1>
            Why Apple is the best <br /> place to buy iPad.
          </h1>
          <div className="buy-ipad-links">
            <a href="#">Shop iPad &gt;</a>
          </div>
        </div>
      </header>

      <div className="card-section3 fade-in" ref={cardSectionRef}>
        <div className="card-item3">
          <img className="iconImg"src={icon_creditcard} alt="Icon 1" />
          <h2>
          Pay over time, 
            <br /> interest‑free.
          </h2>
          <p>
          When you choose to check out with Apple Card Monthly Installments.◊
          </p>
          <PlusOutlined className="plus-icon3" />
        </div>
        <div className="card-item3">
          <img src={icon_arrow_2_squarepath} alt="Icon 2" />
          <h2>
          Save up to $520 with<br /> Apple Trade In.
          </h2>
          <p>
          Get credit toward your next iPad when you trade in an eligible device.6

          </p>
          <PlusOutlined className="plus-icon3" />
        </div>
        <div className="card-item3">
          <img className="iconImg"src={icon_truck_box} alt="Icon 3" />
          <h2>
          Get flexible delivery <br />and easy pickup.
          </h2>
          <p>
          Choose two‑hour delivery from an Apple Store, free delivery, or easy pickup options.
          </p>
          <PlusOutlined className="plus-icon3" />
        </div>
        <div className="card-item3">
          <img className="iconImgg"src={icon_emoji} alt="Icon 4" />
          <h2>
          Personalize your iPad <br /> for free.
          </h2>
          <p>
          Engrave your new iPad with a mix of emoji, names, initials and numbers.

          </p>
          <PlusOutlined className="plus-icon3" />
        </div>
        <div className="card-item3">
          <img src={icon_person_macwindow} alt="Icon 5" />
          <h2>
          Shop live with<br />  a Specialist.
          </h2>
          <p>
          Let us guide you live over video and answer all of your questions.
          </p>
          <PlusOutlined className="plus-icon3" />
        </div>
        <div className="card-item3">
          <img className="iconImggg"src={icon_person_alt} alt="Icon 6" />
          <h2>
          Meet your new iPad<br /> with Personal Setup.
          </h2>
          <p>
          Jump into online sessions with a Specialist to set up your iPad and discover new features.

          </p>
          <PlusOutlined className="plus-icon3" />
        </div>
        <div className="card-item3">
          <img className="iconImgggg" src={icon_app_applestore} alt="Icon 7" />
          <h2>
            Explore a shopping <br></br>experience designed <br></br>around you.
          </h2>
          <p>
            Use the Apple Store app to get a more <br></br>personal way to shop.
          </p>
          <PlusOutlined className="plus-icon3" />
        </div>
      </div>

      <div className="nav-buttons3">
        <button onClick={scrollLeft}>
          <LeftOutlined />
        </button>
        <button onClick={scrollRight}>
          <RightOutlined />
        </button>
      </div>

      <section className="Significant-section3 fade-in">
      <header className="ipad-header1">
      <h1>Significant others.</h1>
      </header>
      <div className="Significant-content3">
        <div className="Significant-text3">
          <div className="Significant-item3">
            <h2 onClick={() => toggleSection(0)}>
            iPad and iPhone {activeIndex === 0 ? <UpOutlined /> : <DownOutlined />}
            </h2>
            <p className={activeIndex === 0 ? 'visible3' : ''}>
            iPad is perfect for taking the content you capture on iPhone and bringing it to life on an immersive canvas. You can shoot videos and photos on your iPhone and use the large display of your iPad to edit, add animations, and more. You can also pick up wherever you left off with Handoff.
            </p>
          </div>
          <div className="Significant-item3">
            <h2 onClick={() => toggleSection(1)}>
            iPad and Mac{activeIndex === 1 ? <UpOutlined /> : <DownOutlined />}
            </h2>
            <p className={activeIndex === 1 ? 'visible3' : ''}>
            iPad and Mac are designed to work together to form the ultimate creative setup. Sketch on your iPad and have it appear instantly on your Mac with Sidecar. Then use your iPad for drawing or editing with Apple Pencil or as a second display. Extend your workflow to new places, and when you return to your desk, Universal Control allows you to use one mouse or trackpad seamlessly across both devices.
            </p>
          </div>
          <div className="Significant-item3">
            <h2 onClick={() => toggleSection(2)}>
            iPad and Apple Watch{activeIndex === 2 ? <UpOutlined /> : <DownOutlined />}
            </h2>
            <p className={activeIndex === 2 ? 'visible3' : ''}>
            iPad is a great way to optimize your workouts while tracking your progress on Apple Watch. See personal metrics from Apple Watch integrated on the screen of your iPad in real time. The sensors in Apple Watch combine with advanced algorithms to provide data that keeps you motivated. And see it all come together on your Health app on iPad.
            </p>
          </div>
        </div>
        <div className="Significant-image3">
        {getImage()}
        </div>
      </div>
    </section>

    <section className="ipad-links-section">
<header className="ipad-header1">
      <h1>iPad</h1>
      </header>
  <div className="ipad-links-container">
  <div className="ipad-links-column">
      <h2>Explore iPad</h2>
      <ul>
        <li><span className="highlight5">Explore All iPad</span></li>
        <li><span className="highlight5">iPad Pro</span></li>
        <li><span className="highlight5">iPad Air</span></li>
        <li><span className="highlight5">iPad</span></li>
        <li><span className="highlight5">iPad mini</span></li>
        <li><span className="highlight5">Apple Pencil</span></li>
        <li><span className="highlight5">Keyboards</span></li>
      
        <li><span className="highlight4">Compare iPhad</span></li>
        <li><span className="highlight4">Why iPad</span></li>
      </ul>
    </div>
    <div className="ipad-links-column">
      <h2>Shop iPad</h2>
      <ul>
        <li><span className="highlight4">Shop iPad</span></li>
        <li><span className="highlight4">iPad Accessories</span></li>
        <li><span className="highlight4">Apple Trade In</span></li>
        <li><span className="highlight4">Financing</span></li>
      </ul>
    </div>
    <div className="ipad-links-column">
      <h2>More from iPad</h2>
      <ul>
        <li><span className="highlight4">iPad Support</span></li>
        <li><span className="highlight4">AppleCare+ for iPad</span></li>
        <li><span className="highlight4">iPadOS 18</span></li>
        <li><span className="highlight4">Apple Intelligence</span></li>
        <li><span className="highlight4">Apps by Apple</span></li>
      
        <li><span className="highlight4">iCloud+</span></li>
        <li><span className="highlight4">Education</span></li>
        
      </ul>
    </div>
  </div>
</section>
    </div>
  );
};

export default Ipad;
