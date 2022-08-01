import { useState } from 'react';
import { InnerContainer } from '../Modal.style';
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

  const switchPage = (pageNum: number) => {
    switch (pageNum) {
      case 0:
        return <Page01 handlePage={handleNextPage} />;
      case 1:
        return (
          <Page02 handlePage={handlePreviousPage} onSignUp={handleSignUp} />
        );
      default:
        return <Page01 handlePage={handleNextPage} />;
    }
  };

  return <InnerContainer>{switchPage(page)}</InnerContainer>;
};

export default SignUp;
