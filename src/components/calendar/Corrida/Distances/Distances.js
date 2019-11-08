import React from 'react';
import Distance from "./Distance/Distance";
import PropTypes from "prop-types";

const Distances = (props) => {

    let distances = [];
    if (props.distances !== undefined && props.distances != null ) {
        distances = props.distances;
    }

    return (
        <div>
            {
               distances.length > 0 ? (
                    distances.map((distance, index) => (
                        <Distance key={index} value={distance}/>
                    ))) : ('')
            }
        </div>
    );
};

Distances.propTypes = {
    distances: PropTypes.array,
}

export default Distances;
