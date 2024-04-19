import { User } from "@/types";
import { FC, ReactNode, createContext, useState } from "react";

const UserContext = createContext<{
  user: User | null;
  setUser: (user: User | null) => void;
}>({ user: null, setUser: () => null });

interface UserContextProviderProps {
  children: ReactNode;
}

const UserContextProvider: FC<UserContextProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContextProvider, UserContext };
