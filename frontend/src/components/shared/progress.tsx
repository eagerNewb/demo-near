import React from "react";
import CSS from 'csstype';
import './Shared.css';

const ProgressBar = (props: any) => {
  const { bgcolor, completed } = props;

  const fillerStyles: CSS.Properties  = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: '#6DAFA7',
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  }
  return (
    <div className="progress-wrapper">
      <div className="progress-bar">
        <div className="bar" style={fillerStyles}>
          <span className="bar-inner" style={labelStyles}>
            {/* {`${completed}%`} */}
            </span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;