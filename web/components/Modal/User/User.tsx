import UserInfoProvider from './contexts/UserInfoProvider';
import { useState } from 'react';
import { Page01, Page02 } from './UserPage';
import { getCookie } from '../../../util/cookies';
import { useRecoilValue } from 'recoil';
import { userInfo } from '../../../recoil/user';

const User = () => {
  const userInfoState = useRecoilValue(userInfo);
  const token = getCookie('ACCESS_TOKEN');

  const [page, setPage] = useState(0);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const switchPage = (pageNum: number) => {
    switch (pageNum) {
      case 0:
        return (
          <Page01
            handlePage={handleNextPage}
            token={token}
            userData={userInfoState.user}
          />
        );
      case 1:
        return <Page02 token={token} userData={userInfoState.user} />;
      default:
        return <></>;
    }
  };

  return <UserInfoProvider>{switchPage(page)}</UserInfoProvider>;
};

export default User;
