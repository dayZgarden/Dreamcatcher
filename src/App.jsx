import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Landing from './pages/Landing';
import Calendar from './pages/CalendarPage';
import DayTasks from './pages/DayTasks';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/calendar/day" element={<DayTasks />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;