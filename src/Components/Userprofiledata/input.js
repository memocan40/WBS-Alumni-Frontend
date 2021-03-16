import React, { useState } from 'react';

import './style.css';

export default function UserProfileInput({ value, onSubmit }) {
  const [inputValue, setInputValue] = useState(value);
  const [editMode, setEditMode] = useState(false);

  const editBtnHandler = (e) => {
    if (editMode) {
      setEditMode(false);
      console.log(value);
      onSubmit(inputValue);
    } else {
      setEditMode(true);
    }
  };

  if (editMode) {
    return (
      <>
        <input
          className="user-profile-input"
          type="text"
          maxLength="50"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
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
