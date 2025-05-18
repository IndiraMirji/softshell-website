import React from 'react';
import { FaUpload, FaChartLine, FaMoneyBillWave } from 'react-icons/fa'; // Using react-icons

const Work = () => {
  return (
    <div className="work-section" style={{ textAlign: 'center', padding: '60px 20px', backgroundColor: '#fff9fb' }}>
      <h2 style={{ marginBottom: '40px' }}>How It Works</h2>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '60px', flexWrap: 'wrap' }}>
      
        <div style={{ width: '200px' }}>
          <FaUpload size={40} color="blue" />
          <h4>Upload License</h4>
          <p style={{ fontSize: '14px' }}>Submit your driver's license or vehicle documents.</p>
        </div>

        <div style={{ width: '200px' }}>
          <FaChartLine size={40} color="green" />
          <h4>Get Valuation</h4>
          <p style={{ fontSize: '14px' }}>We assess the value and provide a fair offer quickly.</p>
        </div>

        <div style={{ width: '200px' }}>
          <FaMoneyBillWave size={40} color="red" />
          <h4>Get Paid</h4>
          <p style={{ fontSize: '14px' }}>Accept the offer and receive your payment instantly.</p>
        </div>
      </div>
    </div>
  );
};

export default Work;
