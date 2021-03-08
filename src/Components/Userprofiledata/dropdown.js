import React, { useState } from 'react';

export default function UserProfileDropdown({ value, setValue }) {
    const [inputValue, setInputValue] = useState(value);
    const [editMode, setEditMode] = useState(false);

    if(editMode) {
        return (
            <div></div>
        )
    } else {
        return (
            <div></div>
        )
    }
}