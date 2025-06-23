import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicLayout from "@/layouts/PublicLayout";
import Home from "@/routes/Home";
import AuthLayout from "@/layouts/AuthLayout";
import SignInPage from "@/routes/SignIn";
import SignUpPage from "@/routes/SignUp";
import ProtectedRoutes from "./layouts/ProtectedRoutes";
import MainLayout from "./layouts/MainLayout";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* public routes */}
        <Route element={<PublicLayout />}>
          <Route index element={<Home />} />
        </Route>

        {/* authentication layout */}
        <Route element={<AuthLayout />}>
          <Route path="/signin/*" element={<SignInPage />} />
          <Route path="/signup/*" element={<SignUpPage />} />
        </Route>

        {/* private / protected routes */}
        <Route
          element={
            <ProtectedRoutes>
              <MainLayout />
            </ProtectedRoutes>
          }
        >
          {/* add all protected routes */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
