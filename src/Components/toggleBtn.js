import React from 'react';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';

const ToggleButton = ({ isLeftContainerOpen, toggleLeftContainer }) => {
    const buttonLeftPosition = isLeftContainerOpen ? '22.4%' : '3%';
  
    return (
      <div className="toggle-btn">
        <button
          onClick={toggleLeftContainer}
          style={{ left: buttonLeftPosition }}
        >
          {isLeftContainerOpen ? (
            <LeftOutlined style={{ fontSize: '24px', color: '#B75210' }} />
          ) : (
            <RightOutlined style={{ fontSize: '24px', color: '#B75210' }} />
          )}
        </button>
      </div>
    );
  };

export default ToggleButton;