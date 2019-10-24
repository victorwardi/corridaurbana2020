import React from 'react';

const Distance = (props) => {
    return (
        <div>
            <div className="curb-event-distance float-left text-center m-1">
                <div className="curb-event-distance-text curb-distance-{props.value}">{props.value}</div>
            </div>
        </div>
    );
};

export default Distance;
