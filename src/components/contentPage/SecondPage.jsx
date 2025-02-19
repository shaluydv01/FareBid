import React, { useEffect, useRef } from "react";
import "./secondPage.css";

const features = [
  {
    title: "Browse & Search",
    description: "Find trending auctions and must-have items.",
  },
  {
    title: "Place Your Bid",
    description: "Compete in real-time to win exclusive deals.",
  },
  {
    title: "Sell with Confidence",
    description: "List your items and attract top bidders.",
  },
  {
    title: "Secure Checkout",
    description: "Complete transactions safely and effortlessly.",
  },
];

const chooseUs = [
  {
    title: "Wide Selection",
    description: "Browse auctions across multiple categories.",
  },
  {
    title: "Real-Time Bidding",
    description: "Engage in live auctions and outbid competitors.",
  },
  {
    title: "Sell Fast & Easy",
    description: "List your items in minutes and reach global buyers.",
  },
  {
    title: "Instant Alerts",
    description: "Get notified about bids, offers, and auction results.",
  },
  {
    title: "Secure Transactions",
    description: "Enjoy safe and hassle-free payments.",
  },
];

const SecondPage = () => {
  const featureRefs = useRef([]);
  const chooseUsRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      featureRefs.current.forEach((item, index) => {
        if (item) {
          const itemPosition = item.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;

          if (itemPosition < windowHeight - 50) {
            item.classList.add("show");
          }
        }
      });

      chooseUsRefs.current.forEach((item, index) => {
        if (item) {
          const itemPosition = item.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;

          if (itemPosition < windowHeight - 50) {
            item.classList.add("show");
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    // Delay check to ensure rendering is complete
    setTimeout(handleScroll, 500);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* <!----------------------------------How It Works?------------------------------------> */}
      <div className="w-100 p-5 d-flex justify-content-between align-items-center">
        <div style={{ fontSize: "18px" }}>
          <h2 className="text-danger fw-bold">How It Works?</h2>
          {features.map((feature, index) => (
            <p
              key={index}
              ref={(el) => {
                featureRefs.current[index] = el;
              }}
              className="list-item1"
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              <span className="highlight">{feature.title}</span> –{" "}
              {feature.description}
            </p>
          ))}
        </div>
        <div>
          <video
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            style={{ height: "20vw" }}
            controls
          ></video>
        </div>
      </div>

      {/* <!----------------------------------Why choose us?--------------------------------------------> */}
      <div className="w-100 p-5 d-flex justify-content-between align-items-center">
        <div>
          <video
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            style={{ height: "20vw" }}
            controls
          ></video>
        </div>
        <div style={{ fontSize: "18px" }}>
          <h2 className="text-danger fw-bold">Why Choose Us?</h2>
          {chooseUs.map((choose, index) => (
            <p
              key={index}
              ref={(el) => {
                chooseUsRefs.current[index] = el;
              }}
              className="list-item2"
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              <span className="highlight">{choose.title}</span> –{" "}
              {choose.description}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
