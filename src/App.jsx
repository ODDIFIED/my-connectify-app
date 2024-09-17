import { Route, Routes } from "react-router-dom";
import Home from "./Layout/Home";
import AdminDash from "./pages/loginAuth/AdminDash";
import Login from "./pages/loginAuth/login";
import PageNotFound from "./pages/PageNotFound";
import SignUp from "./pages/SignUp";

function App() {


  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/dashboard" element={<AdminDash/>}/>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
