import React from 'react'

const LocationInfo = () => {
  return (
<div className="trouvez-nous">
      <h2>Trouvez nous dans Google Maps</h2>
      <div className="map-container">
        <iframe
          title="location-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3..."
          width="100%"
          height="100%"
          style={{ border:0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="contact-info">
        <p>Email: Sipropre19@outlook.fr</p>
        <p>Tel: +33 6 05 53 93 68</p>
        <p>24H/24 - 7J/7</p>
      </div>
    </div>
  )
}

export default LocationInfo