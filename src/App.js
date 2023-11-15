import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./views/Login";
import Register from "./views/Register"
import ProtectedRoutes from "./middlewares/ProtectedRoutes";
import Home from "./views/Home";
import PersonalHome from "./views/personalHome";
import NewPost from "./views/NewPost";
import PostDetail from "./views/PostDetail";
import DetailsContext from "./context/DetailsContext";
import UserContext from "./context/UserContext";
import Me from "./views/Me";
import Me_instrumentation from "./views/Me_instrumentation";
import {Me_post} from "./views/Me_post";
import PostEdit from "./views/PostEdit";
import UserPage from "./views/UserPage";
import ProfileContext from "./context/ProfileContext";
import AllPosts from "./views/AllPosts";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Register/>}/>

                <Route element={<ProtectedRoutes/>}/>
                <Route path='/personalHome' element={<PersonalHome/>}/>
                <Route path='/publish' element={<NewPost/>}/>
                <Route path='/skyPosts/all' element={<AllPosts />} />

                <Route element={<DetailsContext/>}>
                    <Route path='/skyPosts/:id' element={<PostDetail/>}/>
                    <Route path='/skyPost/edit/:id' element={<PostEdit/>}/>
                </Route>

                <Route element={<UserContext/>}>
                    <Route path='/account' element={<Me/>}/>
                    <Route path='/account/instruments' element={<Me_instrumentation/>}/>
                    <Route path='/account/posts' element={<Me_post/>}/>
                </Route>

                <Route element={<ProfileContext/>}>
                    <Route path='/profile/:id' element={<UserPage/>}/>
                </Route>
                <Route/>

            </Routes>
        </BrowserRouter>
    );
}

export default App;
