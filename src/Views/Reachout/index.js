import React, { useState } from 'react';
import axios from 'axios';

import Header from '../../Components/Header';
import Loader from "../../Components/Loader";
import Searchbar from '../../Components/Searchbar';
import StudentCard from '../../Components/StudentCard';
import Footer from '../../Components/Footer';

import './style.css';

export default function ReachOut({students, batches, cities, workstatus}) {

  const [typeOfSearch, setTypeOfSearch] = useState('batch');
  const [childValue,setchildValue]=useState("");
  const [filteredStudents, setFilteredStudents] = useState(students);
  
  console.log(typeOfSearch);
  console.log(childValue);
  console.log(filteredStudents);




  const searchController = async () => {
    //e.preventDefault();
    try{
      const response = await axios.get(`https://hidden-shelf-31461.herokuapp.com/users/${typeOfSearch}/${childValue}`)
      if(response) {
        console.log(response)
        setFilteredStudents(response.data.data);
        console.log("render")
        console.log(filteredStudents)
      }
    }catch(e){
      console.error(e);
    }
  }


  if(filteredStudents) {
  return (
    <>
      <Header />
      <div className="search-bar-wrapper">
        <select className="reach-out-select" onChange={(e)=> setTypeOfSearch(e.target.value)}>
          <option className="reach-out-option" value="batch">Batch</option>
          <option className="reach-out-option" value="city">City</option>
          <option className="reach-out-option" value="workstatus">Workstatus</option>
          <option className="reach-out-option" value="interests">Interests</option>
        </select>
        <Searchbar searchOption={typeOfSearch} inputValue={setchildValue} batches={batches} cities={cities} workstatus={workstatus} />
        <button className="search-bar-btn" onClick={searchController}>Search</button>
      </div>
      <div className="search-grid">
        {filteredStudents.map((filteredStudent) => {
          return <StudentCard name={`${filteredStudent.first_name} ${filteredStudent.last_name}`} batch={filteredStudent.batch} id={filteredStudent.id}/>
        })}
      </div>
      <Footer />
    </>
  );} else {
    return (
      <Loader />
    )
  }
}
