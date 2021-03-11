import React, { useState } from 'react';

import Header from '../../Components/Header';
import Loader from "../../Components/Loader";
import Searchbar from '../../Components/Searchbar';
import StudentCard from '../../Components/StudentCard';
import Footer from '../../Components/Footer';

import './style.css';

export default function ReachOut({students, batches, cities}) {

  const [dropdownSelected, setDropdownSelected] = useState('batch');
  const [filteredStudents, setFilteredStudents] = useState({...students});
  console.log(dropdownSelected);

  if(filteredStudents) {
  return (
    <>
      <Header />
      <div className="search-bar-wrapper">
        <select className="search-bar-selection" onChange={(e)=> setDropdownSelected(e.target.value)}>
          <option className="search-bar-selection-option" value="batch">Batch</option>
          <option className="search-bar-selection-option" value="city">City</option>
          <option className="search-bar-selection-option" value="name">Name</option>
          <option className="search-bar-selection-option" value="interests">Interests</option>
        </select>
        <Searchbar searchOption={dropdownSelected} />
        <button className="search-bar-btn" type="submit">Search</button>
      </div>
      <div className="search-grid">
        {students ? students.map((filteredStudents) => {
          return <StudentCard name={`${filteredStudents.first_name} ${filteredStudents.last_name}`} batch={filteredStudents.batch} id={filteredStudents.id}/>
        }) : "no data"}
      </div>
      <Footer />
    </>
  );} else {
    return (
      <Loader />
    )
  }
}
