import { useState } from 'react';
import { Page01, Page02, Page03, Page04, Page05 } from './FirstLoginPage';

const FirstLogin = () => {
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
        return <Page01 handleNextPage={handleNextPage} />;
      case 1:
        return (
          <Page02
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
          />
        );
      case 2:
        return (
          <Page03
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
          />
        );
      case 3:
        return (
          <Page04
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
          />
        );
      default:
        return <Page05 handlePreviousPage={handlePreviousPage} />;
    }
  };

  return <>{switchPage(page)}</>;
};

export default FirstLogin;
