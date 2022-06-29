import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const loginHolder = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [loginInfo, setLoginInfo] = useState(loginHolder);
  const [userAuthId, setUserAuthId] = useState();
  const [accountStatus, setAccountStatus] = useState('');

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({
      ...loginInfo,
      [name]: value,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        userAuthId,
        setUserAuthId,
        loginInfo,
        setLoginInfo,
        handleLoginChange,
        accountStatus,
        setAccountStatus
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
