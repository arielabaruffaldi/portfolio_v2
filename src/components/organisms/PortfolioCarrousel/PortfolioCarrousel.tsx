import { Swiper, SwiperSlide } from "swiper/react";

import styles from "./PortfolioCarrousel.module.scss";
import { projects } from "@/utils/projects";
import { Link } from "react-router-dom";
import { useState } from "react";

import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Navigation, Pagination } from "swiper/modules";
import { Text } from "@/components/atoms/Text/Text";

export const PortfolioCarrousel = () => {
  const [itemId, setItemId] = useState(0);

  const onMouseEnter = (e) => {
    //console.log(e)
  };

  return (
    <div
      className={`${styles.portfolioCarrousel} portfolioCarrousel ${styles.dark}`}
    >
      <Swiper
        modules={[Navigation, Pagination, Mousewheel]}
        spaceBetween={30}
        slidesPerView={2}
        onSlideChange={(swiper) => setItemId(swiper.activeIndex)}
        mousewheel={{ forceToAxis: true, sensitivity: 0.5 }}
        centeredSlides={true}
        pagination={{ clickable: true }}
        navigation={true}
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 50,
            navigation: false,
          },
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <Link
              to={`proyectos/${project.pathUrl}`}
              onMouseEnter={(e) => onMouseEnter(e)}
            >
              <div className={styles.swiperContainer}>
                {index === itemId ? (
                  <Text
                    className={`${styles.title} ${styles.title__active}`}
                    font="secondary"
                    fontWeight="bold"
                  >
                    {project.pathUrl}
                  </Text>
                ) : (
                  <Text
                    className={styles.title}
                    font="secondary"
                    fontWeight="bold"
                  >
                    {project.pathUrl}
                  </Text>
                )}
              </div>
            </Link>
          </SwiperSlide>
        ))}
        <div
          style={{
            backgroundImage: `url(/${projects[itemId]?.thumbCarrusel || ""})`,
          }}
          className={styles.divBg}
        ></div>
      </Swiper>
    </div>
  );
};
