import { useState } from 'react';
import { Page01, Page02 } from './SignUpPage';

const SignUp = () => {
  const [page, setPage] = useState(0);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePreviousPage = () => {
    setPage(page - 1);
  };

  const handleSignUp = () => {
    console.log('회원가입 로직');
  };

  return (
    <>
      {page === 0 ? (
        <Page01 handlePage={handleNextPage} />
      ) : (
        <Page02 handlePage={handlePreviousPage} onSignUp={handleSignUp} />
      )}
    </>
  );
};

export default SignUp;
