import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./routes/homepage/HomePage";
import DashBoardPage from "./routes/dashboard/DashBoardPage";
import ChatPage from "./routes/chatPage/ChatPage";
import SignIn from "./routes/signIn/SignIn";
import SignUp from "./routes/signUp/SignUp";
import RootLayout from "./layouts/rootLayout/RootLayout";

const App = () => {
  return (
    <>
      <Router>
        <RootLayout />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* setup nested routing */}
          <Route path="/dashboard">
            <Route path="" element={<DashBoardPage />} />
            <Route path="chats/:id" element={<ChatPage />} />
          </Route>

          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
