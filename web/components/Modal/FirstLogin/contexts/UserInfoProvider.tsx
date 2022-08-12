import { createContext, useContext, useEffect, useState } from 'react';
import { UpdateInfo } from '../../../../types';

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
    if (nameLen > 8 || nameLen === 0)
      return '1-8자 사이의 길이로 입력해주세요.';

    setUserInfo({
      ...userInfo,
      name: nameValue,
    });

    return true;
  };

  const setUserIntroduce = (introduceValue: string) => {
    const introduceLen = introduceValue.length;
    if (introduceLen > 50 || introduceLen === 0)
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
    if (imageLen === 0) return '이미지를 업로드해주세요.';

    return {
      ...userInfo,
      image: imageSrc,
    };
  };

  const removeUserInfo = () => {
    setUserInfo(defaultValue);
  };

  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);

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
