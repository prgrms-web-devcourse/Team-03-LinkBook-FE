import { createContext, useContext, useState } from 'react';
import { UpdateInfo } from '../../../../types';

interface IUserInfoContext {
  updatedUserInfo: UpdateInfo;
  setUpdatedUserInfo: Function;
  setBasicUserInfo: Function;
  removeUserInfo: Function;
}

interface BasicUserInfo {
  name: string;
  introduce: string;
  image: string;
}

const UserInfoContext = createContext<IUserInfoContext>(null);
export const useUserInfo = () => useContext(UserInfoContext);

const UserInfoProvider = ({ children }: any) => {
  const defaultValue: UpdateInfo = {
    name: '',
    introduce: '',
    interests: [],
    image: '',
  };
  const [updatedUserInfo, setUpdatedUserInfo] = useState(defaultValue);

  const setBasicUserInfo = ({ name, introduce, image }: BasicUserInfo) => {
    setUpdatedUserInfo({
      ...updatedUserInfo,
      name,
      introduce,
      image,
    });
  };

  const removeUserInfo = () => {
    setUpdatedUserInfo(defaultValue);
  };

  return (
    <UserInfoContext.Provider
      value={{
        updatedUserInfo,
        setUpdatedUserInfo,
        setBasicUserInfo,
        removeUserInfo,
      }}
    >
      {children}
    </UserInfoContext.Provider>
  );
};

export default UserInfoProvider;
