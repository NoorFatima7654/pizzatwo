// 'use client'

// import React, { useState } from "react"; 

// const Testimonals = () => {
//   const testimonals = [
//     {
//       name: 'Sarah M.',
//       feedback: 'The food is absolutely delicious! The flavors were incredible, and the service was top-notch. I\'ll definitely be coming back!',
//     },
//     {
//       name: 'James L.',
//       feedback: 'A fantastic dining experience! The ambiance is lovely, and the staff is very attentive. Highly recommend the pasta dishes!',
//     },
//     {
//       name: 'Emily R.',
//       feedback: 'I ordered from here for the first time, and I was blown away! The delivery was quick, and everything was hot and fresh.',
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextTestimonal = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonals.length);
//   };

//   return (
//     <section style={{ background: 'linear-gradient(to right, black, #374151)', padding: '40px 0' }}>
//       <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
//         <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '24px', color: '#F59E0B' }}>
//           What Our Customers Say
//         </h2>
//         <div style={{
//           backgroundColor: 'white',
//           boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//           borderRadius: '8px',
//           padding: '24px',
//           transition: 'all 0.2s ease-in-out'
//         }}>
//           <p style={{ fontStyle: 'italic', color: '#4B5563' }}>
//             "{testimonals[currentIndex].feedback}"
//           </p>
//           <h3 style={{ fontWeight: '600', color: '#1F2937' }}>
//             {testimonals[currentIndex].name}
//           </h3>
//         </div>
//         <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
//           <button 
//             onClick={nextTestimonal}
//             style={{
//               backgroundColor: '#38BDF8',
//               color: 'white',
//               fontWeight: 'bold',
//               padding: '12px 16px',
//               borderRadius: '8px',
//               cursor: 'pointer',
//               transition: 'all 0.2s ease',
//             }}
//             onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2563EB'}
//             onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#38BDF8'}
//           >
//             Next Testimonial
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonals;

'use client'

import React, { useState } from "react"; 

const Testimonals = () => {
  const testimonals = [
    {
      name: 'Sarah M.',
      feedback: 'The food is absolutely delicious! The flavors were incredible, and the service was top-notch. I\'ll definitely be coming back!',
    },
    {
      name: 'James L.',
      feedback: 'A fantastic dining experience! The ambiance is lovely, and the staff is very attentive. Highly recommend the pasta dishes!',
    },
    {
      name: 'Emily R.',
      feedback: 'I ordered from here for the first time, and I was blown away! The delivery was quick, and everything was hot and fresh.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonal = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonals.length);
  };

  return (
    <section style={{ background: 'linear-gradient(to right, black, #374151)', padding: '40px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '24px', color: '#F59E0B' }}>
          What Our Customers Say
        </h2>
        <div style={{
          backgroundColor: 'white',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          borderRadius: '8px',
          padding: '24px',
          transition: 'all 0.2s ease-in-out'
        }}>
          <p style={{ fontStyle: 'italic', color: '#4B5563' }}>
            `{testimonals[currentIndex].feedback}`
          </p>
          <h3 style={{ fontWeight: '600', color: '#1F2937' }}>
            {testimonals[currentIndex].name}
          </h3>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
          <button 
            onClick={nextTestimonal}
            style={{
              backgroundColor: '#38BDF8',
              color: 'white',
              fontWeight: 'bold',
              padding: '12px 16px',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2563EB'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#38BDF8'}
          >
            Next Testimonial
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonals;

