import React from 'react';
import PropTypes from 'prop-types';

const Event = props => {
    return (
        <>
            <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src="" alt="Card"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk
                            of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
        </>
    );
};

Event.propTypes = {
    title: PropTypes.string,
    date: PropTypes.string,
    image: PropTypes.string,
    place: PropTypes.string
};

export default Event;
