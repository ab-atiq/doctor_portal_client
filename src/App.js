import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Appointment from "./Components/Appointment/Appointment";
import Blogs from "./Components/Blogs/Blogs";
import ContactUs from "./Components/ContactUs/ContactUs";
import AuthProvider from "./Components/Contexts/AuthProvider/AuthProvider";
import AddDoctor from "./Components/Dashboard/AddDoctor/AddDoctor";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import DashboardHome from "./Components/Dashboard/DashboardHome/DashboardHome";
import MakeAdmin from "./Components/Dashboard/MakeAdmin/MakeAdmin";
import DentalServices from "./Components/DentalServices/DentalServices";
import Home from "./Components/Home/Home";
import AdminRoute from "./Components/Login/AdminRoute/AdminRoute";
import Login from "./Components/Login/Login/Login";
import Register from "./Components/Login/Register/Register";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Reviews from "./Components/Reviews/Reviews";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<DentalServices />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<ContactUs />} />
            <Route
              path="appointment"
              element={
                <PrivateRoute>
                  <Appointment />
                </PrivateRoute>
              }
            />
            <Route
              path="dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            >
              <Route path="home" element={<DashboardHome />} />
              <Route
                path="makeAdmin"
                element={
                  <AdminRoute>
                    <MakeAdmin />
                  </AdminRoute>
                }
              />
              <Route
                path="addDoctor"
                element={
                  <AdminRoute>
                    <AddDoctor />
                  </AdminRoute>
                }
              />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
