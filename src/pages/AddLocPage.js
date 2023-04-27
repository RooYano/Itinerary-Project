import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AddLocPage = () => {

    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('');
    const [date, setDate] = useState('');

    const navigation = useNavigate();

    // const addExercise = async () => {
    //     const newExercise = {name, reps, weight, unit, date};
    //     const response = await fetch('/exercises', {
    //         method:"POST",
    //         body: JSON.stringify(newExercise),
    //         headers: {
    //             'Content-Type':'application/json',
    //         },
    //     });
    //     if(response.status === 201){
    //         alert("successfully added the exercise");
            
    //     } else {
    //         alert(`Failed to add exercise, status code = ${response.status}`);
    //     }
    //     navigation('/');

    // };

    const addLoc = async() =>{

    }

    return (
        <div>
            <h1>Search for location</h1>
            <input
                type="text"
                placeholder="Search for location here"
                value={name}
                onChange={e => setName(e.target.value)} />
            {/* <input
                type="number"
                value={reps}
                placeholder="Enter reps here"
                onChange={e => setReps(e.target.value)} />
            <input
                type="number"
                value={weight}
                placeholder="Enter weight here"
                onChange={e => setWeight(e.target.value)} />
            <select name= "unit" onChange={e => setUnit(e.target.value)}>
                <option value ="">--Please choose--</option>
                <option value="kgs">kgs</option>
                <option value="lbs">lbs</option>
            </select>
            <input
                type="text"
                placeholder="Enter date here"
                value={date}
                onChange={e => setDate (e.target.value)} /> */}
            <button
                onClick={addLoc}
            >Add</button>
        </div>
    );
}

export default AddLocPage;