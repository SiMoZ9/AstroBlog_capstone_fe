import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./views/Login";
import ProtectedRoutes from "./middlewares/ProtectedRoutes";
import Home from "./views/Home";
import PersonalHome from "./views/personalHome";

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/login" element={<Login />} />

            <Route element={<ProtectedRoutes />} />
                <Route path='personalHome' element={<PersonalHome/>} />
            <Route/>

        </Routes>
      </BrowserRouter>
  );
}

export default App;
