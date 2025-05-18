import React from 'react';

const Choose = () => {
  return (
    <div className='container my-5'>
      <div className='row align-items-center'>
      
        <div className='col-md-6 text-center'>
          <img
            src='/Illustraion.avif'
            alt='Why Choose Us'
            style={{ borderRadius: '20px', width: '100%', maxWidth: '350px' }}
          />
        </div>

        <div className='col-md-6'>
          <h2>Why Choose Us</h2>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px'}}>
            <li style={{marginTop:"20px"}}>Reliable and secure solutions</li>
            <li style={{marginTop:"20px"}}>Experienced and professional team</li>
            <li style={{marginTop:"20px"}}>Customer-focused approach</li>
            <li style={{marginTop:"20px"}}>24/7 Support and maintenance</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Choose;
