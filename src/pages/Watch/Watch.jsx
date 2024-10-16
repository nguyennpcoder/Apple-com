import React from 'react';

const Watch = () => {
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
    </div>
  );
};

export default Watch;