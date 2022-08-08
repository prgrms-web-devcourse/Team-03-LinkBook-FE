import { useState } from 'react';
import { Page01, Page02 } from './SignUpPage';
import UserProvider from './contexts/UserProvider';

const SignUp = () => {
  const [page, setPage] = useState(0);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePreviousPage = () => {
    setPage(page - 1);
  };

  const switchPage = (pageNum: number) => {
    switch (pageNum) {
      case 0:
        return <Page01 handlePage={handleNextPage} />;
      case 1:
        return <Page02 handlePage={handlePreviousPage} />;
      default:
        return <Page01 handlePage={handleNextPage} />;
    }
  };

  return <UserProvider>{switchPage(page)}</UserProvider>;
};

export default SignUp;
