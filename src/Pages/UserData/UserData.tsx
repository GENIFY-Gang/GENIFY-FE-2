import React, { createContext, useContext, useState, useEffect } from "react";

interface UserData {
  role: string;
  email: string;
  access_token: string;
}

const RoleDataContext = createContext({});

// Export the RoleDataContext for use in other components
export default RoleDataContext;

// RoleDataProvider component
export const RoleDataProvider = ({
  children,
  userData,
}: {
  children: React.ReactNode;
  userData: UserData | null;
}) => {
  const [storedData, setStoredData] = useState<UserData | null>(null);

  useEffect(() => {
    const userDetails = window.localStorage.getItem("loggedData");

    if (userDetails !== null) {
      const data = JSON.parse(userDetails) as UserData;
      setStoredData(data);
    } else {
    }
  }, []);

  return (
    <RoleDataContext.Provider value={{ storedData }}>
      {children}
    </RoleDataContext.Provider>
  );
};

// Custom hook to consume the roleData
export const useRoleData = () => useContext(RoleDataContext);
