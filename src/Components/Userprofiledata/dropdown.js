import React, { useState } from 'react';

import './style.css';

export default function UserProfileInput({
  defValues,
  currentValue,
  onSubmit,
}) {
  const [inputValue, setInputValue] = useState(currentValue);
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
    return (
      <>
        <select
          onChange={(e) => {
            setInputValue(e.target.value);
          }}>
          <option value="" selected disabled hidden>
            Choose here
          </option>
          {defValues.map((element) => {
            return (
              <option key={element.name} value={element.name}>
                {element.name}
              </option>
            );
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
