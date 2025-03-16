import React from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

function Consultation() {
  const [consultationStatus, setConsultationStatus] = React.useState({});

  const bookConsultation = async () => {
    try {
      const response = await axios.post('https://health-app-vc8s.onrender.com/api/book-consultation');
      setConsultationStatus(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Navbar />
      <h2>Consultation Booking</h2>
      <button onClick={bookConsultation}>Book Consultation</button>
      <p>{consultationStatus.status}</p>
      <Footer />
    </div>
  );
}

export default Consultation;
