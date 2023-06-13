import React,{useState,useEffect} from 'react';


const GameBoard = ({theme}) => {
    const [boardSpaces,setBoardSpaces] = useState(["","","","","","","","",""]);
    const [currentTurn,setCurrentTurn] = useState('O');
    const [turnMessage,setTurnMessage] = useState('Your turn O');
    const [gameOver,setGameOver] = useState(false);


   
    useEffect(()=>{
        checkForWin();
    },[boardSpaces]);



    const checkForWin = () => {
        const winningCombos = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
        let win = winningCombos.some(combo => {
            const [a,b,c] = combo;
            const values = [boardSpaces[a],boardSpaces[b],boardSpaces[c]];
            return values.every(value => value === currentTurn);
        });
        if(win){
            setTurnMessage(`${currentTurn} wins!`);
            setGameOver(true);

        }else{
            setCurrentTurn(currentTurn === 'X' ? 'O' : 'X');
            setTurnMessage(currentTurn === 'X' ? 'Your turn O' : 'Your turn X'); 
        } 
    };

    const playTurn = (index) =>{
        if (!gameOver && boardSpaces[index] === ""){
            const newBoard = [...boardSpaces];
            newBoard[index] = currentTurn;
            setBoardSpaces(newBoard);
            }
    }

    const resetBoard = () => {
        setBoardSpaces(["","","","","","","","",""]);
        setCurrentTurn('X');
        setTurnMessage('Your turn X');
        setGameOver(false);
    }
    

    return(
        <div>
        <div className='gameBoardContainer'>
            {boardSpaces.map((square,index) =>
                <div 
                    className={`playSquare index${index} ${square}`}
                    onClick={() => playTurn(index)}
                    key={index}
                    >
                    <h1>{square}</h1>
                </div>
                )}
        </div>
        <h2 className={`turn ${theme}`}>{turnMessage}</h2>
        <button 
            className='resetButton'
            onClick={resetBoard}>
            Reset Board
        </button>
        </div>
    )

}

export default GameBoard;