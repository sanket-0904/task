import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Slider.css";

const testimonials = new Array(6).fill({
  text: "This course completely changed how I approach digital marketing. The strategies I learned helped me double my leads in just a month.",
  name: "Rohan Mehta",
  avatar: "https://randomuser.me/api/portraits/men/32.jpg",
});

const Slider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <div className="swiper-container">
      <span>
        <h2 className="swiper-title">Testimonials</h2>
      </span>

      <Swiper
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={4}
        loop={true}
        onSwiper={setSwiperInstance}
        breakpoints={{
          1200: { slidesPerView: 4 },
          992: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
        className="custom-swiper"
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="card">
              <p>{t.text}</p>
              <div className="profile">
                <img src={t.avatar} alt="avatar" />
                <span>{t.name}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="custom-nav">
        <button ref={prevRef} className="custom-prev">
          ←
        </button>
        <button ref={nextRef} className="custom-next">
          →
        </button>
      </div>
    </div>
  );
};

export default Slider;
