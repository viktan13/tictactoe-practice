import React, {useEffect, useState} from 'react';
import Header from "./Components/Header";
import './App.css'
import GameBoard from "./Components/GameBoard";
import Reset from "./Components/Reset";
import Winner from "./Components/Winner";

const App = () => {
    const title = 'tic tac toe'
    const [board, setBoard] = useState(Array(9).fill(null));
    const [gamerX, setGamerX] = useState(true);
    const [winner, setWinner] = useState('');



    const onSquareClick = (index, square) => {
        if (square === null) {
            const gamer = gamerX ? 'X' : '0';
            const updatedBoard = board.map((el, i) => i === index ? gamer : el);
            setBoard(updatedBoard);
            setGamerX(!gamerX);
        }
    }

    const calculateWinner = () => {
        const winningCombination = [
            [0, 4, 8],
            [2, 4, 6],
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
        ]
        for (let i = 0; i < winningCombination.length; i++){
            const [a, b, c] = winningCombination[i];
            if(board[a] && board[a] === board[b] && board[b] === board[c]) setWinner(board[a]);
        }
    }

    useEffect(() => {
        calculateWinner();
    }, [board])

    const onReset = () => {
        const resetBoard = board.map(el => null);
        setBoard(resetBoard);
        setGamerX(true);
        setWinner('');
    }

    return (
        <div className="App">
            <Header title={title}/>
            <GameBoard
                board={board}
                onSquareClick={onSquareClick}
            />
            <Reset onReset={onReset}/>
            {winner && <Winner winner={winner}/>}
        </div>
    );
};

export default App;
