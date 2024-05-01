// import React, { useState, useEffect } from 'react';

// const Carousel = ({ slides }) => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
//     }, 3000);

//     return () => clearInterval(intervalId);
//   }, [slides.length]);

//   return (
//     <div className="relative w-full overflow-hidden">
//       <div
//         className="flex transition-transform duration-500 ease-in-out"
//         style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//       >
//         {slides.map((slide, index) => (
//           <div key={index} className="w-full">
//             {/* Your slide content here */}
//             <img src={slide.imageUrl} alt={slide.alt} className="w-full" />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Carousel;
