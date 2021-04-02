import React, { useState } from "react";
import axios from "axios";

import Header from "../../Components/Header";
import Loader from "../../Components/Loader";
import Searchbar from "../../Components/Searchbar";
import Searchgrid from "../../Components/Studentcardgrid";
import Footer from "../../Components/Footer";

import "./style.css";

export default function ReachOut({
  students,
  batches,
  cities,
  workstatus,
  sid,
}) {
  const [typeOfSearch, setTypeOfSearch] = useState("batch");
  const [childValue, setchildValue] = useState("");
  const [filteredStudents, setFilteredStudents] = useState(students);
  const [loading, setLoading] = useState(false);

  const searchController = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://hidden-shelf-31461.herokuapp.com/users/${typeOfSearch}/${childValue}`
      );
      if (response) {
        setLoading(false);
        console.log(response);
        setFilteredStudents(response.data.data);
      }
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  };

  if (students) {
    return (
      <>
        <Header />
        <div className="search-bar-wrapper">
          <select
            className="reach-out-select"
            onChange={(e) => setTypeOfSearch(e.target.value)}
          >
            <option className="reach-out-option" value="batch">
              Batch
            </option>
            <option className="reach-out-option" value="city">
              City
            </option>
            <option className="reach-out-option" value="workstatus">
              Workstatus
            </option>
            <option className="reach-out-option" value="interest">
              Interests
            </option>
          </select>
          <Searchbar
            searchOption={typeOfSearch}
            inputValue={setchildValue}
            batches={batches}
            cities={cities}
            workstatus={workstatus}
          />
          <button className="search-bar-btn" onClick={searchController}>
            Search
          </button>
        </div>
        <Searchgrid filteredStudents={filteredStudents} loading={loading} />
        <Footer />
      </>
    );
  } else {
    return <Loader />;
  }
}
