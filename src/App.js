import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./views/Login";
import ProtectedRoutes from "./middlewares/ProtectedRoutes";
import Home from "./views/Home";

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Login/>} />

            <Route element={<ProtectedRoutes />} />
                <Route path='/home' element={<Home />} />
            <Route/>

        </Routes>
      </BrowserRouter>
  );
}

export default App;
