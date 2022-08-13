import { createContext, useContext, useState } from "react";
import { User } from "../utils/types";

export interface IUserContext {
  userInfo: User;
  setUserInfo: React.Dispatch<React.SetStateAction<User>>;
}
const UserContext = createContext<IUserContext | null>(null);
export const useUserContext = () => useContext(UserContext);

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [userInfo, setUserInfo] = useState({
    id: 0,
    email: "",
    name: "",
    image: "",
    introduce: "",
  });

  return (
    <UserContext.Provider
      value={{
        userInfo,
        setUserInfo,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default ContextProvider;
