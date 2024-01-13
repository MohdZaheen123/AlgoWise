'use client'



// Assuming you have a Button component imported
import { Button } from "@/components/ui/button";
import { MessageSquareText } from "lucide-react";
import React, { useState, useEffect } from 'react';

export default function Component() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isPlayerX, setIsPlayerX] = useState(true);
  const [winner, setWinner] = useState(null);
    const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!isPlayerX) {
      // Computer's turn
      const computerMove = getComputerMove();
      handleClick(computerMove);
    }
    checkWinner();
  }, [board, isPlayerX]);

  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const line of lines) {
      const [a, b, c] = line;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        return;
      }
    }

    if (!board.includes(null)) {
      setWinner('Draw');
    }
  };

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = board.slice();
    newBoard[index] = isPlayerX ? 'X' : 'O';
    setBoard(newBoard);
    setIsPlayerX(!isPlayerX);
  };

  const getComputerMove = () => {
    // Check for a winning move
    for (let i = 0; i < board.length; i++) {
      if (!board[i]) {
        const newBoard = board.slice();
        newBoard[i] = 'O';
        if (isWinningMove(newBoard, 'O')) {
          return i;
        }
      }
    }

    // Block opponent's winning move
    for (let i = 0; i < board.length; i++) {
      if (!board[i]) {
        const newBoard = board.slice();
        newBoard[i] = 'X';
        if (isWinningMove(newBoard, 'X')) {
          return i;
        }
      }
    }

    // If no winning or blocking moves, make a random move
    const availableMoves = board.reduce((acc, cell, index) => {
      if (!cell) acc.push(index);
      return acc;
    }, []);

    const randomIndex = Math.floor(Math.random() * availableMoves.length);
    return availableMoves[randomIndex];
  };

  const isWinningMove = (currentBoard, symbol) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const line of lines) {
      const [a, b, c] = line;
      if (currentBoard[a] === symbol && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]) {
        return true;
      }
    }

    return false;
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsPlayerX(true);
    setWinner(null);
  };

  return (
<div>

<div className=" h-32 ml-4">
    <p className="flex text-blue-500"><MessageSquareText className="w-20 mt-1 " /> : Hey! is your brain fried of this blog? . Well what about a game with me? </p>
    <Button onClick={()=>{setVisible(true)}} className="mx-9 my-2 " >Click Here</Button>
</div>

<div className={visible?`block`:`hidden`}>
<div className="bg-gray-800 text-white flex flex-col justify-center items-center mx-5 rounded-lg">
    <p className="pt-2">TicTacToe Instructions</p>
    <div className="flex flex-col items-start w-full px-3 py-2">
        <p>Your Sign : X</p>
        <p>Computer Sign : O</p>
    </div>
</div>
<main key="1" className="flex flex-col items-center justify-center  ">
    <div className="mb-8 text-xl font-semibold text-gray-100">
        {winner ? (
            winner === 'Draw' ? 'It\'s a Draw!' : `Player ${winner} wins!`
        ) : (
            isPlayerX ? 'Player X\'s Turn' : 'Computer\'s Turn'
        )}
    </div>
    <div className="grid grid-cols-3 gap-2 w-52 h-52">
        {board.map((cell, index) => (
            <div
                key={index}
                onClick={() => handleClick(index)}
                className="border border-gray-600 bg-gray-800 w-16 h-16 rounded-md flex items-center justify-center text-2xl font-bold cursor-pointer"
            >
                {cell}
            </div>
        ))}
    </div>
    <Button className="mt-8 bg-blue-500 text-white border-blue-600" onClick={resetGame}>
        Reset Game
    </Button>
</main>
</div>
</div>  
  );
}



