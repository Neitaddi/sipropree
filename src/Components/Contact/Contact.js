import React from 'react'
import "./Contact.css"
import ContactForm from './ContactForm/ContactForm'
import LocationInfo from './LocationInfo/LocationInfo'
import ContactHeader from './ContactHeader/ContactHeader'
import team from "../../image/team.jpg";

const Contact = () => {
    const contact ={
        imgContact:team,
        title:"CONTACT",
        descContact: "Pour toute demande de renseignements ou suggestions sur notre site, n'hésitez pas à nous contacter, nous vous répondrons dans les plus brefs délais."
      }
  return (
    <div className="contact-content">
        <ContactHeader contact={contact} />
        <ContactForm/>
  
      </div>
  )
}

export default Contact