import { createContext, useContext, useState } from 'react';
import { UpdateInfo } from '../../../../types';
import {
  validateImage,
  validateIntroduce,
  validateName,
} from '../../../../util/validateUserInfo';

interface IUpdateUserContext {
  updateUser: UpdateInfo;
  setUpdateUser: Function;
  validateUserInfo: Function;
  setUserBasicInfo: Function;
  getUpdatedUserInfo: Function;
  removeUserInfo: Function;
}

interface BasicUserInfo {
  name: string;
  introduce: string;
  image: string;
}

const UpdateUserContext = createContext<IUpdateUserContext>(null);
export const useUpdateUser = () => useContext(UpdateUserContext);

const UpdateUserProvider = ({ children }: any) => {
  const defaultValue: UpdateInfo = {
    name: '',
    introduce: '',
    interests: [],
    image: '',
  };
  const [updateUser, setUpdateUser] = useState(defaultValue);

  const validateUserInfo = ({ name, introduce, image }: BasicUserInfo) => {
    const nameLen = name.length;
    const introduceLen = introduce.length;
    const imageLen = image.length;

    return {
      name: !validateName(nameLen)
        ? '1-8자 사이의 길이로 입력해주세요.'
        : false,
      introduce: !validateIntroduce(introduceLen)
        ? '1-50자 사이의 길이로 입력해주세요.'
        : false,
      image: !validateImage(imageLen) ? '이미지를 업로드해주세요.' : false,
    };
  };

  const setUserBasicInfo = ({ name, introduce, image }: BasicUserInfo) => {
    setUpdateUser({
      ...updateUser,
      name,
      introduce,
      image,
    });
  };

  const getUpdatedUserInfo = (tags: string[]) => {
    return {
      ...updateUser,
      interests: tags,
    };
  };

  const removeUserInfo = () => {
    setUpdateUser(defaultValue);
  };

  return (
    <UpdateUserContext.Provider
      value={{
        updateUser,
        setUpdateUser,
        validateUserInfo,
        setUserBasicInfo,
        getUpdatedUserInfo,
        removeUserInfo,
      }}
    >
      {children}
    </UpdateUserContext.Provider>
  );
};

export default UpdateUserProvider;
