import React from 'react';

import Loader from '../Loader';
import StudentCard from '../StudentCard';

import './style.css';

export default function SearchGrid({ filteredStudents, loading }) {
  console.log(filteredStudents);
  if (loading) {
    return <Loader />;
  } else if(filteredStudents.length === 0) {
    return <h1 className="no-results-headline">No Results</h1>
  }else {
    return (
      <div className="search-grid">
        {filteredStudents.map((student) => {
          return (
            <StudentCard
              name={`${student.first_name} ${student.last_name}`}
              batch={student.batch}
              id={student.id}
              picture={student.picture}
            />
          );
        })}
      </div>
    );
  }
}
