import React from 'react';
import statue_img from '../Assets/statue.png';
import '../App.css';

const RightContainer = ({ isLeftContainerOpen }) => {
    return (
        <div
            className="right-container"
            style={{
                display: 'grid',
                placeItems: 'center',
                flex: isLeftContainerOpen ? '75%' : '100%',
            }}
        >
            <div className="statue-container">
                <img src={statue_img} alt="buddha statue" className="statue" />
            </div>
        </div>
    );
};

export default RightContainer;