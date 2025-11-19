import React, { useContext, useEffect, useState } from 'react';
import Login from './componenets/Auth/Login';
import EmployeeDashboard from './componenets/Dashboard/EmployeeDashboard';
import AdminDashboard from './componenets/Dashboard/AdminDashboard';
import { AuthContext } from './context/AuthProvider';

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setloggedInUserData] = useState(null);

  const AuthData = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setloggedInUserData(userData.data);
    }
  }, []);

  const handleLogin = (email, password) => {

    if (!AuthData || !AuthData.userData) {
      alert("User data not loaded yet.");
      return;
    }

    const { employees, admin } = AuthData.userData; // ⭐ FIXED

    const adminUser = admin.find(
      (a) => a.email === email && a.password === password
    );

    const employeeUser = employees.find(
      (e) => e.email === email && e.password === password
    );

    if (adminUser) {
      setUser("admin");
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin" })
      );
    } else if (employeeUser) {
      setUser("employee");
      setloggedInUserData(employeeUser);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee", data: employeeUser })
      );
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      {!user ? (
        <Login handlelogin={handleLogin} />
      ) : user === "admin" ? (
        <AdminDashboard changeUser={setUser} />
      ) : (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      )}
    </>
  );
};

export default App;


