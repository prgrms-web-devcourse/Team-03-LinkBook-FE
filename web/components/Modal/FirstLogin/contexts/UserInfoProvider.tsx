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
    const nameLen = nameValue.length;
    if (!validateName(nameLen)) return '1-8자 사이의 길이로 입력해주세요.';

    setUserInfo({
      ...userInfo,
      name: nameValue,
    });

    return true;
  };

  const setUserIntroduce = (introduceValue: string) => {
    const introduceLen = introduceValue.length;
    if (!validateIntroduce(introduceLen))
      return '1-50자 사이의 길이로 입력해주세요.';

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
    const imageLen = imageSrc.length;
    if (!validateImage(imageLen)) return '이미지를 업로드해주세요.';

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
