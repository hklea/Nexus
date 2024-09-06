import { BrowserRouter, Route, Routes } from "react-router-dom";
import EntryPage from "./pages/EntryPage";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import Logout from "./components/Logout";


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<EntryPage />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/home" element={<EntryPage />} />
          <Route path="/signin" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
