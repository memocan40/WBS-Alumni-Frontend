import React, { useState } from 'react';
import { Multiselect } from 'multiselect-react-dropdown';

export default function UserProfileMultiselect({ obj, onSubmit }) {
  const [inputValue, setInputValue] = useState(obj);
  const [editMode, setEditMode] = useState(false);

  const editBtnHandler = (e) => {
    if (editMode) {
      setEditMode(false);
      //onSubmit(inputValue);
    } else {
      setEditMode(true);
    }
  };

  if (editMode) {
    return (
      <>
        <Multiselect options={obj} displayValue="key" />
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
