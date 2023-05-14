import { BrowserRouter as Router ,Routes,Route } from "react-router-dom";
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import ForgotPassword from "./pages/ForgotPassword"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
function App() {
  return (
   <>
   <Router>
    <Routes>
      <Route path ="/" element={<Home />}  >
      <Route path ="/profile" element={<Profile />}  >
      <Route path ="/forgot-password" element={<ForgotPassword />}  >
      <Route path ="/sign-in" element={<SignIn />}  >
      <Route path ="/sign-up" element={<SignUp />}  >

      </Route>
      </Route>
      </Route>
      </Route>
      </Route>
      
    
      
    
    </Routes>
   </Router>
   </>
  );
}

export default App;
