import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

const AddDoctor = () => {
    const [admin, setAdmin] = useState();
    const handleOnBlur = e => {

    }
    const handleSubmit = () => {

    }
    return (
        <div>
            <h2>Add Doctors</h2>
            <form onSubmit={handleSubmit}>
                <TextField label="Standard" variant="standard" />
            </form>
        </div>
    );
};

export default AddDoctor;