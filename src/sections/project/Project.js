import "./project.css";
import data from "./data";
import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/swiper-bundle.min.css";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper";

function Project() {
  return (
    <section id="project">
      <div className="project__title-highlight">
        <h2>My Project</h2>
      </div>

      <div className="container project__container">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Keyboard, Pagination, Navigation]}
          className="mySwiper"
        >
          {data.map((item, index) => (
            <SwiperSlide className="project__swiper-item">
              <div className="project__item-image">
                <img src={item.img} alt="" />
              </div>
              <h3>{item.title}</h3>
              <div className="porfolio__item-cta">
                <a
                  href={item.srcCode}
                  className="btn primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                {item.id !== 7 && (
                  <a
                    href={item.liveDemo}
                    className="btn primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Project;
