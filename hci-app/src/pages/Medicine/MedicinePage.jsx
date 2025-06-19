import { useState } from 'react';
import './MedicinePage.css';
import calendarIcon from '../../assets/dob.png'
import ageIcon from '../../assets/age.png'
import genderIcon from '../../assets/gender.png'
import idIcon from '../../assets/id.png'
import medIcon from '../../assets/medcon.png'

const MedicinePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMedicines, setSelectedMedicines] = useState({});
  const [prescriptionNotes, setPrescriptionNotes] = useState('');

  const medicines = [
    "BK-1 Stellapharm",
    "Spulit Slavia",
    "Genshu Sagopha",
    "Nebido Bayer",
    "Egudin 10 Medisun",
    "Priligy 30mg Merarini",
    "Femoston Conti 1mg/5mg Abbott",
    "Paracetmol Stada 500mg",
    "Amifull 300mg Mediplantex",
    "Propain 500 Remedica",
    "Osbifin 20mg Delorbis",
    "Rhumacap 200 OPV",
    "Sofenac Phil Inter",
    "Efferalgan Codeine",
    "Soredon NN 20 Meyer"
  ];

  const patientInfo = {
    name: "Patient Name",
    dob: "DD/MM/YYYY",
    age: "44",
    idNumber: "12345678",
    gender: "Male",
    medicalCondition: "Cancer"
  };

  const handleQuantityChange = (medicine, event) => {
    const quantity = parseInt(event.target.value);
    setSelectedMedicines(prev => {
      if (quantity === 0) {
        const { [medicine]: removed, ...rest } = prev;
        return rest;
      }
      return {
        ...prev,
        [medicine]: quantity
      };
    });
  };

  const handleAddMedicine = (medicine) => {
    setSelectedMedicines(prev => ({
      ...prev,
      [medicine]: (prev[medicine] || 0) + 1
    }));
  };
  
  const handleRemoveMedicine = (medicine) => {
    setSelectedMedicines(prev => {
      const newQuantity = Math.max(0, (prev[medicine] || 0) - 1);
      if (newQuantity === 0) {
        const { [medicine]: removed, ...rest } = prev;
        return rest;
      }
      return {
        ...prev,
        [medicine]: newQuantity
      };
    });
  };

  return (
    <div className="medicine-page">
      <div className="left-panel">
        <h2>Medicine</h2>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search ..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="filter-btn">≡</button>
        </div>

        <div className="medicine-list">
          {medicines.map((medicine, index) => (
            <div key={index} className="medicine-item">
              <span>{index + 1}. {medicine}</span>
              <div className="quantity-control">
                <select
                  value={selectedMedicines[medicine] || 0}
                  onChange={(e) => handleQuantityChange(medicine, e)}
                  className="quantity-select"
                >
                  {[...Array(11)].map((_, i) => (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="right-panel">
        <div className="patient-info">
          <div className = "patient-info-title">
            {patientInfo.name}
          </div>
          <div className="info-grid">
            <div className="info-item">
              <img src = {calendarIcon} alt = "Calendar" className = "info-icon"/>
              <span>DOB:</span>
              <span>{patientInfo.dob}</span>
            </div>
            <div className="info-item">
              <img src = {idIcon} alt = "ID" className = "info-icon"/>
              <span>ID Number:</span>
              <span>{patientInfo.idNumber}</span>
            </div>
            <div className="info-item">
              <img src = {ageIcon} alt = "Age" className = "info-icon"/>
              <span>Age:</span>
              <span>{patientInfo.age}</span>
            </div>
            <div className="info-item">
              <img src = {genderIcon} alt = "Gender" className = "info-icon"/>
              <span>Gender:</span>
              <span>{patientInfo.gender}</span>
            </div>
            <div className="info-item">
              <img src = {medIcon} alt = "MedCon" className = "info-icon" />
              <span>Medical condition:</span>
              <span>{patientInfo.medicalCondition}</span>
            </div>
          </div>
        </div>

        <div className="prescription">
          <h3>Prescription</h3>
          {Object.entries(selectedMedicines)
            .filter(([_, quantity]) => quantity > 0)
            .map(([medicine, quantity], index) => (
              <div key={index} className="prescribed-item">
                <span>{index + 1}. {medicine}</span>
                <span>x {quantity}</span>
              </div>
            ))} 
          
          <div className="prescription-notes">
            <textarea
              value={prescriptionNotes}
              onChange={(e) => setPrescriptionNotes(e.target.value)}
              placeholder="Enter prescription notes..."
              rows={4}
            />
          </div>

          <div className="action-buttons">
            <button className="cancel-btn">Cancel</button>
            <button className="export-btn">Export</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicinePage;