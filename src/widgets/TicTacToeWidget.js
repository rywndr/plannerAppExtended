import React, { useState, useEffect } from "react"

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    marginTop: "20px",
    width: "350px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  board: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: "20px auto",
    width: "300px",
  },
  cell: {
    width: "90px",
    height: "90px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #ccc",
    fontSize: "48px",
    cursor: "pointer",
  },
  winnerText: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  restartButton: {
    display: "block",
    margin: "10px auto",
    padding: "8px 16px",
    background: "#4caf50",
    color: "white",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    cursor: "pointer",
  },
}

const INITIAL_STATE = {
  board: Array(9).fill(""),
  currentPlayer: "X",
  winner: "",
  isGameFinished: false,
  difficulty: "easy",
}

export default function TicTacToeWidget() {
  const [state, setState] = useState(INITIAL_STATE)

  useEffect(() => {
    if (state.currentPlayer === "O" && !state.winner && !state.isGameFinished) {
      makeMove()
    }
    // eslint-disable-next-line
  }, [state.currentPlayer])

  const handleCellClick = index => {
    if (state.board[index] || state.winner || state.currentPlayer === "O") {
      return
    }

    const updatedBoard = [...state.board]
    updatedBoard[index] = state.currentPlayer

    setState(prevState => ({
      ...prevState,
      board: updatedBoard,
      currentPlayer: prevState.currentPlayer === "X" ? "O" : "X",
    }))

    checkWinner(updatedBoard)
  }

  const checkWinner = board => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    for (let combination of winningCombinations) {
      const [a, b, c] = combination
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setState(prevState => ({
          ...prevState,
          winner: board[a],
          isGameFinished: true,
        }))
        return
      }
    }

    if (board.every(cell => cell !== "")) {
      setState(prevState => ({
        ...prevState,
        isGameFinished: true,
      }))
    }
  }

  const makeMove = () => {
    if (state.difficulty === "easy") {
      makeRandomMove()
    } else if (state.difficulty === "medium") {
      makeMediumMove()
    } else {
      makeHardMove()
    }
  }

  const makeRandomMove = () => {
    const availableCells = state.board
      .map((cell, index) => (cell === "" ? index : null))
      .filter(cell => cell !== null)

    const randomIndex = Math.floor(Math.random() * availableCells.length)
    const randomCell = availableCells[randomIndex]
    const updatedBoard = [...state.board]
    updatedBoard[randomCell] = "O"
    setState(prevState => ({
      ...prevState,
      board: updatedBoard,
      currentPlayer: "X",
    }))
    checkWinner(updatedBoard)
  }

  const makeMediumMove = () => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    const availableCells = state.board
      .map((cell, index) => (cell === "" ? index : null))
      .filter(cell => cell !== null)

    // Check if bot can win in the next move
    for (let combination of winningCombinations) {
      const [a, b, c] = combination
      if (
        state.board[a] === "O" &&
        state.board[a] === state.board[b] &&
        state.board[c] === ""
      ) {
        const updatedBoard = [...state.board]
        updatedBoard[c] = "O"
        setState(prevState => ({
          ...prevState,
          board: updatedBoard,
          currentPlayer: "X",
        }))
        checkWinner(updatedBoard)
        return
      } else if (
        state.board[b] === "O" &&
        state.board[b] === state.board[c] &&
        state.board[a] === ""
      ) {
        const updatedBoard = [...state.board]
        updatedBoard[a] = "O"
        setState(prevState => ({
          ...prevState,
          board: updatedBoard,
          currentPlayer: "X",
        }))
        checkWinner(updatedBoard)
        return
      } else if (
        state.board[c] === "O" &&
        state.board[c] === state.board[a] &&
        state.board[b] === ""
      ) {
        const updatedBoard = [...state.board]
        updatedBoard[b] = "O"
        setState(prevState => ({
          ...prevState,
          board: updatedBoard,
          currentPlayer: "X",
        }))
        checkWinner(updatedBoard)
        return
      }
    }

    // Check if user can win in the next move and block it
    for (let combination of winningCombinations) {
      const [a, b, c] = combination
      if (
        state.board[a] === "X" &&
        state.board[a] === state.board[b] &&
        state.board[c] === ""
      ) {
        const updatedBoard = [...state.board]
        updatedBoard[c] = "O"
        setState(prevState => ({
          ...prevState,
          board: updatedBoard,
          currentPlayer: "X",
        }))
        checkWinner(updatedBoard)
        return
      } else if (
        state.board[b] === "X" &&
        state.board[b] === state.board[c] &&
        state.board[a] === ""
      ) {
        const updatedBoard = [...state.board]
        updatedBoard[a] = "O"
        setState(prevState => ({
          ...prevState,
          board: updatedBoard,
          currentPlayer: "X",
        }))
        checkWinner(updatedBoard)
        return
      } else if (
        state.board[c] === "X" &&
        state.board[c] === state.board[a] &&
        state.board[b] === ""
      ) {
        const updatedBoard = [...state.board]
        updatedBoard[b] = "O"
        setState(prevState => ({
          ...prevState,
          board: updatedBoard,
          currentPlayer: "X",
        }))
        checkWinner(updatedBoard)
        return
      }
    }

    // If no winning move or blocking move is available, make a random move
    makeRandomMove()
  }

  const makeHardMove = () => {
    const availableCells = state.board
      .map((cell, index) => (cell === "" ? index : null))
      .filter(cell => cell !== null)

    const bestMove = minimax(state.board, "O").index
    const updatedBoard = [...state.board]
    updatedBoard[bestMove] = "O"

    setState(prevState => ({
      ...prevState,
      board: updatedBoard,
      currentPlayer: "X",
    }))

    checkWinner(updatedBoard)
  }

  const minimax = (board, player) => {
    const availableCells = board
      .map((cell, index) => (cell === "" ? index : null))
      .filter(cell => cell !== null)

    if (checkWin(board, "X")) {
      return { score: -1 }
    } else if (checkWin(board, "O")) {
      return { score: 1 }
    } else if (availableCells.length === 0) {
      return { score: 0 }
    }

    const moves = []

    for (let i = 0; i < availableCells.length; i++) {
      const move = {}
      move.index = availableCells[i]

      const updatedBoard = [...board]
      updatedBoard[availableCells[i]] = player

      if (player === "O") {
        const result = minimax(updatedBoard, "X")
        move.score = result.score
      } else {
        const result = minimax(updatedBoard, "O")
        move.score = result.score
      }

      moves.push(move)
      updatedBoard[availableCells[i]] = ""
    }

    let bestMove
    if (player === "O") {
      let bestScore = -Infinity
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score > bestScore) {
          bestScore = moves[i].score
          bestMove = i
        }
      }
    } else {
      let bestScore = Infinity
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score < bestScore) {
          bestScore = moves[i].score
          bestMove = i
        }
      }
    }

    return moves[bestMove]
  }

  const checkWin = (board, player) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    for (let combination of winningCombinations) {
      const [a, b, c] = combination
      if (
        board[a] === player &&
        board[a] === board[b] &&
        board[a] === board[c]
      ) {
        return true
      }
    }

    return false
  }

  const resetGame = () => {
    setState(prevState => ({
      ...INITIAL_STATE,
      difficulty: prevState.difficulty,
    }))
  }

  return (
    <div style={styles.container}>
      <h2>Tic Tac Toe</h2>
      <div style={styles.board}>
        {state.board.map((cell, index) => (
          <div
            key={index}
            style={styles.cell}
            onClick={() => handleCellClick(index)}
          >
            {cell}
          </div>
        ))}
      </div>
      {state.winner && (
        <div>
          {state.winner === "X" ? "You win!" : "Bot wins!"}
          <div>
            <button style={styles.restartButton} onClick={resetGame}>
              Restart
            </button>
          </div>
        </div>
      )}
      {state.isGameFinished && !state.winner && (
        <div>
          It's a tie!
          <div>
            <button style={styles.restartButton} onClick={resetGame}>
              Restart
            </button>
          </div>
        </div>
      )}
      <div>
        <label htmlFor="difficulty">Difficulty: </label>
        <select
          id="difficulty"
          value={state.difficulty}
          onChange={e =>
            setState(prevState => ({
              ...prevState,
              difficulty: e.target.value,
            }))
          }
        >
          <option style={{ color: "black" }} value="easy">
            Easy
          </option>
          <option style={{ color: "black" }} value="medium">
            Medium
          </option>
          <option style={{ color: "black" }} value="hard">
            Hard
          </option>
        </select>
      </div>
    </div>
  )
}
