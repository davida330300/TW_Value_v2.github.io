import './App.css';
import React from 'react';
import {HashRouter, Route, Routes} from 'react-router-dom'

import Main from "./pages/main"
import Welcome from  "./pages/welcome"
import Quiz from "./pages/quiz"
import Result from "./pages/result"

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
