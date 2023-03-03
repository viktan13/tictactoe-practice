import React from 'react';
import Square from "./Square";

const GameBoard = (props) => {
    return (
        <div className="main">
            {props.board.map((el, i) => (
                <Square
                    key={i}
                    el={el}
                    index={i}
                    onSquareClick={props.onSquareClick}
                />
            ))}
        </div>
    );
};

export default GameBoard;
