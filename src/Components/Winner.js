import React from 'react';

const Winner = (props) => {
    return (
        <div className="winner">
            <h2>
                Player '{props.winner}' won the game
            </h2>
        </div>
    );
};

export default Winner;
