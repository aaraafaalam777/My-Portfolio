import React, { useState, useEffect } from 'react';
import {InfinitySpin} from 'react-loader-spinner';
import App from '../App.js'; // import your main App component

 function LoadingWrapper() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request to fetch your data
    setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds delay
  }, []);

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}>
        <InfinitySpin color="#00BFFF" loading={true} size={50} />
      </div>
    );
  } else {
    return <App />;
  }
}

export default LoadingWrapper;



