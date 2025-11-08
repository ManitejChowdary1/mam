import React from "react";
import { motion } from "framer-motion";
import "./App.css";

// Import your images
import mamPhoto from "./assets/mam.jpeg";
import manitejPhoto from "./assets/manitej.jpeg";
import mePhoto from "./assets/me.jpg";
import chanduPhoto from "./assets/chandu.jpeg";
import bhramajPhoto from "./assets/bhramaj.jpeg";

function App() {
  return (
    <div className="app-container">
      {/* Ma’am’s Photo */}
      <motion.img
        src={mamPhoto}
        alt="Mam"
        className="mam-photo"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
      Thank You, Suneetha Bulla Garu
      </motion.h1>

      {/* Message */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        “Ma’am, it’s hard to put into words how grateful we are to have had you with us through these two semesters. You’ve not only been our teacher but also our biggest guide and supporter. We’ve learned lessons from you that go far beyond the classroom — lessons that will stay with us for life. Thank you for always being patient, for correcting us with care, and for believing in us even when we doubted ourselves. Your guidance, kindness, and inspiration mean the world to us. We’ll always cherish the time we spent learning under you.”
      </motion.p>

      {/* Signature */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1.2 }}
      >
        💐 With love and respect,  
        <br />
        — Your Students
      </motion.h2>

      {/* Student Gallery */}
      <div className="student-gallery">
        <div className="student-card">
          <img src={manitejPhoto} alt="Manitej" className="student-photo" />
          <p className="student-name">Manitej</p>
        </div>

        <div className="student-card">
          <img src={mePhoto} alt="Mohith" className="student-photo" />
          <p className="student-name">Mohith</p>
        </div>

        <div className="student-card">
          <img src={chanduPhoto} alt="Chandu" className="student-photo" />
          <p className="student-name">Chandu</p>
        </div>

        <div className="student-card">
          <img src={bhramajPhoto} alt="Bhramaj" className="student-photo" />
          <p className="student-name">Bhramaj</p>
        </div>
      </div>
    </div>
  );
}

export default App;
