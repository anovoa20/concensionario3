import "styles/styles.css";
import Index from "pages/Index";
import Admin from "pages/Admin";
import Login from "pages/Login";
import Registro from "pages/Registro";
import PrivateLayout from "layouts/PrivateLayout";
import PublicLayout from "layouts/PublicLayout";
import AuthLayout from "layouts/AuthLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//<Route path="/admin" element={<Admin />} >
//<Route path="/" element={<Index />} />

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route
          path="/admin"
          element={
            <PrivateLayout>
              <Admin />
            </PrivateLayout>
          }
        />
        <Route
          path="/registro"
          element={
            <AuthLayout>
              <Registro />
            </AuthLayout>
          }
        />
        <Route
          path="/login"
          element={
            <AuthLayout>
              <Login />
            </AuthLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
