import React from 'react'
import carte from "../../../image/card.png"
const ContactForm = () => {
  return (
    <div className="contact-page">
      <div className="contact-form-section">
        <h2 className="section-title">Demande de devis</h2>
        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Nom" />
            <input type="email" placeholder="E-mail" />
          </div>
          <div className="form-row">
            <input type="text" placeholder="Numéro de téléphone" />
            <select name="service" id="service">
              <option value="">Service</option>
              <option value="residential">Nettoyage résidentiel</option>
              <option value="commercial">Nettoyage commercial</option>
            </select>
          </div>
          <div className="form-row">
            <input type="text" placeholder="Adresse" />
            <input type="text" placeholder="Code postal" />
          </div>
          <textarea placeholder="Décrivez votre besoin"></textarea>
          <button type="submit">Envoyer ma demande</button>
        </form>
      </div>
      <div className="map-container">
        <h2 className="section-title">Trouvez nous dans Google Maps</h2>
        <img src={carte} alt=''/>
    
      </div>
    </div>
  )
}

export default ContactForm