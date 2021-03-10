import React, { useState } from 'react';

import './style.css';

export default function UserProfileInput({ defValues, onSubmit }) {
  const [inputValue, setInputValue] = useState("");
  const [editMode, setEditMode] = useState(false);

  const editBtnHandler = (e) => {
    if (editMode) {
      setEditMode(false);
      onSubmit(inputValue);
    } else {
      setEditMode(true);
    }
  };
  if (editMode) {
    console.log(defValues)
    return (
      <>
        <select onChange={(e) => {
            setInputValue(e.target.value)
        }}>
        
        {defValues.map(element => {
          return <option value={element}>{element}</option>
          })}
        </select>
        <button
          className={
            ('user-edit-btn',
            editMode
              ? 'fas fa-check user-edit-btn'
              : 'far fa-edit user-edit-btn')
          }
          onClick={editBtnHandler}></button>
      </>
    );
  } else {
    return (
      <>
        {inputValue}
        <button
          className={
            editMode
              ? 'fas fa-check user-edit-btn'
              : 'far fa-edit user-edit-btn'
          }
          onClick={editBtnHandler}></button>
      </>
    );
  }
}
