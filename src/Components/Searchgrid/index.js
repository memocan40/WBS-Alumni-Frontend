import React, { useState } from 'react';

import Loader from '../../Components/Loader';
import StudentCard from '../../Components/StudentCard';

export default function SearchGrid({ filteredStudents, loading }) {
  if (loading) {
    return <Loader />;
  } else {
    return (
      <div className="search-grid">
        {filteredStudents.map((filteredStudent) => {
          return (
            <StudentCard
              name={`${filteredStudent.first_name} ${filteredStudent.last_name}`}
              batch={filteredStudent.batch}
              id={filteredStudent.id}
            />
          );
        })}
      </div>
    );
  }
}
