import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import NotesOrganizer from "./components/NotesOrganizer";
import ExamPrep from "./components/ExamPrep";
import EmailManager from "./components/EmailManager";
import AttendanceTracker from "./components/AttendanceTracker";
import LearningResources from "./components/LearningResources";
import CareerInsights from "./components/CareerInsights";
import ChatAssistant from "./components/ChatAssistant";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/notes" element={<NotesOrganizer />} />
          <Route path="/exam-prep" element={<ExamPrep />} />
          <Route path="/email" element={<EmailManager />} />
          <Route path="/attendance" element={<AttendanceTracker />} />
          <Route path="/resources" element={<LearningResources />} />
          <Route path="/career" element={<CareerInsights />} />
          <Route path="/chat" element={<ChatAssistant />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
