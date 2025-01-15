import React from 'react';

const Contact = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f4e5de',
        padding: '50px',
        borderRadius: '15px',
        margin: '50px auto',
        marginTop: '120px',
        width: '80%',
        border: '4px solid #f6f3f3',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        flexDirection: 'row', // Default for larger screens
        marginBottom: '-80px',
        position: 'relative',
      }}
    >
      {/* Left Section: Form Inputs */}
      <div
        style={{
          flex: 1,
          padding: '20px',
          width: '100%', // Ensures proper layout on smaller devices
        }}
      >
        <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>
          What’s your name?
        </label>
        <input
          type="text"
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            marginBottom: '20px',
          }}
        />
        <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>
          Message
        </label>
        <textarea
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            marginBottom: '20px',
          }}
          rows="4"
        ></textarea>
        <button
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '10px 20px',
            backgroundColor: '#f1736a',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          Send Message{' '}
          <span style={{ marginLeft: '10px', fontSize: '16px', transform: 'rotate(45deg)' }}>
            ↗
          </span>
        </button>
      </div>

      {/* Right Section: Contact Header */}
      <div
        style={{
          flex: 1,
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          width: '100%', // Ensures proper layout on smaller devices
        }}
      >
        <p style={{ marginBottom: '10px', fontWeight: 'bold' }}>Have any query?</p>
        <h1 style={{ color: '#f1736a', fontSize: '36px', margin: 0 }}>CONTACT US</h1>
      </div>

      {/* Responsive Styles */}
      <style>
        {`
          @media (max-width: 768px) {
            div[style*="flex-direction: row"] {
              flex-direction: column !important;
              padding: 30px;
            }
            div[style*="flex: 1"] {
              width: 100%;
              padding: 10px;
            }
            h1 {
              font-size: 28px;
            }
            input, textarea {
              padding: 12px;
            }
            button {
              padding: 12px 24px;
            }
          }

          @media (max-width: 480px) {
            h1 {
              font-size: 24px;
            }
            div[style*="flex-direction: column"] {
              padding: 20px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Contact;
