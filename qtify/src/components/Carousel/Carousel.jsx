import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import styles from "./Carousel.module.css";

import "swiper/css";
import "swiper/css/navigation";

import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";

function Carousel({ data, renderComponent }) {
  const swiperRef = useRef(null);

  return (
    <div className={styles.wrapper}>
      {/* NAVIGATION MUST BE OUTSIDE */}
      <CarouselLeftNavigation />
      <CarouselRightNavigation />

      <Swiper
        modules={[Navigation]}
        slidesPerView={"auto"}
        spaceBetween={40}
        allowTouchMove
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        navigation={{
          prevEl: ".carousel-left-nav",
          nextEl: ".carousel-right-nav",
        }}
      >
        {data.map((ele, index) => (
          <SwiperSlide key={index}>
            {renderComponent(ele)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;










//GOT succes 
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import { memo } from "react";

// import "swiper/css";
// import "swiper/css/navigation";
// import styles from "./Carousel.module.css";

// function Carousel({ data, renderComponent }) {
//   return (
//     <div className={styles.wrapper}>
//       <Swiper
//         modules={[Navigation]}
//         navigation
//         slidesPerView={6}
//         spaceBetween={40}
//         initialSlide={0}

//         /* 🔴 THIS IS THE KEY FIX */
//         observer={false}
//         observeParents={false}
//         observeSlideChildren={false}
//       >
//         {data.map((ele) => (
//           <SwiperSlide key={ele.id}>
//             {renderComponent(ele)}
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

// export default memo(Carousel);






















// import { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";

// import styles from "./Carousel.module.css";

// function Carousel({ data, renderComponent }) {
//   const swiperRef = useRef(null);

//   return (
//     <div className={styles.wrapper}>
//       {/* STATIC NAVIGATION BUTTONS (Cypress-safe) */}
//       <button
//         className="swiper-button-prev"
//         onClick={() => swiperRef.current?.slidePrev()}
//       />
//       <button
//         className="swiper-button-next"
//         onClick={() => swiperRef.current?.slideNext()}
//       />

//       <Swiper
//         onSwiper={(swiper) => (swiperRef.current = swiper)}
//         slidesPerView={6}
//         spaceBetween={40}
//         initialSlide={0}
//       >
//         {data.map((ele) => (
//           <SwiperSlide key={ele.id}>
//             {renderComponent(ele)}
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

// export default Carousel;










// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";

// import styles from "./Carousel.module.css";
// import "swiper/css";
// import "swiper/css/navigation";

// function Carousel({ data, renderComponent }) {
//   return (
//     <div className={styles.wrapper}>
//       <Swiper
//         style={{ padding: "0px 20px" }}
//         initialSlide={0}
//         modules={[Navigation]}
//         navigation
//         slidesPerView={6}
//         spaceBetween={40}
//       >
//         {data.map((ele) => (
//           <SwiperSlide key={ele.id}>
//             {renderComponent(ele)}
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

// export default Carousel;








// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";

// import styles from "./Carousel.module.css";
// import "swiper/css";
// import "swiper/css/navigation";

// // import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
// // import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";

// function Carousel({ data, renderComponent }) {
//   return (
//     <div className={styles.wrapper}>
//       <Swiper
//       style={{ padding: "0px 20px" }}
//       initialSlide={0}
//       modules={[Navigation]}
//       navigation
//       slidesPerView={6}
//       spaceBetween={40}
//     >


//         {/* <div>
//           <CarouselLeftNavigation />
//           <CarouselRightNavigation />
//         </div> */}

//         {data.map((ele) => (
//           <SwiperSlide key={ele.id}>
//             {renderComponent(ele)}
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

// export default Carousel;



//  <Swiper
//         style={{ padding: "0px 20px" }}
//         initialSlide={0}
//         modules={[Navigation]}
//         slidesPerView={"auto"}
//         spaceBetween={40}
//         allowTouchMove
//       >











// import React, { useEffect } from "react";
// // import React, { useEffect, useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// // import { Pagination, Navigation } from "swiper";
// import { Navigation } from "swiper/modules";
// // import { Navigation, Pagination } from "swiper/modules";

// import { useSwiper } from "swiper/react";
// import styles from "./Carousel.module.css";
// import "swiper/css";
// import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
// import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";

// // added below
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const Controls = ({ data }) => {
//   // const swiper = useSwiper();

//   // useEffect(() => {
//   //   swiper.slideTo(0);
//   // }, [data]);
//   useEffect(() => {
//   // carousel logic
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);


//   return <></>;
// };

// function Carousel({ data, renderComponent }) {
//   return (
//     <div className={styles.wrapper}>
//       <Swiper
//         style={{ padding: "0px 20px" }}
//         initialSlide={0}
//         modules={[Navigation]}
//         slidesPerView={"auto"}
//         spaceBetween={40}
//         allowTouchMove
//       >
//         <Controls data={data} />
//         <div>
//           <CarouselLeftNavigation />
//           <CarouselRightNavigation />
//         </div>
//         {data.map((ele) => (
//           <SwiperSlide>{renderComponent(ele)}</SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

// export default Carousel;