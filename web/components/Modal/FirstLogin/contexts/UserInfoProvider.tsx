import { createContext, useContext, useState } from 'react';
import { UpdateInfo } from '../../../../types';
import {
  validateImage,
  validateIntroduce,
  validateName,
} from '../../../../util/validateUserInfo';

interface IUserInfoContext {
  userInfo: UpdateInfo;
  setUserName: Function;
  setUserIntroduce: Function;
  setUserInterests: Function;
  getUpdatedUserInfo: Function;
  setUserInfo: Function;
  removeUserInfo: Function;
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
  const [userInfo, setUserInfo] = useState(defaultValue);

  const setUserName = (nameValue: string) => {
    setUserInfo({
      ...userInfo,
      name: nameValue,
    });

    return true;
  };

  const setUserIntroduce = (introduceValue: string) => {
    setUserInfo({
      ...userInfo,
      introduce: introduceValue,
    });

    return true;
  };

  const setUserInterests = (tags: string[]) => {
    setUserInfo({
      ...userInfo,
      interests: tags,
    });

    return true;
  };

  const getUpdatedUserInfo = (imageSrc: string) => {
    const isValidateImage = validateImage(imageSrc.length);
    if (!isValidateImage.status) return isValidateImage.error;

    const finalUserInfo = {
      ...userInfo,
      image: imageSrc,
    };
    setUserInfo(finalUserInfo);

    return finalUserInfo;
  };

  const removeUserInfo = () => {
    setUserInfo(defaultValue);
  };

  return (
    <UserInfoContext.Provider
      value={{
        userInfo,
        setUserInfo,
        setUserName,
        setUserIntroduce,
        setUserInterests,
        getUpdatedUserInfo,
        removeUserInfo,
      }}
    >
      {children}
    </UserInfoContext.Provider>
  );
};

export default UserInfoProvider;
