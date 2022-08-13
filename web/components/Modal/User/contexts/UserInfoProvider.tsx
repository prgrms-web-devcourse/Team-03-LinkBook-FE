import { createContext, useContext, useState } from 'react';
import { UpdateInfo } from '../../../../types';
import {
  validateImage,
  validateIntroduce,
  validateName,
} from '../../../../util/validateUserInfo';

interface IUserInfoContext {
  updatedUserInfo: UpdateInfo;
  setUpdatedUserInfo: Function;
  validateUserInfo: Function;
  setBasicUserInfo: Function;
  getUpdatedUserInfo: Function;
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

  const validateUserInfo = ({ name, introduce, image }: BasicUserInfo) => {
    const nameLen = name.length;
    const introduceLen = introduce.length;
    const imageLen = image.length;

    return {
      nameValue: validateName(nameLen),
      introduceValue: validateIntroduce(introduceLen),
      imageValue: validateImage(imageLen),
    };
  };

  const setBasicUserInfo = ({ name, introduce, image }: BasicUserInfo) => {
    setUpdatedUserInfo({
      ...updatedUserInfo,
      name,
      introduce,
      image,
    });
  };

  const getUpdatedUserInfo = (tags: string[]) => {
    return {
      ...updatedUserInfo,
      interests: tags,
    };
  };

  const removeUserInfo = () => {
    setUpdatedUserInfo(defaultValue);
  };

  return (
    <UserInfoContext.Provider
      value={{
        updatedUserInfo,
        setUpdatedUserInfo,
        validateUserInfo,
        setBasicUserInfo,
        getUpdatedUserInfo,
        removeUserInfo,
      }}
    >
      {children}
    </UserInfoContext.Provider>
  );
};

export default UserInfoProvider;
