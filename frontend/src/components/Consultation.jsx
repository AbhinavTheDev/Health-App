import React from 'react';
import axios from 'axios';

function Consultation() {
  const [consultationStatus, setConsultationStatus] = React.useState({});

  const bookConsultation = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/api/book-consultation');
      setConsultationStatus(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Consultation Booking</h2>
      <button onClick={bookConsultation}>Book Consultation</button>
      <p>{consultationStatus.status}</p>
    </div>
  );
}

export default Consultation;
