import "styles/styles.css";
import Index from "pages/Index";
import Admin from "pages/admin/Admin";
import Login from "pages/Login";
import Registro from "pages/Registro";
import PrivateLayout from "layouts/PrivateLayout";
import PublicLayout from "layouts/PublicLayout";
import AuthLayout from "layouts/AuthLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Vehiculos from "pages/admin/Vehiculos";
import Clientes from "pages/admin/Clientes";
//<Route path="/admin" element={<Admin />} >
//<Route path="/" element={<Index />} />

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <PublicLayout>
              <Index />
            </PublicLayout>
          }
        />
        <Route
          path="/admin"
          element={
            <PrivateLayout>
              <Admin />
            </PrivateLayout>
          }
        />
        <Route
          path="/admin/vehiculos"
          element={
            <PrivateLayout>
              <Vehiculos />
            </PrivateLayout>
          }
        />
        <Route
          path="/admin/clientes"
          element={
            <PrivateLayout>
              <Clientes />
            </PrivateLayout>
          }
        />
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
