import React from 'react';
import { Link } from 'react-router-dom';
import LocationList from '../components/LocationList';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage({setLocationToEdit}) {
    const [location, setLocation] = useState([]);
    const navigate = useNavigate();

    const onDelete = async _id => {
        const response = await fetch(`/locations/${_id}`, {method: 'DELETE'});
        if(response.status === 204){
            const newLocations = location.filter(e=>e._id !== _id);
            setLocation(newLocations)
        } else {
            console.error(`Failed to delete movie with _id = ${_id}, status code = ${response.status}`);
        }
    };

    const onEdit = location => {
        setLocationToEdit(location)
        navigate("/edit-location");
    }


    const loadLocations = async () => {
        const response = await fetch('/locations');
        const locations = await response.json();
        setLocation(locations);
    }

    useEffect(() => {
        loadLocations();
    }, []);

    return (
        <>
            <h2>List of Locations</h2>
            <LocationList locations={location} onDelete = {onDelete} onEdit = {onEdit}></LocationList>
            <Link to="/add-loc">Add a Location</Link>
        </>
    );
}

export default HomePage;