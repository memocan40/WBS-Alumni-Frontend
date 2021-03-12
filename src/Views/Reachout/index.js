import React, { useState } from 'react';

import Header from '../../Components/Header';
import Loader from "../../Components/Loader";
import Searchbar from '../../Components/Searchbar';
import StudentCard from '../../Components/StudentCard';
import Footer from '../../Components/Footer';

import './style.css';

export default function ReachOut({students, batches, cities, workstatus}) {

  const [dropdownSelected, setDropdownSelected] = useState('batch');
  let [childValue,setchildValue]                =useState();
  const [filteredStudents, setFilteredStudents] = useState({...students});
  
  console.log(dropdownSelected);
  console.log(childValue);

  if(filteredStudents) {
  return (
    <>
      <Header />
      <div className="search-bar-wrapper">
        <select className="reach-out-select" onChange={(e)=> setDropdownSelected(e.target.value)}>
          <option className="reach-out-option" value="batch">Batch</option>
          <option className="reach-out-option" value="city">City</option>
          <option className="reach-out-option" value="workstatus">Workstatus</option>
          <option className="reach-out-option" value="interests">Interests</option>
        </select>
        <Searchbar searchOption={dropdownSelected} inputValue={(valueFromChild)=>{setchildValue(valueFromChild)}} batches={batches} cities={cities} workstatus={workstatus} />
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
