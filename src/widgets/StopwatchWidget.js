import React, { useState, useEffect } from "react"

const styles = {
  stopwatchButton: {
    background: "none",
    border: "none",
    color: "white",
    fontSize: "15px",
    cursor: "pointer",
    paddingTop: "10px",
    paddingBottom: "10px",
  },
}

export default function StopwatchWidget() {
  const [time, setTime] = useState(0)
  const [status, setStatus] = useState("stopped")
  const [laps, setLaps] = useState([])

  useEffect(() => {
    let interval
    if (status === "running") {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10)
      }, 10)
    }
    return () => clearInterval(interval)
  }, [status])

  const handleButtonClick = () => {
    if (status === "stopped") {
      setStatus("running")
    } else {
      setStatus("stopped")
    }
  }

  const handleReset = () => {
    setTime(0)
    setLaps([])
    setStatus("stopped")
  }

  const handleLap = () => {
    setLaps(prevLaps => [...prevLaps, time])
  }

  const formatTime = time => {
    const minutes = Math.floor(time / 60000)
    const seconds = ((time % 60000) / 1000).toFixed(2)
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
  }

  return (
    <div style={{ minWidth: 300 }}>
      <h2>Stopwatch</h2>
      <p>{formatTime(time)}</p>

      <div
        className="button-controls"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <button
          style={styles.stopwatchButton}
          onClick={() => handleButtonClick("running")}
        >
          {status === "stopped" ? "Start" : "Stop"}
        </button>
        <button
          style={styles.stopwatchButton}
          onClick={handleLap}
          disabled={status === "stopped"}
        >
          Lap
        </button>
        <button style={styles.stopwatchButton} onClick={handleReset}>
          Reset
        </button>
      </div>

      {laps.length > 0 && (
        <div>
          <h3>Laps:</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {laps.map((lap, index) => (
              <li key={index}>{formatTime(lap)}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
