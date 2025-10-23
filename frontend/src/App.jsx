import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import InfoCollect from "./components/InfoCollect";
import Dashboard from "./components/Dashboard";
import ExamPrep from "./components/ExamPrep";
import NotesOrganizer from "./components/NotesOrganizer";
import EmailManager from "./components/EmailManager";
import AttendanceTracker from "./components/AttendanceTracker";
import LearningResources from "./components/LearningResources";
import CareerInsights from "./components/CareerInsights";
import ChatAssistant from "./components/ChatAssistant";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/info-collect" element={<InfoCollect />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/examprep" element={<ExamPrep />} />
        <Route path="/notesorganizer" element={<NotesOrganizer />} />
        <Route path="/emailmanager" element={<EmailManager />} />
        <Route path="/attendancetracker" element={<AttendanceTracker />} />
        <Route path="/learningresources" element={<LearningResources />} />
        <Route path="/careerinsights" element={<CareerInsights />} />
        <Route path="/chatassistant" element={<ChatAssistant />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
