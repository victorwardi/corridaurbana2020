import React from 'react';
import Distance from "./Distance/Distance";
import PropTypes from "prop-types";

const Distances = (props) => {

    return (
        <>
            {

               props.distances.length > 0 ? (
                    props.distances.map((distance, index) => (
                        <Distance key={index} value={distance}/>
                    ))) : ('')
            }
        </>
    );
};

Distances.propTypes = {
    distances: PropTypes.array,
}

export default Distances;
