export default function CarouselRightNavigation() {
  return (
    <button
      type="button"
      className="carousel-right-nav"
      aria-label="next-slide"
    />
  );
}







// import styles from "./CarouselRightNavigation.module.css";
// import { ReactComponent as RightArrow } from "../../../assets/RightArrow.svg";

// export default function CarouselRightNavigation() {
//   return (
//     <div className={`${styles.rightNavigation} carousel-right-nav`}>
//       <RightArrow />
//     </div>
//   );
// }









// // import React, { useEffect, useState } from "react";
// import React, { useState } from "react";
// import { useSwiper } from "swiper/react";
// import styles from "./CarouselRightNavigation.module.css";
// import { ReactComponent as RightArrow } from "../../../assets/RightArrow.svg";

// export default function CarouselRightNavigation() {
//   const swiper = useSwiper();
//   const [isEnd, setIsEnd] = useState(swiper.isEnd);

//   // useEffect(() => {
//   //   swiper.on("slideChange", function () {
//   //     setIsEnd(swiper.isEnd);
//   //   });
//   // }, []);

//   swiper.on("slideChange", function () {
//     setIsEnd(swiper.isEnd);
//   });

//   return (
//     <div className={styles.rightNavigation}>
//       {!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
//     </div>
//   );
// }