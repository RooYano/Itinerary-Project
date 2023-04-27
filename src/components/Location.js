import React from 'react';
import {MdDeleteForever, MdEdit} from 'react-icons/md';

function Location({ location, onDelete, onEdit }) {
    return (
        <tr>
            <td>{location.name}</td>
            <td><MdEdit onClick={() => onEdit(location)} /></td>
            <td><MdDeleteForever onClick={(() => onDelete(location._id))}/></td>
        </tr>
    );
}

export default Location;