import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./views/Login";
import ProtectedRoutes from "./middlewares/ProtectedRoutes";

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Login/>} />

            <Route element={<ProtectedRoutes />} />
            <Route/>

        </Routes>
      </BrowserRouter>
  );
}

export default App;
