import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import './App.css'; // Assuming you have your CSS file

function App() {
  return (
    <div className="container">
      <div className="content">
        <div className="image-container">
          <img src="asserts/1.png" alt="1" className="image" />
          <div>
            <img src="asserts/logo.png" alt="Company Logo" className="logo" />
            <h3> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h3>
            <ul>
              <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
              <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
            </ul>
            <img src="asserts/2.png" alt="2" className="imagee" />
            <p>Government of India has awarded the <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
          </div>
        </div>
      </div>
      <div className="products">
        <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. 
        </p>
        <img src="asserts/3.png" alt="2" className="image" />
        <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
        <div className='redhr'></div>
        <h4>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
        </h4>
        <p>CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA SUGARS & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING FOOD & BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE & RESIDENTIAL</p>
      </div>
      <footer>
        <div className="footer-content">
          <p><FontAwesomeIcon icon={faPhone} /> Toll free 18002001234</p>
          <p><FontAwesomeIcon icon={faFacebook} /> <a href="https://www.facebook.com/cripumps">https://www.facebook.com/cripumps</a></p>
          <p><FontAwesomeIcon icon={faGlobe} /> <a href="https://www.crigroups.com/">https://www.crigroups.com/</a></p>
        </div>
      </footer>
    </div>
  );
}

export default App;
