import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext<any>(null);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentUser, setCurrentUser] = useState<string>("");
  const item: string | null = localStorage.getItem("user");

  useEffect(() => {
    if (item) {
      const user = JSON.parse(item);
      setCurrentUser(user);
    }
  }, []);

  const updateUser = (data: any) => {
    setCurrentUser(data);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    item && (
      <AuthContext.Provider value={{ currentUser, updateUser }}>
        {children}
      </AuthContext.Provider>
    )
  );
};
