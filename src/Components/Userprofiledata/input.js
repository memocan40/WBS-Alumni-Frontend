import React, { useState } from 'react';

import "./style.css";

export default function UserProfileInput({ value, setValue }) {
  const [inputValue, setInputValue] = useState(value);
  const [editMode, setEditMode] = useState(false);

  const editBtnHandler = (e) => {
    if (editMode) {
      setEditMode(false);
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
          maxLength="20"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className={"user-edit-btn",
            editMode
              ? 'far fa-edit user-edit-btn'
              : 'fas fa-check user-edit-btn'
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
              ? 'far fa-edit user-edit-btn'
              : 'fas fa-check user-edit-btn'
          }
          onClick={editBtnHandler}></button>
      </>
    );
  }
}
