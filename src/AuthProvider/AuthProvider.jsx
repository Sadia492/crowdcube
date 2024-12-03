import React, { createContext, useState } from "react";

export const authContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState("snigdha");

  const authInfo = {
    user,
  };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
}
