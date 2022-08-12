import { createContext, ReactNode, useContext, useState } from 'react';

interface IUserContext {
  email: string;
  setEmail: Function;
  password: string;
  setPassword: Function;
  removeUserInfo: Function;
}

interface Props {
  children: ReactNode;
}

const UserContext = createContext<IUserContext>(null);
export const useUserInfo = () => useContext(UserContext);

const UserProvider = ({ children }: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const removeUserInfo = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <UserContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        removeUserInfo,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
