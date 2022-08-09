import { createContext, useContext, useEffect, useState } from 'react';

interface IUserContext {
  email: string;
  setEmail: Function;
  password: string;
  setPassword: Function;
  removeUserInfo: Function;
}

const defaultValue = {
  email: '',
  setEmail: () => {},
  password: '',
  setPassword: () => {},
  removeUserInfo: () => {},
};

const UserContext = createContext<IUserContext>(defaultValue);
export const useUserInfo = () => useContext(UserContext);

const UserProvider = ({ children }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const removeUserInfo = () => {
    setEmail('');
    setPassword('');
  };

  useEffect(() => {
    console.log(email, password);
  }, [email, password]);

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
