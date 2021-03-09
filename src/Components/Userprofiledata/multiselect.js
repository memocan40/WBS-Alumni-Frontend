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
              ? 'far fa-edit user-edit-btn'
              : 'fas fa-check user-edit-btn')
          }
          onClick={editBtnHandler}></button>
      </>
    );
  } else {
    return (
      <>
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
