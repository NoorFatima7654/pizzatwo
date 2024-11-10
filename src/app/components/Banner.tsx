import React from 'react';

const Banner = () => {
  return (
    <div
      style={{
        backgroundColor: '#2d3748', // bg-gray-800
        color: '#ffffff', // text-white
        padding: '40px', // p-10
        textAlign: 'center', // text-center
      }}
    >
      <h1
        style={{
          fontSize: '2.25rem', // text-4xl (36px)
          fontWeight: 'bold', // font-bold
          marginBottom: '16px', // mb-4
        }}
      >
        Welcome to Our Website
      </h1>
      <p
        style={{
          fontSize: '1.125rem', // text-lg (18px)
        }}
      >
        We offer the best services for your needs.
      </p>
    </div>
  );
};

export default Banner;
