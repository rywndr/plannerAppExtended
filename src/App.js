import React, { useState } from "react"
import "./App.css"
import ClockWidget from "./widgets/ClockWidget"
import WidgetGalleryModal from "./modals/WidgetGalleryModal"
import Draggable from "react-draggable"
import TimerWidget from "./widgets/TimerWidget"
import CalendarWidget from "./widgets/CalendarWidget"
import TicTacToeWidget from "./widgets/TicTacToeWidget"

function App() {
  const [widgets, setWidgets] = useState([
    {
      id: new Date().getTime(),
      component: <ClockWidget />,
      area: "main-widget",
      name: "Date and Time",
    },
    {
      id: new Date().getTime() + 2,
      component: <CalendarWidget />,
      area: "right-widget",
      name: "Calendar",
    },
    {
      id: new Date().getTime() + 1,
      component: <TimerWidget />,
      area: "left-widget",
      name: "Timer",
    },
    {
      id: new Date().getTime() + 3,
      component: <TicTacToeWidget />,
      area: "left-widget",
      name: "Tic Tac Toe",
    },
  ])

  const [showWidgetModal, setShowWidgetModal] = useState(false)
  const [selectedWidgetArea, setSelectedWidgetArea] = useState("")

  const removeWidget = id => {
    setWidgets(widgets.filter(widget => widget.id !== id))
  }

  const widgetOptions = [
    { area: "none-widget", label: "Floating" },
    { area: "left-widget", label: "Left" },
    { area: "main-widget", label: "Main" },
    { area: "right-widget", label: "Right" },
  ]

  const renderWidgets = area => {
    return widgets
      .filter(widget => widget.area === area)
      .map(widget => (
        <Draggable key={widget.id}>
          <div style={{ padding: 10 }} className="widget-container">
            <div style={{ marginBottom: 10 }}>
              <select
                value={widget.area}
                onChange={e => {
                  const updatedWidgets = [...widgets]
                  const widgetIndex = updatedWidgets.findIndex(
                    w => w.id === widget.id
                  )
                  updatedWidgets[widgetIndex].area = e.target.value
                  setWidgets(updatedWidgets)
                }}
              >
                {widgetOptions.map(option => (
                  <option key={option.area} value={option.area}>
                    {option.label}
                  </option>
                ))}
              </select>
              <button
                onClick={() => removeWidget(widget.id)}
                style={{
                  background: "none",
                  border: "none",
                  color: "white",
                  fontSize: "15px",
                  cursor: "pointer",
                  float: "right",
                }}
              >
                Close
              </button>
            </div>
            {widget.component}
          </div>
        </Draggable>
      ))
  }

  const renderAddWidgetButton = (area, maxWidgets) => {
    const areaWidgets = widgets.filter(widget => widget.area === area)
    if (areaWidgets.length < maxWidgets) {
      return (
        <button
          className="add-widget-button"
          onClick={() => {
            setShowWidgetModal(true)
            setSelectedWidgetArea(area)
          }}
        >
          + Add Widget
        </button>
      )
    }
    return null
  }

  return (
    <>
      {showWidgetModal && (
        <WidgetGalleryModal
          setShowWidgetModal={setShowWidgetModal}
          selectedWidgetArea={selectedWidgetArea}
          widgets={widgets}
          setWidgets={setWidgets}
        />
      )}
      <div className="add-button">
        <p
          className="add-widget-button"
          style={{
            background: "none",
            border: "none",
            color: "black",
            fontSize: "30px",
            cursor: "pointer",
            backgroundColor: "white",
            borderRadius: "50%",
            width: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50px",
            position: "fixed",
            bottom: "10px",
            right: "10px",
          }}
          onClick={() => {
            setShowWidgetModal(true)
            setSelectedWidgetArea("none-widget")
          }}
        >
          +
        </p>
      </div>
      <div className="none-widget">{renderWidgets("none-widget")}</div>
      <div className="App">
        <div className="container">
          <div className="left-widget">
            {renderWidgets("left-widget")}
            {renderAddWidgetButton("left-widget", 3)}
          </div>
          <div className="main-widget">
            {renderWidgets("main-widget")}
            {renderAddWidgetButton("main-widget", 2)}
          </div>
          <div className="right-widget">
            {renderWidgets("right-widget")}
            {renderAddWidgetButton("right-widget", 3)}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
