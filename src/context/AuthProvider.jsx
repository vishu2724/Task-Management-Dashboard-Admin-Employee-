import React, { createContext, useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({ employees: [], admin: [] });

  useEffect(() => {
    if (!localStorage.getItem("employees")) {
      setLocalStorage();
    }

    const { employees, admin } = getLocalStorage();
    setUserData({ employees, admin });
  }, []);

  // ⭐ TASK UPDATE FUNCTION (MAIN FIX)
  const updateEmployeeTasks = (employeeName, taskObj) => {
    setUserData(prev => {
      const updatedEmployees = prev.employees.map(emp => {
        if (emp.firstName === employeeName) {
          return {
            ...emp,
            tasks: [...emp.tasks, taskObj],
            taskNumbers: {
              ...emp.taskNumbers,
              newTask: emp.taskNumbers.newTask + 1
            }
          };
        }
        return emp;
      });

      // Update localStorage also
      localStorage.setItem("employees", JSON.stringify(updatedEmployees));

      return { ...prev, employees: updatedEmployees };
    });
  };

  return (
    <AuthContext.Provider value={{ userData, setUserData, updateEmployeeTasks }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
