import React from 'react';
import Distance from "./Distance/Distance";

const Distances = (props) => {
    return (
        <div>
            {props.distances.map( (distance, index) => (
                <Distance key={index} value={distance}/>
                ))}
        </div>
    );
};

export default Distances;
