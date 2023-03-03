import React from 'react';

const Square = (props) => {
    return (
        <div
            className="square"
            onClick={() => props.onSquareClick(props.index, props.el)}
        >
            {props.el}
        </div>

    );
};

export default Square;
