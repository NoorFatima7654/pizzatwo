import React from 'react';

export default function Footer() {
  return (
    <div>
      <footer
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          margin: '40px',
          marginBottom: '0',
        }}
      >
        <nav
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '24px',
            color: '#10B981', // Tailwind 'text-state-500'
            fontWeight: '500',
            background: 'linear-gradient(to right, black, #1F2937)', // Tailwind 'bg-gradient-to-r f from-black to-state-700'
        }}
      >
        <a
          style={{
            color: '#F59E0B', // Tailwind 'text-amber-500'
            transition: 'color 0.3s',
          }}
          href="#"
        >
          Home
        </a>
        <a
          style={{
            color: '#F59E0B',
            transition: 'color 0.3s',
          }}
          href="#"
        >
          About
        </a>
        <a
          style={{
            color: '#F59E0B',
            transition: 'color 0.3s',
          }}
          href="#"
        >
          Delivery
        </a>
        <a
          style={{
            color: '#F59E0B',
            transition: 'color 0.3s',
          }}
          href="#"
        >
          Contact
        </a>
      </nav>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          transition: 'transform 0.3s ease',
        }}
      >
        <a href="https://facebook.com" target="_blank" rel="nofollow noopener">
          <img
            style={{
              width: '30px',
              height: '30px',
            }}
            src="https://img.icons8.com/fluent/30/000000/facebook-new.png"
            alt="facebook logo"
          />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="nofollow noopener">
          <img
            style={{
              width: '30px',
              height: '30px',
            }}
            src="https://img.icons8.com/fluent/30/000000/linkedin-2.png"
            alt="linkedin logo"
          />
        </a>

        <a href="https://instagram.com" target="_blank" rel="nofollow noopener">
          <img
            style={{
              width: '30px',
              height: '30px',
            }}
            src="https://img.icons8.com/fluent/30/000000/instagram-new.png"
            alt="instagram logo"
          />
        </a>

        <a href="https://twitter.com" target="_blank" rel="nofollow noopener">
          <img
            style={{
              width: '30px',
              height: '30px',
            }}
            src="https://img.icons8.com/fluent/30/000000/twitter.png"
            alt="twitter logo"
          />
        </a>
      </div>

      <p
        style={{
          textAlign: 'center',
          color: '#F59E0B', // Tailwind 'text-amber-400'
          fontWeight: '500',
          marginBottom: '32px',
          transition: 'color 0.3s',
        }}
      >
        2024 Noor Fatima. All Rights Reserved.
      </p>
      <br />
      <br />
      <br />
    </footer>
   </div>
  );
}


        