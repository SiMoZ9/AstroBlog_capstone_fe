import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./views/Login";
import Register from "./views/Register"
import ProtectedRoutes from "./middlewares/ProtectedRoutes";
import Home from "./views/Home";
import PersonalHome from "./views/personalHome";
import NewPost from "./views/NewPost";

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Register />} />

            <Route element={<ProtectedRoutes />} />
                <Route path='/personalHome' element={<PersonalHome/>} />
                <Route path='/publish' element={<NewPost/>} />
            <Route/>

        </Routes>
      </BrowserRouter>
  );
}

export default App;
