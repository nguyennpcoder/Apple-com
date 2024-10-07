import React from 'react';
import './AppleExperience.css';

const AppleExperience = () => {
  const experiences = [
    {
      title: "MLS Season Pass",
      description: "Sign up for MLS Season Pass on Apple TV.",
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-mlsleagues-202407?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1718926369972",
    },
    {
      title: "Six Apple services. One easy subscription.",
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-subscriptions-202108_GEO_US?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1626375546000",
    },
    {
      title: "We've got you covered.",
      description: "AppleCare+ now comes with unlimited repairs for accidental damage protection.",
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-applecare-202409?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1723747544269",
    },
    {
      title: "Discover all the ways to use Apple Pay.",
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-applepay-202409_GEO_US?wid=960&hei=1000&fmt=jpeg&qlt=95&.v=1725374577628",
    },
    {
      title: "Home",
      description: "See how one app can control your entire home.",
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-homekit-202405_GEO_US?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1715960298510",
    },
  ];

  return (
    <div className="apple-experience">
      <h2>The Apple experience. <span>Do even more with Apple products and services.</span></h2>
      <div className="experience-cards">
        {experiences.map((experience, index) => (
          <div key={index} className="experience-card">
            <img src={experience.image} alt={experience.title} className="experience-image" />
            <div className="experience-info">
              <h3>{experience.title}</h3>
              {experience.description && <p>{experience.description}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppleExperience;