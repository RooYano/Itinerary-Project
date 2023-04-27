import React from 'react';
import Location from './Location';

function LocationList({ locations, onDelete, onEdit }) {
    return (
        <table id="locations">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {locations.map((location, i) => <Location location={location}
                    onDelete = {onDelete}
                    onEdit = {onEdit}
                    key={i} />)}
            </tbody>
        </table>
    );
}

export default LocationList;
