import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const EditLocationPage = ({locationToEdit}) => {

    const navigate = useNavigate()

    const [name, setName] = useState(locationToEdit.name);


    const editLocation = async () => {

        const editedLocation = {name}

        const response = await fetch(`/exercises/${locationToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify(editedLocation),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 200){
             alert("Successfully edited the location!");
        } else {
             alert(`Failed to edit movie, status code = ${response.status}`);
        }     
        navigate("/");
    };

    return (
        <div>
            <h1>Edit Location</h1>
            <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)} />

            <button
                onClick={editLocation}
            >Edit</button>
        </div>
    );
}

export default EditLocationPage;